import React from "react";

export const Table = ({ headers, dates, columns, population, f, color }) => {
  const populationValues = Object.values(population);

  const columnMapping = getColumnMapping();

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
          <span key={date} className="date">
            {date}
          </span>
        ))}
      {columns.map((column, colIndex) => (
        <>
          <span
            className="header"
            style={{ gridColumn: columnMapping[colIndex] + 2 }}
          >
            {headers[colIndex]}
          </span>
          {column
            .map((cell, rowIndex) => {
              const a = column.slice(rowIndex - 13, rowIndex + 1);
              const x = f(a, populationValues[colIndex]);
              if (x === undefined) return <span> </span>;
              return (
                <span
                  key={rowIndex}
                  className={color(x)}
                  style={{ gridColumn: columnMapping[colIndex] + 2 }}
                >
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

  function getColumnMapping() {
    return columns
      .map((column, originalColumnIndex) =>
        Math.round(f(column.slice(-14), populationValues[originalColumnIndex]))
      )
      .map((value, originalColumnIndex) => [originalColumnIndex, value])
      .sort(([, value1], [, value2]) => value2 - value1)
      .map(([originalColumnIndex], newColumnIndex) => [
        originalColumnIndex,
        newColumnIndex,
      ])
      .sort(
        ([originalColumnIndex1], [originalColumnIndex2]) =>
          originalColumnIndex1 - originalColumnIndex2
      )
      .map(([, newColumnIndex]) => newColumnIndex);
  }
};
