import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import tmdbApi, { movieType } from "./api/tmdbApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
