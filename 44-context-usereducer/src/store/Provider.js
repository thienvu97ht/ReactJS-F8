import React, { useReducer } from "react";
import logger from "./logger";
import Context from "./Context";
import reducer, { initState } from "./reducer";

function Provider({ children }) {
  const [state, dispatch] = useReducer(logger(reducer), initState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
