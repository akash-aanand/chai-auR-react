import { useState, useReducer } from "react";

function reducer(state, action) {
  if (action.type === "increment") {
    return {...state,weights :state.weights+ 1}
  }
  console.log("reach out side of decrement")
  if (action.type === "decrement" && state.weights > 0) {
    console.log("u reached inside of decrement")
    return {...state,weights: state.weights- 1}
  }
  return state;
}

function App() {
  // const [count, dispatch] = useReducer(reducer, 0);
  const [items, setweight] = useReducer(reducer, {
    name: "sugar",
    weights: 14,
  });
  return (
    <div>
      {/* <h1>My cart:</h1>
      <div>
        items : {count}
        <button onClick={() => dispatch({ type: "increment" })}>+ </button>
        <button onClick={() => dispatch({ type: "decrement" })}>- </button>{" "}
      </div> */}
      <div><h1>{items.name}: {items.weights}kg</h1>
      <div><button onClick={()=>setweight({type:"increment"})}>+</button>
      <button onClick={()=>setweight({type: "decrement"})}>-</button></div></div>
    </div>
  );
}

export default App;
