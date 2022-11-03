import React from "react";
import Questions from './Questions'
import {useSelector} from 'react-redux'

const Quiz=()=> {


    const state=useSelector(state=>state)
    React.useEffect(()=>{
console.log(state)
    },[])
  const Next=()=>{

  }
  const Prev=()=>{

  }
  return (
    <div className="home">
        
      <h1>Quiz </h1>
    <Questions/>
      <button onClick={()=>Next}>Next</button>
      <button onClick={()=>Prev}>Prev</button>
    </div>
  );
}

export default Quiz;
