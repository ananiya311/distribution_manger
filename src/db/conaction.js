const mongoose = require('mongoose')

const connect = (url)=>{
    mongoose.connect(url,{
        useCreateIndex:true,
        useFindAndModify:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(res=>{
        console.log("connected successfuly");
    })
}

module.exports = connect