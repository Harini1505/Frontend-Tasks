// CounterApp.jsx

import React, { useReducer } from 'react';
import { counterReducer, initialState } from './counterReducer';

function CounterApp() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
    <br/>
    <hr/>
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>➕ Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>➖ Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>🔄 Reset</button>
    </div>
    </>
  );
}

export default CounterApp;
