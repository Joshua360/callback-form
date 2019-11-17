const express = require('express');
const router = express.Router();

router.get("/", (req,res)=>{
    res.render("profile", {name:req.cookies.username, message:req.cookies.message});
  });
  
router.post("/", (req,res)=>{
    res.cookie("username", req.body.username);
    res.cookie("message", req.body.message);
    res.redirect("/profile");
});
  


module.exports = router;





