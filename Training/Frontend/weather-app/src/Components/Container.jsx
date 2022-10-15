import React from 'react'

export default function Container(props) {
    const cssClasses = ["container","text-white", props.extraClass]
    return (
        <div className={cssClasses.join(" ")}>
            <div className='row'>
                {props.children}
            </div>
        </div>
    )
}
