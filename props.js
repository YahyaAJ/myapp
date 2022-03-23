import React from 'react'

const User = (props) => {
    return <h1>Hello, {props.name}</h1>
}

  
export default function greeting() {
    return (
        <div>
          <User name="Yahya" />
        </div>
      )
}