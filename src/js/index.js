import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import App from "./app";

import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

//ReactDOM.render(<App />, document.getElementById("chatApp"));
const domNode = document.getElementById("chatApp");
const root = createRoot(domNode);
root.render(<App />);
