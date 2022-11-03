const express = require("express");
const cors = require ("cors")
const connectionToDatabase= require('./Database/index');
const quizRouter = require("./Routes/quiz");
const userRouter = require("./Routes/user");



const app = express()
app.use(express.json())
app.use(cors())

 

app.use(quizRouter)
app.use(userRouter)


connectionToDatabase().then(()=>{
    app.listen(8000,()=>{
        console.log("Server is running in 8080 port")
    })
})