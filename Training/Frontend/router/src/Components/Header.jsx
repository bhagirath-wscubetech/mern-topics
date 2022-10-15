import React, { useState } from 'react'
import {Link} from "react-router-dom"
export default function Header() {
    const [counter,setCounter] = useState(2)
    return (
        <>
            {counter}
            {/* <a href="/">Home | </a> */}
            <Link to="/">Home |</Link>
            {/* <a href="/about">About | </a> */}
            <Link to="/about">About |</Link>
            {/* <a href="/gallery">Gallery </a> */}
            <Link to="/gallery">Gallery</Link>
        </>
    )
}
