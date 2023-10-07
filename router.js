var express =require("express");
var router =express.Router();
const controllers=require('./controllers/controller')
const isAuthenticated= require('./middlewares/loginAuth')

 

//login user
router.post('/login',controllers.postLogin)

//route for dashboaard
router.get('/dashboard',isAuthenticated,controllers.getDash)

//route for logout
router.get('/logout',isAuthenticated,controllers.logout)



module.exports=router;