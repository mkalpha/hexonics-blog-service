import React from "react";
import ReactDOM from "react-dom";
import {  httpBatchLink } from '@trpc/client';

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: hexonics-blog-view</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
