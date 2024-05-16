
const User= require("../models/user.js");

module.exports.rendersignup=(req, res)=>{
    res.render("users/signup.ejs");
};


module.exports.signup=async(req, res)=>{
    try{
      let {username , email, password}= req.body;
      const  newUser= new User({email, username});
      const registereduser=await  User.register(newUser , password);
      req.login(registereduser,(err)=>{
        if(err){
          return next(err);
        }
        req.flash("success" , "WELCOME TO WANDERLUST");
      res.redirect("/listing");
        
      });
    } catch(err){
      req.flash("error" , err.message);
      res.redirect("/signup");
    }
  };


  module.exports.renderLoginForm=(req, res)=>{
    res.render("users/login.ejs");
};


module.exports.login=async(req, res)=>{
    req.flash("success" , "Welcome back to Wanderlust!!!");
    let redirectUrl=res.locals.redirectUrl || "/listing";
    res.redirect(redirectUrl);
 };


 module.exports.logout=(req, res)=>{
    req.logout((err)=>{
      if(err){
       return next(err);
      }
      req.flash("success" , "you are loggout out!!");
      res.redirect("/listing") ;
    })
    };

