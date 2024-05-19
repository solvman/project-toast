import React from "react";

function useToggle(initialState = false) {
  const [state, setState] = React.useState(initialState);

  const toggle = () => setState((currentState) => !currentState);

  return [state, toggle];
}

export default useToggle;
