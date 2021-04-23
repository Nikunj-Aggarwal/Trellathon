


class UserRepo {

    constructor(postgresClient) {
        this.postgresClient = postgresClient;
    }

        async getTotalLikesByUserId(userId){
            const query = `SELECT SUM(likes) FROM public.uservideo WHERE userid = '${userId}';`;
            return this.postgresClient.query(query);
        }

        async getTotalUploadedVideosByUserId(userId){
            const query = `SELECT COUNT(videoId) FROM public.uservideo WHERE userid = '${userId}';`;
            return this.postgresClient.query(query);
        }

        async getTotalViewsByUserId(userId){
            const query = `SELECT SUM(views) FROM public.uservideo WHERE userid = '${userId}';`;
            return this.postgresClient.query(query);
        }

    }
    
    module.exports = UserRepo;