import { Head } from "./Head.jsx";
import React from "react";

export default function Deaths({ deaths }) {
  const filtered = Object.entries(deaths).filter(([, count]) => count > 88);
  filtered.sort(([, count1], [, count2]) => count2 - count1);
  return (
    <html>
      <Head title="deaths" />
      <body>
        <ol>
          <li>total: {Object.values(deaths).reduce((a, b) => a + b, 0)}</li>
          {filtered.map(([day, count]) => (
            <li key={day}>
              {day}: {count}
            </li>
          ))}
        </ol>
      </body>
    </html>
  );
}
