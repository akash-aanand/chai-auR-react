import React from 'react'
function Button(props) {
console.log(props)
  return (
   <>
   <button onClick={props.onClick} className={`h-[40px] w-[40px] hover:scale-125 rounded-full ${props.colMap[props.color_name]} transition-all duration-300 ease-in-out shadow-md hover:shadow-lg`}></button>
   </>
  )
}

export default Button
