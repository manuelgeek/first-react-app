import {useReducer} from "react";

export default function useCountReducer() {
  const initialState = {count: 0};

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count:  state.count ? state.count - 1 : state.count};
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state, dispatch
  }
}
