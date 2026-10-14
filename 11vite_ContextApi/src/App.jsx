import {useState, useContext,createContext} from 'react'
const UserContext =createContext();


const Navbar=()=>{
  console.log("Navbar get rendered");


  const Mininav =()=>{
    console.log("Mininav get rendered");
      const {user}=useContext(UserContext);
    return<>
    <div>
      <h1>hello!{user}</h1>
    </div>
    </>
  }
  return<>
  <Mininav/>
  </>
}
   const OnChangeName =()=>{
    console.log("OnChangeNameg got render");
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
