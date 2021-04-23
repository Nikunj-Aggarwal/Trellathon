class GetLikes{

    constructor(helper, userRepo){
        this.helper = helper;
    }

    async handleRequest(req, res){

        try{
            const {userId} = req.get("X-USERID");
            if(!userId){
                return this.helper.writeResponse({msg : "userId is not present" ,code : 400},null,res);
            }
            const allLikesCount = await this.userRepo.getTotalLikesByUserId(userId);
            return this.helper.writeResponse(null,allLikes,res);
        }
        catch(err){
            console.log(err);
            return this.helper.writeResponse({msg : "Internal Server Error" ,code : 500},"",res);
        }
    }

};

module.exports = GetLikes;