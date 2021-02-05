import React from "react";

// eslint-disable-next-line react/display-name
export default ({ error, message }) => (
  <div>
    <h1>{message}</h1>
    <h2>{error.status}</h2>
    <pre>{error.stack}</pre>
  </div>
);
