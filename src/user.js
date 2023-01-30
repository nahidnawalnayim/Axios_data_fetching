import React from 'react'

function User({id,name}) {
  return (
    <div id={id}>
        <h1>{name}</h1>
    </div>
  )
}

export default User