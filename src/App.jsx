import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context
const CounterContext = createContext();

// Create a provider component
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

// Create CounterDisplay component
const CounterDisplay = () => {
  const { count } = useContext(CounterContext);

  // Use useEffect to log the counter value whenever it changes
  useEffect(() => {
    console.log(`Counter value changed to: ${count}`);
  }, [count]); // The effect depends on the 'count' state

  return (
    <div>
      <h2>Counter: {count}</h2>
    </div>
  );
};

// Create CounterControls component
const CounterControls = () => {
  const { increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <CounterProvider>
      <div>
        <h1>Simple Counter with Context API and useEffect</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterProvider>
  );
};


export default App;