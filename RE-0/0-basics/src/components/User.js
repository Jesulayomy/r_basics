import React from 'react'

function User({ user }) {
  return (
    <div className='col-6'>
    <div className='m-1 border border-2'>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p
        className={user.isAdmin ? "text-success" : "text-danger"}
      >You are {user.isAdmin ? "an Admin" : "Not an Admin"}</p>
      {user.age > 50 ? (
        <p>You are old</p>
        ) : (
        <p>You are still young</p>
      )}
      </div>
    </div>
  )
}

export default User