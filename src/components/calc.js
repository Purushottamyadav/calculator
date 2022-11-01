import React, { useState } from 'react'
import "./calc.css"

const Calc = () => {
const [calc,setCalc]=useState("")
const [result,setResult]=useState("");

const opres=["+","-","/","*","."]
const updateCalc=value=>{
    if((opres.includes(value)&& calc==="")||(opres.includes(value))&& (opres.includes(calc.slice(-1)))
    
    )
    {
        return ;
    }
    setCalc(calc+value);
    if(opres.includes(value)){
        setResult(eval(calc+value)).tostring()
    }
}
const calculate=()=>{
    setCalc(eval(calc)).tostring();
    console.log(calculate)
}
const deleteLast=()=>{
        if(calc===""){
            return ;
        }
        const value=calc.slice(0,-1);
        setCalc(value)
}
  return (
   <>
   <div className="main-container">
     <div>
        <h1>CALCULATOR</h1>
     </div>
     <div className='calculator'>
       <div className='display'>
        <h1>
        {result?<span>{result} </span>:""}{calc||"0"}
        </h1>
       
       </div>
       <div className='operators'>
            <button onClick={()=>updateCalc("+")}>+</button>
            <button onClick={()=>updateCalc("-")}>-</button>
            <button onClick={()=>updateCalc("/")}>/</button>
            <button onClick={()=>updateCalc("*")}>*</button>
            <button onClick={deleteLast}>C</button>
       </div>
       <div className='digits'>
        <button onClick={()=>updateCalc("1")}>1</button>
        <button onClick={()=>updateCalc("2")}>2</button>
        <button onClick={()=>updateCalc("3")}>3</button>
        <button onClick={()=>updateCalc("4")}>4</button>
        <button onClick={()=>updateCalc("5")}>5</button>
        <button onClick={()=>updateCalc("6")}>6</button>
        <button onClick={()=>updateCalc("7")}>7</button>
        <button onClick={()=>updateCalc("8")}>8</button>
        <button onClick={()=>updateCalc("9")}>9</button>
        <button onClick={()=>updateCalc("0")}>0</button>
        <button onClick={()=>updateCalc(".")}>.</button>
        <button style={{width:"260px"}} onClick={calculate}>=</button>
       </div>
     </div>
   </div>
   </>
  )
}

export default Calc
