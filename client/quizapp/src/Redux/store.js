import {combineReducers, configureStore} from '@reduxjs/toolkit'
import questionReducer from './questionReducer'
import resultReducer from './resultReducer'

const rootReducer=combineReducers({
    question:questionReducer,
    result:resultReducer
})

export default configureStore({reducer: rootReducer})