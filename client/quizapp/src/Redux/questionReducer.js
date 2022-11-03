
import {createSlice} from '@reduxjs/toolkit'

export const questionReducer=createSlice({
    name:'questions',
    initialState:{
        queue:[],
        answers:[],
        trace:0
    },
    reducers:{
        startExam:(state, action)=>{
            return {
                ...state,
                queue:action.payload
            }
        }
    }

})

export const {startExam}=questionReducer.actions
export default questionReducer.reducer
