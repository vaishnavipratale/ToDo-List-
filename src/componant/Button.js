import PropTypes from "prop-types"
// const Button = ({color,text}) => {
//   return <button style={{backgroundColor:color}} className='btn'>{text}</button>
// }


// Button.defaultProps={
//     color:'steelblue'
// }
// export default Button

///////////////click event using button///////////////////////////
// const Button=({color,text})=>{
//   const onclick=(e)=>{
// console.log("click")
//   }
//   return (<button onClick={onclick} style={{backgroundColor:"green"}} className="btn"> {text}</button>)
// }



// Button.defaultProps={
//     color:'steelblue'
// }
// export default Button

///////////////anoyher way click event using button///////////////////////

// const Button=({color,text,onClick})=>{
  
//   return (<button onClick={onClick} style={{backgroundColor:"green"}} className="btn"> {text}</button>)
// }



// Button.defaultProps={
//     color:'steelblue'
// }
// Button.propTypes={
//   text:PropTypes.string,
//   color:PropTypes.string,
//   onClick:PropTypes.func,
// }
// export default Button


////////////////////if color changablr then "color"/////////////////////////


const Button=({color,text,onClick})=>{
  
  return (<button onClick={onClick} style={{backgroundColor:color}} className="btn"> {text}</button>)
}



Button.defaultProps={
    color:'steelblue'
}
Button.propTypes={
  text:PropTypes.string,
  color:PropTypes.string,
  onClick:PropTypes.func,
}
export default Button








