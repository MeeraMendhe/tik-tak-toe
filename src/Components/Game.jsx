import { render } from '@testing-library/react'
import React, { useState } from 'react'
import { calculateWinner } from '../helper'
import Board from './Board'


const style={
    width:"200px",
    margin:"20px auto",
   // marginTop:"50px",
}
const Game = () => {
   
    const [history,setHistory]=useState([Array(9).fill(null)])
    const [stepNumber,setStepNumber]=useState(0)
    const [xIsNext,setXisNext]=useState(true)

    const winner=calculateWinner(history[stepNumber])
    
    const handleClick=(i)=>
    {
       const timeInHistory=history.slice(0,stepNumber+1);
       const current=timeInHistory[stepNumber] 
       const squares=[...current]

       //if user click an occupied square or if game is won ,return 
       if(winner||squares[i])
       {
           return
       }

       squares[i]=xIsNext?"X":"O";

       setHistory([...timeInHistory,squares])
       setStepNumber(timeInHistory.length);
       setXisNext(!xIsNext)
    }

    const jumpTo=step=>
    {
        setStepNumber(step);
        setXisNext(step%2===0)
    }
    
     const renderMoves=()=>{
       return  history.map((_step,move)=>
         {
             const destination= move ? `Got to move #${move}`:`Go to start`
             return(
                 <li key={move}>
                    <button onClick={()=>jumpTo(move)}>{destination}</button>
                 </li>
             )
         })
        }
    return (
    <div style={{display:"flex"}}>
      <Board  squares={history[stepNumber]} onClick={handleClick} />

      <div style={style}>
        <h1>  {winner? "Winner : "+winner: "Next player : "+ xIsNext? "X":"0"}</h1>  
       {renderMoves()}
      </div>
    </div>
  )
}

export default Game
