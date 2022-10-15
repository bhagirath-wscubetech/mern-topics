import React from 'react'

export default function ImgBox(props) {
    return (
        <img src={props.source} className="rounded shadow" alt="" width="100%" height="300px" />
    )
}
