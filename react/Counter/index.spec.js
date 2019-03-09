import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import { Counter, CounterClass } from "./index";

afterEach(cleanup);

describe("Counter cpt, resilent to refactoring", () => {
  [Counter, CounterClass].forEach(Cpt => {
    test("increment on button click", () => {
      const { getByText } = render(<Cpt />);
      fireEvent.click(getByText("Click"));
      expect(getByText("1 clicks")).not.toBeNull();
    });
  });
});
