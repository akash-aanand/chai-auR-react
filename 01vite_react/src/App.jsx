import { useState } from "react"


function App() {
  var[age,setage]=useState(8)
  return (
    <>
   <h1>Chai aur react with vite || akash aanand</h1>
   <h1>age : {age} </h1>
   <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setage(age+1)}>
  Button
</button>    </>
  )
}

export default App
