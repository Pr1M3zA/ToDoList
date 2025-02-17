import React, {useState} from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState(["Primera Tarea", "Segunda Tarea"])
    const [newTask, setNewTask] = useState("")

    
    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask.trim()])
            setNewTask("")
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }


    return(
        <div className='container'>
            <div className='title'>
                <h1>Tareas pendientes ✍️</h1>
            </div>

            <div>
                <input 
                    type="text"
                    placeholder='Nueva tarea'
                    value={newTask} 
                    onChange={handleInputChange}
                />
                <button
                    className='addTaskB'
                    onClick={addTask}>
                    Añadir
                </button>
            </div>
            <div className='tasks'>
                <ul>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span>{task}</span>
                            <button
                                className='deleteB'
                                onClick={() => deleteTask(index)}>
                                🗑️
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}


export default ToDoList