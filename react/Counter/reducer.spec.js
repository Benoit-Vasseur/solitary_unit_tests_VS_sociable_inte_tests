import { click, reducer } from "./reducer";

describe("Counter reducer", () => {
  test("return valid initial state", () => {
    expect(reducer()).toEqual(0);
  });

  test("click action", () => {
    expect(reducer(3, click())).toEqual(4);
  });
});
