

class VideoTagRepo {

    constructor(postgresClient) {
        this.postgresClient = postgresClient;
    }

        async getVideosByUserTag(userId){
            const query = `SELECT videourl FROM public.uservideo WHERE videoid = (SELECT videoid FROM 
                (SELECT tagname FROM public.usertag WHERE userid = '${userId}' ORDER BY tagcount DESC) 
            AS T1 LEFT JOIN public.videotag ON T1.tagname = public.videotag.tagname);`;
            return this.postgresClient.query(query);
        }

    }
    
    module.exports = VideoTagRepo;