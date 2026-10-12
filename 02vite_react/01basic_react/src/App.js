import { useState,useEffect } from "react";

function App() {
  let [count,setCount] = useState(18) ;
  useEffect(()=>{
    console.log(count)
  },[count]);

  let addValue = () => {
    setCount(count+1);
    
    
  }
  let removeValue = () => {
    setCount(count-1); 

  }
  return (
    <>
      <h1>
        Counter : {count}
      </h1>
      <button
        className="button"
        onClick={addValue}
        style={{ height: "30px", marginRight: "10px" }}
      >
        Add Value
      </button>    <button
        className="button"
        onClick={removeValue}
        style={{ height: "30px" }}
      > Remove Value
      </button>
      </>
      );
}

      export default App;
