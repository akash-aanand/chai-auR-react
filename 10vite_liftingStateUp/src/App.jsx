
import {useState} from 'react'

const Namebox =({name,changeOnName})=>{
  return<>
  <input value={name} placeholder='write ur name' onChange={(e)=>changeOnName(e.target.value)}/>
  </>
}
const Privew = ({name})=>{
  return <>
  <h2>Hello! {name ||"Stranger"}</h2>
  </>
}

const App = () => {
  const [user, setUser]=useState('');

  return (
    <div>
      <div>
        <Namebox name={user} changeOnName={setUser} />
      </div>
      <div>
        <Privew name ={user}/>
      </div>
    </div>
  )
}

export default App
