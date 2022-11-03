const Quiz = require('../Database/quiz')



async function createquiz ( req,res ) {
    const { body } = req.body
  console.log(body)
    let quizdatas = await Quiz.create(body)


    return res.send({
        quizdatas
    })
}

module.exports = {
    createquiz
}