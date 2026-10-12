import React from 'react'

export default function card(props) {
    console.log(props);
  return (
    <>
      <div className="card">
      <img src={props.img} alt="" />
    <h1>{props.username}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda velit consequatur numquam delectus illo quod quasi minus quam corporis odit voluptatum molestiae dolor, harum tempora explicabo accusantium consequuntur eum ipsam!</p>
      <button>View Profile</button>
      </div>
    </>
  )
}

