class GetViews{

    constructor(helper, userRepo){
        this.helper = helper;
        this.userRepo = userRepo;
    }

    async handleRequest(req, res){

        try{
            const userId = req.get("X-USERID");
            if(!userId){
                return this.helper.writeResponse({msg : "userId is not present" ,code : 400},null,res);
            }
            const allViewsCount = await this.userRepo.getTotalViewsByUserId(userId);
            return this.helper.writeResponse(null,allViewsCount.rows[0],res);
        }
        catch(err){
            console.log(err);
            return this.helper.writeResponse({msg : "Internal Server Error" ,code : 500},"",res);
        }
    }

};

module.exports = GetViews;