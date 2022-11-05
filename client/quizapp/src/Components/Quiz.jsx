import React from "react";
import Questions from './Questions'
import {useSelector} from 'react-redux'

const Quiz=()=> {


    const state=useSelector(state=>state)
    React.useEffect(()=>{

    },[])
  const Next=()=>{

  }
  const Prev=()=>{

  }
  return (
    <div className="home">
        
      <h1>Quiz </h1>
    <Questions/>
    <button onClick={()=>Prev}>Prev</button>
      <button onClick={()=>Next}>Next</button>
      
    </div>
  );
}

export default Quiz;
