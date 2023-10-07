require('dotenv').config()
exports.postLogin = (req, res) => {
    if (req.body.email == process.env.EMAIL && req.body.password == process.env.PASSWORD) {
        req.session.user = req.body.email;
       res.redirect('/route/dashboard');
    } else if(req.body.email != process.env.EMAIL) {
        const errorMessage = "Invalid username";
        res.render('base', { errorMessage }, (err, html) => {
            res.send(html);
        });
    }else if(req.body.password != process.env.PASSWORD){
        const errorMessage = "Invalid Password";
        res.render('base', { errorMessage }, (err, html) => {
            res.send(html);
        });

    }
}


exports.getDash=(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{title:"Dashboard",user:req.session.user})

    }else{
        res.send("Unauthorized user")
    }
}

exports.logout=(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.sent("error")
        }else{
            res.render("base",{title:"Login page",logout:"Logout successful"})
        }
    })
}

