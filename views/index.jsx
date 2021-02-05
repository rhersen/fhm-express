const React = require("react");

const HelloMessage = (props) => (
  <html>
    <head>
      <link rel="stylesheet" href="/stylesheets/style.css" />
    </head>
    <body>
      <h1>{props.title}</h1>
      <p>Welcome to {props.title}</p>
    </body>
  </html>
);

export default HelloMessage;
