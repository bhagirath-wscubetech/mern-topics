import React, { useContext } from 'react'
import ComC from './ComC'
import { MyTotal } from '../index'

export default function ComB() {
    const total = useContext(MyTotal)
    return (
        <>
            {/* <MyTotal.Consumer>
                {
                    (data) => {
                        return <div>ComB - {data}</div>
                    }
                }
            </MyTotal.Consumer> */}
            <div>ComB - {total} </div>
            <ComC />
        </>
    )
}
