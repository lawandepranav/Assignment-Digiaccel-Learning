import React from "react";
import {useSelector} from 'react-redux'
//custom hook
import { useFetchQuestions } from "../Hooks/fetchQuestions";

const Questions=()=>{
const [checked, setChecked]=React.useState(undefined);

const [{isLoading, apiData, serverError}]=useFetchQuestions()
const {question}=useSelector(state=>state)
React.useEffect(()=>{
console.log(question.queue[0])
},[])

const onSelect=()=>{
    setChecked(true)
}

if (isLoading) return <h2>Loading...</h2>
if(serverError) return <h2>Unknown Error</h2>

    return(
        <div>
            <ol key={question.queue[0].id}>
                <h3>{question.queue[0].question}</h3>
               {question.queue[0].answers.map((q,i)=>(
                 <li ket={i}>
                 <input
                 type="radio"
                 value={true}
                 name="Options"
                 id={i}
                 onChange={onSelect}
                 />
                 <label htmlFor={i}>{q}</label>
             </li>
               ))}
            </ol>
        </div>
    )
}
export default Questions;