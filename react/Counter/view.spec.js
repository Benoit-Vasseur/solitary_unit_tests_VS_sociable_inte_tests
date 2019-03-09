import React from "react";
import { render, cleanup } from "react-testing-library";
import { CounterView } from "./view";

afterEach(cleanup);

describe("Counter View", () => {
  test("render the correct number of click", () => {
    const { getByText } = render(<CounterView clicks="2" />);
    expect(getByText("2 clicks")).not.toBeNull();
  });

  test("render the click button", () => {
    const { getByText } = render(<CounterView clicks="2" />);
    expect(getByText("Click")).not.toBeNull();
  })
});
