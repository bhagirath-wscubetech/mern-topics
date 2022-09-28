import React from 'react'

export default function Button(props) {
  return (
    <button onClick={props.event} className='text-3xl m-4 px-4 py-2 bg-red-500 text-white rounded'>{props.data}</button>
  )
}
