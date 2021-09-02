import Task from "./Task"

const Tasks = ({tasks,onDelete, onToggle}) => {

    
    return (
        <>
            {tasks.map((tsk)=>(
            <Task key={tsk.id} 
            task={tsk} onDelete={onDelete} onToggle={onToggle}/>))}
        </>
    )
}

export default Tasks
