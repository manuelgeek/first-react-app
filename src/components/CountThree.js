import React from 'react';
import useCountReducer from "../hooks/useCountReducer";

function CountThree(props) {
  let {state, dispatch} = useCountReducer();

  return (
    <div>
      Count 3: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}

export default CountThree;
