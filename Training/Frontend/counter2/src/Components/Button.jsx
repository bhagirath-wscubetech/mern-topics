import React from 'react'

export default function Button(props) {
    const myCss = ['App-link',props.extraCss]
    // console.log(myCss);
    return (
        <button onClick={props.event} className={myCss.join(" ")}>
            {props.symbol}
        </button>
    )
}
