import {useState, useContext,createContext} from 'react'
const UserContext =createContext();


const Navbar=()=>{
    const {user}=useContext(UserContext);
    return<>
    <div>
      <h1>hello!{user}</h1>
    </div>
    </>
  }
   const OnChangeName =()=>{
    const {setuser} = useContext(UserContext);
    return <>
    <div>
      <button onClick={()=>setuser("rahul")} ></button>
      </div></>
   }
const App = () => {
  const [user, setuser]=useState('');

  


  return (
    <UserContext.Provider value={{user,setuser}}>
      <Navbar/>
      <OnChangeName/>
    </UserContext.Provider>
  )
}

export default App
