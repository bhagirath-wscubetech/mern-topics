import React, { useState } from 'react'
import { BsTrash } from "react-icons/bs";
export default function Item(props) {
    const [done, setDone] = useState(false);
    return (
        <div onClick={() => setDone(!done)} className={`select-none cursor-pointer w-full border-b p-3 flex justify-between items-center`}>
            <div>
                <span className='pr-2 text-[14px] text-slate-400'>
                    {props.time}
                </span>
                <span className={`${done === true ? 'line-through' : ''} text-[20px]`}>
                    {props.item}
                </span>
            </div>
            <div onClick={() => props.removeHandler(props.id)}>
                <BsTrash className='text-[#e74c3c]' />
            </div>
        </div>
    )
}
