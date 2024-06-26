import React, { useState } from "react";
import Headedr from "./componant/Headedr";
import Task from "./componant/Task";
//add new data in task
//if you have add usestate hear error
import AddTask from "./componant/AddTask";
import './styles.css';

///how to acsse another js file
// const App = () => {

//   return (

//        <div class="container">
//         <Headedr/>
//        </div>

//   )
// }

// export default App

//how to paraller our filew execute
// class App extends React.Component {
//   render() {
//    return <h1>hellow from class</h1>
//   }
// }

// export default App

/////////////props/////////////////////////

// const App = () => {

//   return (

//        <div class="container">
//         <Headedr title='Hellow'/>
//        </div>

//   )
// }

// export default App

///////////////////defaul;t prop//////

// const App = () => {

//   return (

//        <div class="container">
//         <Headedr />
//        </div>

//   )
// }

// export default App

//////////////////////using destructuring with spread operaterprop///////////////////////////
// const App = () => {

//   return (

//        <div class="container">
//         <Headedr />
//        </div>

//   )
// }

// export default App

///////////////////////prototype
// const App = () => {

//   return (

//        <div class="container">
//                <Headedr />
//         {/* <Headedr title={1}/> */}
//        </div>

//   )
// }

// export default App

///////////////////////////Styles///////////////////////
// const App = () => {

//   return (

//        <div class="container">
//                <Headedr />
//         {/* <Headedr title={1}/> */}
//        </div>

//   )
// }

// export default App
/////////////add button///////////////////
// const App = () => {

//   return (

//        <div class="container">
//                <Headedr />
//         {/* <Headedr title={1}/> */}
//        </div>

//   )
// }

// export default App

//////////////task////////////////////
// const App = () => {

//   return (

//        <div class="container">
//                <Headedr />
//                <Task />
//        </div>

//   )
// }

// export default App

//////////////add task///////////////////////////
// const App = () => {
//   const [task,setTask]=useState(
//             [
//         {
//             id:1,
//             text:'doctor apoinment',
//             day:'feb 5th at 2:30pm',
//             reminder:true
//         },
//         {

//             id:2,
//             text:'cricket apoinment',
//             day:'feb 6th at 2:30pm',
//             reminder:true
//         },{
//             id:3,
//             text:'mbbs apoinment',
//             day:'feb 7th at 2:30pm',
//             reminder:true
//         }

//     ]
//         )
//   return (

//        <div class="container">
//                <Headedr />

//                {/* task pass as a prop */}
//                <Task task={task}/>
//        </div>

//   )
// }

// export default App

////delete task
// const App = () => {
//   const [task,setTask]=useState(
//             [
//         {
//             id:1,
//             text:'doctor apoinment',
//             day:'feb 5th at 2:30pm',
//             reminder:true
//         },
//         {

//             id:2,
//             text:'cricket apoinment',
//             day:'feb 6th at 2:30pm',
//             reminder:true
//         },{
//             id:3,
//             text:'mbbs apoinment',
//             day:'feb 7th at 2:30pm',
//             reminder:true
//         }

//     ]
//         )
// //mytask is actual button
// const deleteTask=(id)=>{
// console.log('delete',id)
// }

//   return (

//        <div class="container">
//                <Headedr />

//                <Task task={task} onDelete={deleteTask}/>
//        </div>

//   )
// }

// export default App

//////////////////delete task using function//////////////////////////////

// const App = () => {
//   const [task,setTask]=useState(
//             [
//         {
//             id:1,
//             text:'doctor apoinment',
//             day:'feb 5th at 2:30pm',
//             reminder:true
//         },
//         {

//             id:2,
//             text:'cricket apoinment',
//             day:'feb 6th at 2:30pm',
//             reminder:true
//         },{
//             id:3,
//             text:'mbbs apoinment',
//             day:'feb 7th at 2:30pm',
//             reminder:true
//         }

//     ]
//         )
//mytask is actual button
// const deleteTask=(id)=>{
// setTask(task.filter((task)=>task.id!==id))
// }

// //TOGGLE REMINDER
// const togglereminder=(id)=>{
//   console.log(id)
//  setTask(
//   task.map((task)=>
// task.id===id?{
//   ...task,reminder:!task.reminder
// }:task
//   )
//  )
// }
//   return (

//        <div class="container">
//                <Headedr />

//               {task.length>0 ? <Task task={task} onDelete={deleteTask}  onToggle={togglereminder}/>: 'no task remaining'}

//        </div>

//   )
// }

// export default App

