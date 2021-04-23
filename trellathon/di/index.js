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
    postgresClient : asValue(middleware.postgresClient),
});


//APIS
//User
container.register('getTotalLikesApi', asClass(require("../controller/user/getLikes"), getScope()));
container.register('getTotalUploadedVideosApi', asClass(require("../controller/user/getUploadedVideos"), getScope()));
container.register('getTotalViewsApi', asClass(require("../controller/user/getViews"), getScope()));
container.register('getTotalSubscribersApi', asClass(require("../controller/user/getSubscribers"), getScope()));
container.register('getAdApi', asClass(require("../controller/user/Ad"), getScope()));

container.register('helper', asClass(require("../utilities/helper"), getScope()));

container.register('userRepo', asClass(require("../repository/userRepo"), getScope()));




module.exports = container;