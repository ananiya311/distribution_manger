require('dotenv').config()

const experss = require('express')
const app = experss()
const session = require('express-session')
const mongod = require('connect-mongodb-session')(session)

//db connecting url
const monUri = "mongodb://127.0.0.1:27017/DistributionManager"

//seting up session collection
const store = new mongod({
    uri:monUri,
    collection:"session"
})

app.use(session({
    secret:process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: store
}))

// seting up bodyParser
app.use(experss.urlencoded({extended:true}))

//seting the view engine
app.set('views', './src/views')
app.set('view engine', 'ejs')


//set static file 
app.use(experss.static('public'))
app.use('/css', experss.static(__dirname + 'public/css'))
app.use('/js', experss.static(__dirname + 'public/js'))



//requireing routers
const routes = require('./src/router/router')

app.use('/', routes)

// connecting to mongoose data bace and listening port 1000
const port = 1000

const con = require("./src/db/imguplod")

// requireing mongoose connecter
const connect = require('./src/db/conaction')
const { route } = require('./src/router/router')

const start = async()=>{
    await connect(process.env.MONGO_URL)
    app.listen(port, console.log(`the port is runing on ${port}`))
}

start()