////////////////////////Addtask when submit button click////////////////////////////////////////
// const App = () => {
//   const [task,setTask]=useState(
//             [
//         {
//             id:1,
//             text:'doctor apoinment',
//             day:'feb 5th at 2:30pm',
//             reminder:true
//         },
//         {

//             id:2,
//             text:'cricket apoinment',
//             day:'feb 6th at 2:30pm',
//             reminder:true
//         },{
//             id:3,
//             text:'mbbs apoinment',
//             day:'feb 7th at 2:30pm',
//             reminder:true
//         }

//     ]
//         )

// ///////////add////////////////
// const addTask=(tasks)=>{   //hear pass as a argument anyname but not same as object
// //console.log(task)
// const id=Math.floor(Math.random()*1000)+1
// const newtask={id,...tasks}
// setTask([...task,newtask])
// console.log(id)
// }

// // mytask is actual button

// const deleteTask=(id)=>{
// setTask(task.filter((task)=>task.id!==id))
// }

// //TOGGLE REMINDER
// const togglereminder=(id)=>{
//   console.log(id)
//  setTask(
//   task.map((task)=>
// task.id===id?{
//   ...task,reminder:!task.reminder
// }:task
//   )
//  )
// }

//   return (

//        <div class="container">
//                <Headedr />
//                <AddTask onAdd={addTask}/>

//               {task.length>0 ? <Task task={task} onDelete={deleteTask}  onToggle={togglereminder}/>: 'no task remaining'}

//        </div>

//   )
// }

// export default App

///////////////////when click add then shw only form////////////////////////////////////////////////
// const App = () => {
//   const [showAddtask,setShowAddTask]=useState(false)
//   const [task,setTask]=useState(
//             [
//         {
//             id:1,
//             text:'doctor apoinment',
//             day:'feb 5th at 2:30pm',
//             reminder:true
//         },
//         {

//             id:2,
//             text:'cricket apoinment',
//             day:'feb 6th at 2:30pm',
//             reminder:true
//         },{
//             id:3,
//             text:'mbbs apoinment',
//             day:'feb 7th at 2:30pm',
//             reminder:false
//         }

//     ]
//         )

// ///////////add////////////////
// const addTask=(tasks)=>{   //hear pass as a argument anyname but not same as object
// //console.log(task)
// const id=Math.floor(Math.random()*1000)+1
// const newtask={id,...tasks}
// setTask([...task,newtask])
// console.log(id)
// }

// // mytask is actual button

// const deleteTask=(id)=>{
// setTask(task.filter((task)=>task.id!==id))
// }

// //TOGGLE REMINDER
// const togglereminder=(id)=>{
//   console.log(id)
//  setTask(
//   task.map((task)=>
// task.id===id?{
//   ...task,reminder:!task.reminder
// }:task
//   )
//  )
// }

//   return (

//        <div class="container">
//        {/* button inside the header */}
//                <Headedr onAdd={()=>setShowAddTask(!showAddtask)}/>
//               {/* on add pass to header as a prop */}
//                {showAddtask && <AddTask onAdd={addTask}/>}

//               {task.length>0 ? <Task task={task} onDelete={deleteTask}  onToggle={togglereminder}/>: 'no task remaining'}

//        </div>

//   )
// }

// export default App

////i want to show addtask if not then not show at same page with same button ///////////////////////////////////////////////////////

const App = () => {
  const [showAddtask, setShowAddTask] = useState(false);
  const [task, setTask] = useState([
    {
      id: 1,
      text: "doctor apoinment",
      day: "feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "cricket apoinment",
      day: "feb 6th at 2:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "mbbs apoinment",
      day: "feb 7th at 2:30pm",
      reminder: false
    }
  ]);

  ///////////add////////////////
  const addTask = (tasks) => {
    //hear pass as a argument anyname but not same as object
    //console.log(task)
    const id = Math.floor(Math.random() * 1000) + 1;
    const newtask = { id, ...tasks };
    setTask([...task, newtask]);
    console.log(id);
  };

  // mytask is actual button

  const deleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id));
  };

  //TOGGLE REMINDER
  const togglereminder = (id) => {
    console.log(id);
    setTask(
      task.map((task) =>
        task.id === id
          ? {
              ...task,
              reminder: !task.reminder
            }
          : task
      )
    );
  };
  return (
    <div class="container">
      {/* button inside the header */}
      <Headedr
        onAdd={() => setShowAddTask(!showAddtask)}
        showAdd={showAddtask}
      />
      {/* on add pass to header as a prop */}
      {showAddtask && <AddTask onAdd={addTask} />}

      {task.length > 0 ? (
        <Task task={task} onDelete={deleteTask} onToggle={togglereminder} />
      ) : (
        "no task remaining"
      )}
    </div>
  );
};

export default App;
