import React from "react";
import { Head } from "./Head.jsx";

// eslint-disable-next-line react/display-name
export default () => (
  <html>
    <Head title="fhm-express" />
    <body>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/7">7-day rolling average per million people</a>
          </li>
          <li>
            <a href="/14">14-day case notification rate per 100000</a>
          </li>
          <li>
            <a href="/change">
              7-day average change compared to previous 7-day period
            </a>
          </li>
          <li>
            <a href="/deaths">deaths</a>
          </li>
          <li>
            <a href="/map">map</a>
          </li>
          <li>
            <a href="/chart">chart of 7-day average</a>
          </li>
        </ul>
      </nav>
    </body>
  </html>
);
