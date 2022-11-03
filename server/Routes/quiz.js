const express = require('express');
const {
    createquiz
 
}  = require('../Handlers/quiz')



const quizRouter = express.Router();

quizRouter.get('/question',createquiz)



module.exports = quizRouter