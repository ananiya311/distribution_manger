const nary = require('cloudinary').v2
require('dotenv').config()
nary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});



module.exports = nary

