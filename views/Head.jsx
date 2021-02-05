import React from "react";

export function Head({ title }) {
  return (
    <head>
      <title>{title}</title>
      <link rel="stylesheet" href="/stylesheets/style.css" />
    </head>
  );
}
