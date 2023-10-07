const express = require('express')
const path=require('path')
// const bodyparser=require("body-parser")
const session= require("express-session")
const {v4:uuidv4}= require("uuid")
const router=require('./router')
const { name } = require('ejs')
const nocache=require('nocache')


const app = express();


const port = process.env.PORT|| 3000;
app.set('view engine','ejs');

//serialize data
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(nocache())
//load static assets
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use("/public", express.static("public", { "extensions": ["js"] }));

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))

app.use('/route',router)

app.get('/',(req,res)=>{
    if(req.session.user){
        res.redirect('/route/dashboard');
    }else{
      
        const errorMessage=" "
        res.render('base',{errorMessage})
    }
});

app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(port,()=>{console.log("Listening to port http://localhost:3000");})



