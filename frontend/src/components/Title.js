import React from 'react'

export default function Title({title}) {
  return (
    <div className='row'>
      <div className='col-10 mx-auto text-title'>
        <h1>{title}</h1>
      </div>
    </div>
  )
}
