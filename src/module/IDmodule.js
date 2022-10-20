const ConnectMongoDBSession = require('connect-mongodb-session')
const mongoose = require('mongoose')

const ID = mongoose.Schema({
    id:{
        type:String
    }
})

module.exports = mongoose.model("IDStorag", ID)