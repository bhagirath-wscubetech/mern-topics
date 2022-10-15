import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

export default function Start() {
    const { setStart } = useContext(QuizContext)
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <button onClick={() => setStart(true)} className='border border-orange-500 p-3 text-5xl rounded'>Start</button>
        </div>
    )
}
