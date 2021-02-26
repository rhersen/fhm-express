import React from "react";
import { Head } from "./Head.jsx";

export default function Chart({ cases, population }) {
  const populationValues = Object.values(population);
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
        <div className="chart">
          <svg viewBox="0 0 800 600">
            {yValues.map((y) => (
              <line key={y} x1="0" y1={y * yScale} x2="800" y2={y * yScale} />
            ))}

            {columns.map((column, key) => (
              <>
                <text x="0" y={(key + 2) * 24}>
                  {headers[key]}
                </text>
                <polyline
                  key={key}
                  fill="none"
                  stroke="#ccc"
                  points={(column || [])
                    .map((cell, rowIndex) => {
                      const a = column.slice(rowIndex - 13, rowIndex + 1);

                      const x =
                        sevenDayPerMillion(a, populationValues[key]) || 0;
                      return `${(rowIndex * 800) / column.length},${
                        600 - x * yScale
                      }`;
                    })
                    .join(" ")}
                />
              </>
            ))}
          </svg>
          <div className="y-values">
            {yValues.map((y) => (
              <div key={y} className="y-value">
                {y}
              </div>
            ))}
          </div>
        </div>
      </body>
    </html>
  );
}
