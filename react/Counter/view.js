import React from "react";

export function CounterView({ clicks }) {
  return (
    <>
      <span className="clicks-count">{clicks} clicks</span>
      <button className="click-button">Click</button>
    </>
  );
}
