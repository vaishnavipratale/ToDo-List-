// const task=[
//     {
//         id:1,
//         text:'doctor apoinment',
//         day:'feb 5th at 2:30pm',
//         reminder:true
//     },
//     {

//         id:2,
//         text:'cricket apoinment',
//         day:'feb 6th at 2:30pm',
//         reminder:true 
//     },{
//         id:3,
//         text:'mbbs apoinment',
//         day:'feb 7th at 2:30pm',
//         reminder:true
//     }

// ]

// const Task = () => {
//   return (
//     <>{task.map((task)=>(
//       <h3 key={task.id}>{task.text}</h3>

//     ))
//     }
//     </>
//   )
// }

// export default Task

////i want not seprate coponant iwantto do single
// so in this case use state
//state is imutable
// import { useState } from "react"
// const Task = () => {
//     const [task,setTask]=useState(
//         [
//     {
//         id:1,
//         text:'doctor apoinment',
//         day:'feb 5th at 2:30pm',
//         reminder:true 
//     },
//     {
       
//         id:2,
//         text:'cricket apoinment',
//         day:'feb 6th at 2:30pm',
//         reminder:true 
//     },{
//         id:3,
//         text:'mbbs apoinment',
//         day:'feb 7th at 2:30pm',
//         reminder:true
//     }

// ]   
//     )
//   return (
//     <>{task.map((task)=>(
//       <h3 key={task.id}>{task.text}</h3>

//     ))
//     }
//     </>
//   )
// }

// export default Task

//////////////add new data 
// dont do using task plese change andusing settask
/////////////////

// const Task = ({task}) => {
    
//   return (
//     <>{task.map((task)=>(
//       <h3 key={task.id}>{task.text}</h3>

//     ))
//     }
//     </>
//   )
// }

// export default Task


////////////////Mytask///////////////////////
import Mytask from "./Mytask";

const Task = ({task,onDelete,onToggle}) => {
    
  return (
    <>
    {task.map((task)=>(
      <Mytask key={task.id} task={task}  onDelete={onDelete} onToggle={onToggle}/>

    ))
    }
    </>
  )
}

export default Task

