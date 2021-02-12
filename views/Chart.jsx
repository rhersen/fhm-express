import React from "react";
import { Head } from "./Head.jsx";

export default function Chart({ cases, population }) {
  const populationValues = Object.values(population);
  const region = 0;
  const dates = Object.keys(cases.Totalt_antal_fall);
  const headers = Object.keys(cases);
  const columns = headers.map((header) =>
    dates.map((date) => cases[header][date])
  );
  const yMax = 1400;
  const yScale = 600 / yMax;
  const yValues = Array.from({ length: yMax / 100 - 1 }).map(
    (value, i) => (i + 1) * 100
  );

  const sevenDayPerMillion = (a, pop) =>
    (a.slice(-7).reduce((a, b) => a + b, 0) / 7 / pop) * 1e6;

  return (
    <html>
      <Head title="chart of 7-day average" />
      <body>
        <div>{headers[region]}</div>
        <div className="chart">
          <div className="y-values">
            {yValues.map((y) => (
              <div key={y} className="y-value">
                {y}
              </div>
            ))}
          </div>
          <svg viewBox="0 0 800 600">
            {yValues.map((y) => (
              <line key={y} x1="0" y1={y * yScale} x2="800" y2={y * yScale} />
            ))}

            <polyline
              fill="none"
              stroke="#c3227d"
              points={(columns[region] || [])
                .map((cell, rowIndex) => {
                  const a = columns[region].slice(rowIndex - 13, rowIndex + 1);

                  const x = sevenDayPerMillion(a, populationValues[region]) || 0;
                  return `${(rowIndex * 800) / columns[region].length},${
                    600 - x * yScale
                  }`;
                })
                .join(" ")}
            />
          </svg>
        </div>
      </body>
    </html>
  );
}
