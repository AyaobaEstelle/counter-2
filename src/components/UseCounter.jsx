import { useReducer, useCallback } from "react";

const useCounter = () => {
  const ACTIONS = {
    INCREASE: "increase",
    DECREASE: "decrease",
    RESET: "reset",
    SET_VALUE: "setValue",
  };
  function getValue(value, count) {
    let result = count;
    if (!value) {
        result = count;
    } else if (Number.isFinite(+value)) {
        result = +value;
    }
      return result;
    }

  function reducer(count, action) {
    switch (action.type) {
      case ACTIONS.SET_VALUE:
        return getValue(action.value, count);
      case ACTIONS.INCREASE:
        return count + 1;
      case ACTIONS.DECREASE:
        return count -1;
      case ACTIONS.RESET:
        return 0;
      default:
        return count;
    }
  }
  const [count, dispatch] = useReducer(reducer, 0);
  const increment = useCallback(() => {
    dispatch({ type: ACTIONS.INCREASE });
  }, [dispatch]);

  const decrement = useCallback(() => {
    dispatch({ type: ACTIONS.DECREASE });
  }, [dispatch]);

  const reset = useCallback(() => {
    dispatch({ type: ACTIONS.RESET });
  }, [dispatch]);

  const setValue = useCallback(
    (value) => {
      dispatch({ type: ACTIONS.SET_VALUE, value });
    },
    [dispatch]
  );

  return { count, increment, decrement, reset, setValue };
};

export default useCounter;
