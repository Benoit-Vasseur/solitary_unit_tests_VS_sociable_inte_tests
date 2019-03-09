import React from "react";
import { render } from "react-dom";
import { CounterView } from "./Counter/view";

const app = document.querySelector("#app");

render(<CounterView clicks="10" />, app);
