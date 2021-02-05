import * as date from "./date.js";

export default ({ Sheets }) => {
  const sheet = Sheets?.["Antal per dag region"];
  if (!sheet) return {};

  const entries = Object.entries(sheet);

  const columnKeys = Object.fromEntries(
    entries
      .filter(([cell]) => /^[^A]1$/.test(cell))
      .map(([cell, value]) => [/^(\D+)(\d+)$/.exec(cell)[1], value.v])
  );

  const rowKeys = Object.fromEntries(
    entries
      .filter(([cell]) => /^A\d+$/.test(cell))
      .filter(([cell]) => cell !== "A1")
      .map(([cell, value]) => [/^(\D+)(\d+)$/.exec(cell)[2], value.w])
  );

  const columns = Object.fromEntries(
    Object.entries(columnKeys).map(([, value]) => [value, {}])
  );

  entries
    .filter(([cell]) => !/^A/.test(cell))
    .filter(([cell]) => !/\D1$/.test(cell))
    .forEach(([cell, value]) => {
      const match = /^(\D+)(\d+)$/.exec(cell);
      if (match)
        columns[columnKeys[match[1]]][date.iso(rowKeys[match[2]])] = value.v;
    });
  return columns;
};

