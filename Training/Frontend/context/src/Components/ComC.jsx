import React, { useContext } from 'react'
import { MyCounter, MyTotal } from "../index"
export default function ComC() {
    const total = useContext(MyTotal)
    const counter = useContext(MyCounter) // hook
    return (
        // <MyCounter.Consumer>
        //     {
        //         (counter) => {
        //             return (
        //                 <MyTotal.Consumer>
        //                     {
        //                         (total) => {
        //                             return <div>
        //                                 <h3>Com C</h3>
        //                                 <br />
        //                                 Counter: {counter}
        //                                 <br />
        //                                 Total: {total}
        //                             </div>
        //                         }
        //                     }
        //                 </MyTotal.Consumer>
        //             )
        //         }
        //     }
        // </MyCounter.Consumer>
        <>
            <div>
                <h3>Com C</h3>
                <br />
                Counter: {counter}
                <br />
                Total: {total}
            </div>
        </>
    )
}
