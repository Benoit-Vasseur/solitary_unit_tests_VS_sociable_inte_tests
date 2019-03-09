const click = () => ({
  type: "click-counter/click"
});

function reducer(state = 0, { type } = {}) {
  const actions = {
    [click().type]: () => state + 1
  };

  return (actions[type] && actions[type]()) || state;
}

export { reducer, click };
