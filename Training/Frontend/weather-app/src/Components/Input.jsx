import React, { useRef } from 'react'
import Container from './Container'

export default function Input(props) {
    const cityInput = useRef()
    return (
        <Container extraClass="card py-2 p-2">
            <div className="col-md-11">
                <input type="search" className='form-control' ref={cityInput} placeholder="Please enter the city name"/>
            </div>
            <div className="col-md-1">
                <button className='btn btn-primary' onClick={() => props.event(cityInput.current.value)}>Search</button>
            </div>
        </Container >
    )
}
