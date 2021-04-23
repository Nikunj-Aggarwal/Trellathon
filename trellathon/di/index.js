const { createContainer,asValue, asClass, InjectionMode, Lifetime } = require('awilix');

/**
 *
 *@returns {Object} lifetime
 */

function getScope(){
    return {lifetime : Lifetime.SINGLETON };
}

//Driver, Config
const middleware = require("../driver");



const container = createContainer({injectionMode : InjectionMode.CLASSIC});


container.register({
    // postgresClient : asValue(middleware.postgresClient),
});


//APIS
//User
container.register('getTotalLikesApi', asClass(require("../controller/user/getLikes"), getScope()));
container.register('getTotalUploadedVideosApi', asClass(require("../controller/user/getLikes"), getScope()));



module.exports = container;