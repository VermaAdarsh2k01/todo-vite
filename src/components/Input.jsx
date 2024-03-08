import React from 'react'
import { useState } from 'react'
import {motion} from "framer-motion"
import { IoIosAddCircle } from "react-icons/io";


function Input({addTask}) {
    
    const [newTask, setNewTask] = useState('');
      
    const handleChange = (e) => {
        setNewTask(e.target.value);
    };
      
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newTask.trim('')) return; 
        addTask(newTask);
        setNewTask('');
    };

    return (
        <div>
            <form className='flex gap-5'>
                <input 
                    className='w-[30vw] h-[5vh] rounded-lg px-3 py-1 text-[1vw] text-wrap bg-zinc-200 placeholder-black text-bold'
                    type='text'
                    placeholder='Enter Your Task'
                    onChange={handleChange}
                    value={newTask}
                ></input>
                <motion.button 
                    onClick={handleSubmit}
                    className='px-2 text-3xl text-[#E4E4E7]'
                >
                    <IoIosAddCircle/>
                </motion.button>
            </form>
        </div>
    )
}

export default Input