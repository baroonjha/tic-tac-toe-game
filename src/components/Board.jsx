import React,{useState} from 'react'
import Square from './Square'

const Board = () => {
     const [state, setState] = useState(Array(9).fill(null))
     const [isXTurn, setXTurn] = useState(true)
     const checkWinner =()=>{
        const winner =[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for(let element of winner){
            //have destructure [0,1,2] a=0,b=2,c=3 element
            const [a,b,c] = element;
            if(state[a] !== null && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }
        }
        return false;
     }
     const isWinner = checkWinner();
   const handleClick =(index)=>{
    //copying previous state in copystate
    const copyState = [...state];
    copyState[index] = isXTurn ? 'x':'0';
    setState(copyState)
    //making xturn false 
    setXTurn(!isXTurn)
}


   const handelReset=()=>{
    setState(Array(9).fill(null))
   }

  return (
    <div className='board-container'>
        
        {isWinner ?(
            <>
             <h2>{isWinner} Won the game</h2>
            <button onClick={handelReset}>Play Again</button>
            </>
        ):(
            <>
        <div className='board-row'>
            <Square onClick={()=>handleClick(0)} value={state[0]}/>
            <Square onClick={()=>handleClick(1)} value={state[1]}/>
            <Square onClick={()=>handleClick(2)} value={state[2]}/>
        </div>
        <div className='board-row'>
        <Square onClick={()=>handleClick(3)} value={state[3]}/>
        <Square onClick={()=>handleClick(4)} value={state[4]}/>
        <Square onClick={()=>handleClick(5)} value={state[5]}/>

        </div>
        <div className='board-row'>
        <Square onClick={()=> handleClick(6)} value={state[6]}/>
        <Square onClick={()=> handleClick(7)} value={state[7]}/>
        <Square onClick={()=> handleClick(8)} value={state[8]}/>

        </div>
        {/* <button disabled={Array(9).findOne(null)} onClick={handelReset}>Play Again</button> */}
        
        </>
        )}
        
    </div>
  )
}

export default Board;