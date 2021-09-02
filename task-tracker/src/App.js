import {useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import About from './components/About'
import Footer from './components/Footer'
import AddTask from './AddTask'
function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const  [tasks,setTasks] = useState( [
    {
        id:1,
        text: 'Doctors appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },

])


// Add Task

const addTask =(task)=>{
  const id = Math.floor(Math.random()*1000) + 1

  const newTask ={ id , ...task}
  setTasks([...tasks , newTask])
}

  // Delete Task

  const deleteTask =(id)=>{
    setTasks(tasks.filter((task)=>task.id !== id))
  }


  // Toogle Task

  const toggleReminder =(id) =>{
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder:!task.reminder} : task))

  }
  return (

    <Router>


    <div className="App">

      <div className='container'>

      <Header title='Task Tracker' onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

      
      <Route path='/'  exact render = {(props)=> ( 

        <>

          {showAddTask && < AddTask onAdd={addTask}/>}

          {tasks.length > 0 ? <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Task to Show'}


        </>

      )}/>

      <Route path='/about' component={About}/>
       
      <Footer />

      </div>


    </div>

    </Router>
  );
}

export default App;
