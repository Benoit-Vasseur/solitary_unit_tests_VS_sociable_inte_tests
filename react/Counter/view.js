import React from "react";

export function CounterView({ clicks, onClick }) {
  return (
    <>
      <span className="clicks-count">{clicks} clicks</span>
      <button className="click-button" onClick={onClick}>Click</button>
    </>
  );
}
