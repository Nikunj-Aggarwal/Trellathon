class Helper {

    constructor() {

    }

    writeResponse(err, info, res) {
        if(err) {
            err.code = err.code || 500;
            console.log('req has been sent with status:', err.code);
            if(info){
                return res.status(err.code).json({"msg": err.msg,"info" : err.data});
            }
            else{
                return res.status(err.code).json({msg: err.msg});
            }
        } else{
            console.log('req has been sent with status: 200');
            res.status = 200;
            res.json(info);
            return res;
        }
    }

}

module.exports = Helper;