import React from 'react'

const Square = (props) => {
    const {onClick} = props
  return (
    <div onClick={onClick} style={{border: "1px solid blue",
    height: "70px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"}} className='square'>
        <h2>{props.value}</h2>
    </div>
  )
}

export default Square