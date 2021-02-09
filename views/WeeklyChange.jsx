import { Head } from "./Head.jsx";
import React from "react";
import { Table } from "./Table.jsx";

export default function WeeklyChange({ cases }) {
  const dates = Object.keys(cases.Totalt_antal_fall);
  const headers = Object.keys(cases);

  return (
    <html>
      <Head title="7-day average change compared to previous 7-day period" />
      <body>
        <Table
          headers={headers}
          dates={dates}
          columns={headers.map((header) =>
            dates.map((date) => cases[header][date])
          )}
          f={(a) => {
            const prev = a.slice(0, 7).reduce((a, b) => a + b, 0);
            const curr = a.slice(-7).reduce((a, b) => a + b, 0);
            return (100 * (curr - prev)) / prev;
          }}
          color={(x) => {
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
