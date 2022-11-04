const mongoose = require ("mongoose")

var UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    bio: String,
    image: String,
    hash: String,
    salt: String
  }, {timestamps: true});

const user = mongoose.model("user",UserSchema)

module.exports = user