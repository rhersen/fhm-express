import { Head } from "./Head.jsx";
import React from "react";
import { Table } from "./Table.jsx";

export default function FourteenDayPer1e5({ cases }) {
  const dates = Object.keys(cases.Totalt_antal_fall);
  const headers = Object.keys(cases);

  return (
    <html>
      <Head title="14-day case notification rate per 100000" />
      <body>
        <Table
          headers={headers}
          dates={dates}
          columns={headers.map((header) =>
            dates.map((date) => cases[header][date])
          )}
          f={(a, pop) => (a.reduce((a, b) => a + b, 0) / pop) * 1e5}
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
