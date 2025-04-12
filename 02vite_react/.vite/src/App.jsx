import React from 'react'
import Card from './componet/card'
import manikImg from "./componet/img/manik.jpeg";
const App = () => {
let objs ={name:"akash",
  age:"18",
  Bandariya_img:"https://i.pinimg.com/736x/29/64/fd/2964fde28a2adcf96a7f890fc187622e.jpg",
  Manik_img: manikImg
}
  return (
    <>
      <div className='bg-gray-100 min-h-screen'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Our cards</h1>
        <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
         {/* <Card channel="akash" obj={objs}/> */}
          <Card channel="Manik" obj={objs}/> 
          <Card channel="Bandariya" obj={objs} />
        </div>
        </div>
      </div>
    </>
  )
}

export default App
