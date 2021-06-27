import React from 'react'

const styles={
  //marginTop:"50px",
   background:"pink",
   border:"1px solid black",
   fontSize: "50px",
   fontWeight:"800",
   cursor:"pointer",
   outline:"none",
   width:"200px",
   height:"200px",
}
const Square = ({value,onClick}) => {
  return (
    <div>
      <button onClick={onClick} style={styles}>
          {value}
      </button>
    </div>
  )
}

export default Square
