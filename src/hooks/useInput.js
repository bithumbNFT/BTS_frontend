import { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChangeInput = e => {
    dispatch(e.target);
  };
  return [state, onChangeInput];
}
