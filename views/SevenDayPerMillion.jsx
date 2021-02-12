import { Head } from "./Head.jsx";
import React from "react";
import { Table } from "./Table.jsx";

export default function SevenDayPerMillion({ cases, population }) {
  const dates = Object.keys(cases.Totalt_antal_fall);
  const headers = Object.keys(cases);

  return (
    <html>
      <Head title="7-day rolling average per million people" />
      <body>
        <Table
          headers={headers}
          dates={dates}
          columns={headers.map((header) =>
            dates.map((date) => cases[header][date])
          )}
          population={population}
          f={(a, pop) =>
            (a.slice(-7).reduce((a, b) => a + b, 0) / 7 / pop) * 1e6
          }
          color={(y) => {
            const x = y * 1.4;
            for (let i = 960; i >= 60; i /= 2) if (x > i) return `color${i}`;
            if (x > 20) return "color20";
            if (x > 0) return "color1";
            return "color0";
          }}
        />
      </body>
    </html>
  );
}
