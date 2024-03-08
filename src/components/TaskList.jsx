import React from 'react';
import Card from './Cards';

function TaskList({tasks , reference , removeTask }) {

  return (
    <>
      <div className='flex gap-2 flex-wrap'>
        {tasks.map((task, index) => (
          <Card reference={reference} key={index} task={task} removeTask={removeTask}/>
        ))}
      </div>
    </>
);
}
export default TaskList