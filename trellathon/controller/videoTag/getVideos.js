class GetVideos{

    constructor(helper, userRepo,videoTagRepo){
        this.helper = helper;
        this.userRepo = userRepo;
        this.videoTagRepo = videoTagRepo;
    }

    async handleRequest(req, res){

        try{
            const userId = req.get("X-USERID");
            
            if(userId === undefined){
                return this.helper.writeResponse({msg : "userId is not present" ,code : 400},null,res);
            }
            
            const allVideos = await this.videoTagRepo.getVideosByUserTag(userId);
            return this.helper.writeResponse(null,allVideos.rows[0],res);
        }
        catch(err){
            console.log(err);
            return this.helper.writeResponse({msg : "Internal Server Error" ,code : 500},"",res);
        }
    }

};

module.exports = GetVideos;