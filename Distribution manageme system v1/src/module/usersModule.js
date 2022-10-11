const { text } = require('body-parser')
const mongoose = require('mongoose' )

const users = mongoose.Schema({
    email:{
        type:String,
        required:[true, "email is required"]
    },
    firstName:{
        type:String,
        required: [true, "your first name is required"],
        trim:true
    },
    lastName:{
        type:String,
        required:[true, "your last name is required"]
    },
    sex:{
        type:String,
        required:[true, "sex is required"]
    },
    DOB:{
        type: Date
    },
    userName:{
        type:String
    },
    passWorde:{
        type:String,
        required:[true, "password is required"]
    },
    imgPublicKey:{
        type:String,
        default: null
    },
    status:{
        type:String,
        default: "user"
    }
})

module.exports = mongoose.model('users', users)