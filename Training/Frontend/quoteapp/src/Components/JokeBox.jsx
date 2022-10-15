import React, { useState } from 'react'
export default function JokeBox(props) {
  return (
    <div className='Joke-Container'>
        <p>
            {props.quote}
        </p>
        <h3> - {props.author}</h3>
    </div>
  )
}
