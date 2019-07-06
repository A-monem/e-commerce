import React from 'react'

export default function Title({title}) {
  return (
    <div className='row mx-0'>
      <div className='col-10 mx-auto text-title mt-2 p-0'>
        <h1>{title}</h1>
      </div>
    </div>
  )
}
