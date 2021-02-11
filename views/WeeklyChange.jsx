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
            if (x > 100) return "color100";
            if (x > 50) return "color50";
            if (x > 25) return "color25";
            if (x > 10) return "color10";
            if (x > 0) return "color0";
            if (x > -10) return "color-10";
            if (x > -25) return "color-25";
            if (x > -50) return "color-50";
            return "color-100";
          }}
        />
      </body>
    </html>
  );
}
