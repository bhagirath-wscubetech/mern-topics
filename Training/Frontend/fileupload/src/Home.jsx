import React from 'react'
import DropZone from './Components/DropZone'
export default function Home() {
    const homeStyle = {
        width: "80%",
        margin: "50px auto",
        textAlign: "center"
    }
    return (
        <>
            <div style={homeStyle}>
                <DropZone />
            </div>
        </>
    )
}
