import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import { Counter, CounterClass } from "./index";

afterEach(cleanup);

describe("Counter cpt, resilent to refactoring", () => {
  [Counter, CounterClass].forEach(Cpt => {
    test("Initial is 0 click", () => {
        const { getByText } = render(<Cpt />);
        expect(getByText("0 clicks")).not.toBeNull();
      });

    test("increment on button click", () => {
      const { getByText } = render(<Cpt />);
      fireEvent.click(getByText("Click"));
      expect(getByText("1 clicks")).not.toBeNull();
    });
  });
  /*
  Those tests cover 100% of our code and asure that the component realy works for the user
  So we can ask ourselves why wrting unit test that test just our implemantation
  If it helps you to write to arrive here it's fine to write them during your TDD process for example
  But why not delete them after. There are going to red if you do some refactoring and do not cover
  more code than those integration tests
  */
});
