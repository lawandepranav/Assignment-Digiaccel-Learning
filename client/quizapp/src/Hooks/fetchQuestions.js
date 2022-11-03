import React from "react";
import data from "../Data/data";
import { useDispatch } from "react-redux";

//redux actions
import * as Action from '../Redux/questionReducer'


export const useFetchQuestions=()=>{
const dispatch=useDispatch()
    const[getData, setGetData]=React.useState({isLoading:false, apiData:[], serverError:null})

    React.useEffect(()=>{
     setGetData(prev=> ({...prev, isLoading:true}));
     (async ()=>{
        try{
let question=await data;
if(question.length>0){
    setGetData(prev=> ({...prev, isLoading:false}));
    setGetData(prev=> ({...prev, apiData:question}));
    dispatch(Action.startExam(question))
}else{
    throw new Error("No questions")
}
        }
        catch(error){
            setGetData(prev=> ({...prev, isLoading:false}));
            setGetData(prev=> ({...prev, serverError:error}));
        }
     })()
    },[dispatch])

    return [getData, setGetData]
}