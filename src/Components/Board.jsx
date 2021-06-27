import React from 'react'
import Square from './Square'
const style={
    backgroundColor:"skyblue",
    border:"5px solid black",
    borderRadius:"10px",
    width:"600px",
    height:"600px",
    margin:"60px auto",
    display:"grid",
    gridTemplate:"repeat(3, 1fr)/ repeat(3, 1fr)"
}
const Board = ({squares,onClick}) => {
  return (
    <div style={style}>
      
      {
          squares.map((square,i)=>
          (
            
              <Square key={i} onClick={()=>onClick(i)} value={square}/>
          ))
      }
    </div>
  )
}

export default Board
