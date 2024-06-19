import PropTypes from 'prop-types'
import Button from './Button'

// const Headedr = () => {
    
//     return (
      
         
  
//          <div className="container">
     
     
//      <p>youe luy no is {Math.floor(Math.random()*10)}</p>
  
//      </div>
      
//     )
//   }
  
//   export default Headedr



/////////////////prpops 

// const Headedr = (props) => {
    
//     return (
      

//       <header><h1>{props.title}</h1></header>
//     )
//   }
  
//   export default Headedr



///////////////////////default prop//////////

// const Headedr = (props) => {
    
//     return (
      

//       <header><h1>{props.title}</h1></header>
//     )
//   }
  
//   Headedr.defaultProps={
//     title:"defaultprop",
//     }
//   export default Headedr



///////////////////using destructure with spread operaterprops////////////////////////
// const Headedr = ({a,b,c}) => {
    
//     return (
      

//       <header><h1>{a} {b} {c}</h1></header>
//     )
//   }
  
//   Headedr.defaultProps={
//     a:"defaultprop",
//     b:"hgkj",
//     c:"jkjk"
//     }
//   export default Headedr



///////////////////////prototype/ Warning: Invalid DOM property `class`. Did you mean `className`?
    // be careful please import prototype
    // at App//////////////////
// const Headedr = ({title}) => {
    
//     return (
      

//       <header><h1>{title}</h1></header>
//     )
//   }
  
//   Headedr.defaultProps={
//     title:"defaultprop",
    
//     }
// Headedr.propTypes={
//   title:PropTypes.string.isRequired,
// }

//   export default Headedr



////////////////////style//////////////////////////////////////////
//  const Headedr = ({title}) => {
    
//         return (
          
//     // inline style
//     // <header><h1 style={{color:'red',backgroundColor:'black'}}}>{title}</h1></header>

//           <header><h1 style={headingstyle}>{title}</h1></header>
//         )
//       }
      
//       Headedr.defaultProps={
//         title:"defaultprop",
        
//         }
//     Headedr.propTypes={
//       title:PropTypes.string.isRequired,
//     }

//     const headingstyle={
//       color:'red',backgroundColor:'black'
//     }
    
//       export default Headedr
    
    ////////////////add button///////////////////////////
//  const Headedr = ({title}) => {
    
//         return (
          
//           <header className='header'>
//           <h1>{title}</h1>
//         <Button color='green' text='Add Button' />
//           </header>
//         )
//       }
      
//       Headedr.defaultProps={
//         title:"defau",
        
//         }
//     Headedr.propTypes={
//       title:PropTypes.string.isRequired,
//     }

    
    
//       export default Headedr


////////onclick event with button in header///////////////////////

// const Headedr = ({title}) => {
//     const onClick=()=>{
//       console.log('click2')
//     }
//     return (
      
//       <header className='header'>
//       <h1>{title}</h1>
//     <Button color='green' text='Add Button' onClick={onClick}/>
//       </header>
//     )
//   }
  
//   Headedr.defaultProps={
//     title:"defau",
    
//     }
// Headedr.propTypes={
//   title:PropTypes.string.isRequired,
// }



//   export default Headedr

////////////////////////add buton togg;e//////////////////////////////////////////////////



// const Headedr = ({title,onAdd}) => {
    
//     return (
      
//       <header className='header'>
//       <h1>{title}</h1>
//     <Button color='green' text={showAdd ? 'close Button':'Add Button'} onClick={onAdd}/>
//       </header>
//     )
//   }
  
//   Headedr.defaultProps={
//     title:"defau",
    
//     }
// Headedr.propTypes={
//   title:PropTypes.string.isRequired,
// }



//   export default Headedr

////////////////////show add/////////////////////////////////////////////

const Headedr = ({title,onAdd,showAdd}) => {
    
    return (
      
      <header className='header'>
      <h1>{title}</h1>
    <Button
     color={showAdd ? 'red':'green'}
      text={showAdd? 'close Button':'Add Button'}
     onClick={onAdd}/>
      </header>
    )
  }
  
  Headedr.defaultProps={
    title:"defau",
    
    }
Headedr.propTypes={
  title:PropTypes.string.isRequired,
}



  export default Headedr









































































