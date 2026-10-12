import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setcount((count) => count - 1);
          {
            setcount((count) => count - 1);
          }
        }}
      >
        [-]
      </button>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setcount((count) => count + 1);
        }}
      >
        [+]
      </button>
    </div>
  );
};

export default App;
