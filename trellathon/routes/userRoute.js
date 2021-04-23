const express = require("express");
const router = express.Router();


router.get("/likes",(req,res,next) => {
    req.container.resolve('getTotalLikesApi').handleRequest(req,res).catch(next);
});

router.get("/upload/videos",(req,res,next) => {
    req.container.resolve('getTotalUploadedVideosApi').handleRequest(req,res).catch(next);
});


module.exports = router;