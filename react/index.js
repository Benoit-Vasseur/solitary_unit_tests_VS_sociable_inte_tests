import React from "react";
import { render } from "react-dom";
import { Counter, CounterClass } from "./Counter";

const app = document.querySelector("#app");

render(<CounterClass />, app);
