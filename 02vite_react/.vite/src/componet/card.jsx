import React from 'react'

let Card=(props)=> {
    console.log(props)
    const img=`${props.channel}_img`;
    const url=props.obj[img];
    console.log(url)
  return (<>
    {/* <div className='bg-white rounded-lg shadow-md bg-cover bg-center h-auto' style={{ backgroundImage: `url(${props.obj.bandariya_img})` }}>
      <h1 className='text-xl font-semibold mb-2'> {props.channel}</h1>
      <p className='text-gray-700'>{props.channel} is {props.obj.age} year old.</p>
    </div> */}
<div className="bg-white p-6 rounded-b-lg shadow-md rounded-lg flex justify-center">
  <div>
    <img src={url} alt="background" className="w-80 h-80 object-cover rounded-t-lg" />
  <h1 className="text-xl font-semibold mb-2">{props.channel}</h1>
  <p className="text-gray-700">
    {props.channel} is {props.obj.age} years old.
  </p>
  </div>
</div>

    </>
  )
}

export default Card
