const passport = require("passport");

module.exports.isloggedin = (req,res,next)=>{
if(!req.isAuthenticated()){
req.session.returnTo = req.originalUrl
    req.flash('error','you must be signed in');
    return res.redirect('/login')
}
next();
}
// if(!req.isAuthenticated()){
//     req.flash('error','you must be signed in');
//     return res.redirect('/login')
// }
