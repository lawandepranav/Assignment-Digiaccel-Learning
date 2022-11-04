const mongoose = require("mongoose")
const user = require("./user")

const quizSchema = new mongoose.Schema({
    questions :
    {
    type : String,
     default: []
   },
   answers : { 
       type : Array,
        default: []
   },
   diffcultyLevel:{
       type:Number
   },
   correctAnswer:{
       type:Array
   }
}, {
    timestamps: true
})

const quiz = mongoose.model("quiz", quizSchema)
module.exports = quiz

