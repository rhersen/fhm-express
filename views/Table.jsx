import React from "react";

const population = [
  10230000,
  159748,
  287795,
  59636,
  287333,
  333202,
  130697,
  363351,
  245415,
  201290,
  250230,
  1376659,
  2374550,
  297169,
  383044,
  282342,
  271621,
  245380,
  275634,
  1724529,
  304634,
  465214,
];

export const Table = ({ headers, dates, columns, f }) => {
  return (
    <div
      className="table"
      style={{
        gridTemplateColumns: `max-content repeat(${headers.length}, 1fr)`,
        gridTemplateRows: `repeat(${dates.length + 1}, 1fr)`,
      }}
    >
      <span className="date" />
      {dates
        .slice()
        .reverse()
        .map((date) => (
          <span key={date} className="date">{date}</span>
        ))}
      {columns.map((column, colIndex) => (
        <>
          <span className="header">{headers[colIndex]}</span>
          {column
            .map((cell, rowIndex) => {
              const a = column.slice(rowIndex - 13, rowIndex + 1);
              const x = f(a, population[colIndex]);
              if (x === undefined) return <span> </span>;
              return (
                <span key={rowIndex} className={color(x)}>
                  {Math.round(x)}
                </span>
              );
            })
            .slice()
            .reverse()}
        </>
      ))}
    </div>
  );

  function color(x) {
    for (let i = 960; i >= 60; i /= 2) if (x > i) return `color${  i}`;
    if (x > 20) return "color20";
    if (x > 0) return "color1";
    return "color0";
  }
};
