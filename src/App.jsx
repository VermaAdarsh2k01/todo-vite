import './App.css';
import {useState , useRef}  from "react"
import Input from './components/Input';
import TaskList from './components/TaskList.jsx';

function App(){
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const removeTask = (taskRemove) => {
    setTasks( tasks.filter(task =>task!==taskRemove ));
  }

  const ref = useRef(null)

  return(
    <div className='w-full h-screen bg-zinc-900/90 flex flex-col gap-2 items-center px-2 py-2 overflow-hidden relative'  >
      <div className='input w-screen flex justify-center py-2 z-2'>
        <Input className='z-2'addTask={addTask}/>
      </div>
      <div ref={ref} className='flex w-screen h-full p-3 z-2'>
          {tasks.length > 0 && <TaskList  tasks={tasks} reference={ref} removeTask={removeTask}/>}
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-zinc-500 pointer-events-none'>
        <ul className='list-disc font-semibold '>
          <li>Enter Your Task</li>
          <li>Click the 'tick' mark to mark it completed</li>
          <li>Feel free to drag your card and have fun</li>
        </ul>
      </div>
    </div>
  );
}

export default App;

  
