import { useCallback, useState } from 'react'

function App() {
  const [length,setlength]=useState(8);
  const [numallowed, setnum]= useState(false);
  const [charallowed,setcharallowed]= useState(true);
  const [password, setpassword]= useState("");
  const passwordGenerator = useCallback(()=>{
    let str="asdfghjklqwertyuiopzxcvbmnABSDFGHJKLQWERTYUIOPZXCVMN"
    if (charallowed) str += '!@#$%^&*';
    if (numallowed) str +="1234567890";
    let pass='';
    for(let i= 1; i<=length ;i++){
      let char= Math.floor(Math.random()*length+1);
      pass+=str.charAt(char);
    }
    setpassword=pass;

  },[length,numallowed,charallowed,setpassword]);
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-500 text-orange-500'>
      <h1 className='text-white text-center'>PasswordGenerator</h1>    
    </div>
    

    </>
  )
}

export default App
