const express = require("express");

const router = express.Router();

router.get('/', (req,res)=>{
    const allurls = URL.find({})
    return res.render('Home',{
        urls: allurls,
    });
})

module.exports = router;
