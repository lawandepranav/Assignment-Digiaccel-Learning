const mongoose = require("mongoose")
const user = require("./user")

const quizSchema = new mongoose.Schema({
    id : Number,
    question: String,
    answer: Array
}, {
    timestamps: true
})

const quiz = mongoose.model("quiz", quizSchema)
module.exports = quiz