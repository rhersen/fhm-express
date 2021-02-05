import { Head } from "./Head.jsx";
import React from "react";
import { Table } from "./Table.jsx";

export default function SevenDayPerMillion({ cases }) {
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
          f={(a, pop) =>
            (a.slice(-7).reduce((a, b) => a + b, 0) / 7 / pop) * 1e6
          }
        />
      </body>
    </html>
  );
}
