import React, { useReducer } from "react";

import { CounterView } from "./view";
import { reducer, click } from "./reducer";

export function Counter() {
  const [clicks, dispatch] = useReducer(reducer, reducer());
  return <CounterView clicks={clicks} onClick={() => dispatch(click())} />;
}

export class CounterClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      click: 0
    }
  }

  clickHandler() {
    this.setState((state) => ({
      click: state.click + 1
    }))
  }

  render() {
    return <CounterView clicks={this.state.click} onClick={() => this.clickHandler()} />
  }
}
