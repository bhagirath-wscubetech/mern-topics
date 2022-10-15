import React from 'react'

export default function Container(props) {
    return (
        <div className='container mt-4'>
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}
