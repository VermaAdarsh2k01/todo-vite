import React, { useState } from 'react';
import { TiDocumentText } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {motion} from "framer-motion"

export default function Card({task , reference , removeTask}){

    const[completed , setCompleted] = useState(false)

    function handleCompleted({}){
        return(
            setCompleted( (prev) => !prev)
        )
    }



    return(
       <motion.div 
            drag 
            dragConstraints={reference} 
            whileDrag={{scale:1.2}}
            className='relative  w-[15vw] h-72 bg-zinc-900/90 rounded-[20px] flex flex-col px-3 py-2 overflow-hidden '
            style={{cursor:"grab" , wordWrap:'break-word'}}>
            <div className='text-2xl text-white mt-2 flex justify-between  ' >
                <TiTick  style={{cursor: "pointer"}} onClick={handleCompleted} />
                <IoIosCloseCircleOutline style={{cursor: "pointer"}} onClick={() => removeTask(task)} />
            </div>
            <span className="text-white mt-6 font-semibold w-full h-full">
                {task}
            </span>
            {completed && <div className={`absolute  bottom-0 w-full h-12 left-0 bg-green-600 rounded-b-20px flex justify-center items-center font-semibold`}>Completed!</div>}
        </motion.div>
    )
}
