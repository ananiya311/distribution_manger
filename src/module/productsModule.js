const mongoose = require ('mongoose')

const products = mongoose.Schema({
    productName:{
        type:String,
        required: [true, "product name is required"],
        trime:true
    },
    productDescription:{
        type:String,
        required: [true, "product discription is required"],
        trime:true
    },
    productImgae:{
        type:String,
        trime:true
    },
    productPriceInDozen:{
        type:Number,
        required:[true, "the price of the product in dozens is required"],
        trime:true
    },
    producersName:{
        type:String,
        required:[true, "the producers name is required"],
        trime:true
    },
    invantory:{
        type:Number,
        required:true
    },
    numberOfRateings:{
        type:Number,
        userId:{
            type:String
        }
    },
    productRating:{
        type:Number
    }
})

module.exports = mongoose.model('products', products)