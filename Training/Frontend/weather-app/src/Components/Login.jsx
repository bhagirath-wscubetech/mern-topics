import React from 'react'
import Container from './Container'
export default function Login(props) {
    return (
        <Container extraClass="pt-5">
            <button className='btn btn-warning text-white' onClick={props.event}>Login</button>
        </Container>
    )
}
