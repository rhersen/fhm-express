import React from "react";

export function Head({ title }) {
  return (
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="stylesheet" href="/stylesheets/style.css" />
    </head>
  );
}
