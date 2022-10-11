const { Router } = require('express')
const experss = require('express')
const session = require('express-session')
const route = experss.Router()
const con = require('../db/imguplod')
const userModule = require('../module/usersModule')
const productModule = require('../module/productsModule')
const { raw } = require('body-parser')

//router for the home page
route.get('/', async(req, res)=>{
   const Session = require.userId = null
   if(Session === null){
    return res.redirect('/login')
   }
 
    res.render('homePage')
    
})


route.get('/login',async(req,res)=>{
    res.render('login')
    
})


// signup router constrolers
route.get('/signup-page', (req, res)=>{
    res.render('signUp')
})
route.post('/signup-form', async(req, res)=>{
    try {
        const {
            email, Fname, Lname, sex,
            DOB,Uname,password,pic,status
        } = req.body

        const jjson = req.body
        
       console.log();
        console.log(Fname, Lname, email, sex, pic);
        const isExist = await userModule.find({email: email})


        if(isExist.length <= 0){
            if(pic){
                try {
                    const signup = await userModule.create({
                        email: email,
                        firstName: Fname,
                        lastName: Lname,
                        sex: sex,
                        DOB: DOB,
                        username:Uname,
                        passWorde:password,
                    })
                    
                    try {
                        const uplodeId = await con.uploader.upload(pic,{
                            upload_preset: "pre_test"
                        })
                        await userModule.findOneAndUpdate({_id:signup._id},{
                            imgPublicKey:uplodeId.public_id
                        })
                        res.render('login', 
                        {
                            ismsg:true,
                            msg:"you can login know" ,
                            from:"signUp", 
                            data:signup,
                            iserror:false
                        })

                    } catch (error) {
                        console.log(error);
                        await userModule.findOneAndDelete({_id:signup._id})
                        res.render('signUp',{msg:"problame uploding the image", from:'signUp', iserror:true, errorTyp:'uplodeImg'})
                    }
                } catch (error) {
                    console.log(error);
                    res.json({msg:error.message})
                }
            }else{
              try {
                const signup = await userModule.create({
                    email: email,
                    firstName: Fname,
                    lastName: Lname,
                    sex: sex,
                    DOB: DOB,
                    username:Uname,
                    passWorde:password,
                })
                res.render('login', {msg:"you can log in know" ,from:"signUp", data:signup, iserror:false})
              } catch (error) {
                console.log(error);
                res.json(error.message)
              }
            }
            
        }else{
            console.log("email ex");
            res.render('signUP',{msg:'the email already exist', data:jjson, iserror:true , errorTyp:'emailvar'})
        }
    } catch (error) {
        console.log('empty');
        console.log(error);
    }
   
   

})



module.exports = route