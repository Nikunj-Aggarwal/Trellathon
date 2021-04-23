const express = require("express");
const router = express.Router();


router.get("/likes",(req,res,next) => {
    req.container.resolve('getTotalLikesApi').handleRequest(req,res).catch(next);
});

router.get("/upload/videos",(req,res,next) => {
    req.container.resolve('getTotalUploadedVideosApi').handleRequest(req,res).catch(next);
});

router.get("/views",(req,res,next) => {
    req.container.resolve('getTotalViewsApi').handleRequest(req,res).catch(next);
});

router.get("/subscribers",(req,res,next) => {
    req.container.resolve('getTotalSubscribersApi').handleRequest(req,res).catch(next);
});

router.get("/user/tag/videos",(req,res,next) => {
    req.container.resolve('getUserTagvideosApi').handleRequest(req,res).catch(next);
});

module.exports = router;