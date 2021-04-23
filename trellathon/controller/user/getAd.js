class GetAd{

    constructor(helper, userRepo){
        this.helper = helper;
        this.userRepo = userRepo;
    }

    async handleRequest(req, res){

        try{
            const userId = req.get("X-USERID");
            
            if(userId === undefined){
                return this.helper.writeResponse({msg : "userId is not present" ,code : 400},null,res);
            }
            const allAd = await this.userRepo.getAdByUserId(userId);
            return this.helper.writeResponse(null,allAd.rows[0],res);
        }
        catch(err){
            console.log(err);
            return this.helper.writeResponse({msg : "Internal Server Error" ,code : 500},"",res);
        }
    }

};

module.exports = GetAd;