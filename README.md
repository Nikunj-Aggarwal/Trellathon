# Trellathon
[Documentation](https://docs.google.com/document/d/e/2PACX-1vTI6eVbuhn9qiGbXQy0coM6n64kX2rq8RAesg3yPsO2ZDFGb0FL-0QKzPMbEIyLpc2S9HYwUeKnsatY/pub)
Theme - Content Personalization

## Team - Bit Lords	

## Team Members - Nikunj Aggarwal, Utsav Shukla, Ujjwal Dwivedi, Priyank Rastogi

## Title - Personalized feed with Product suggestions based on User insights and data dashboard for creators

## PRESENTATION - https://docs.google.com/presentation/d/1FjJM2_oiLWmGV-d98gkxpxvr5o2wdMoLCWdLHmlm4iw/edit?usp=sharing

## TECH STACK:  React, MongoDb, HTML, CSS, BootStrap, Nodejs, JavaScript, Trell Api (if provided), Firebase, Data Analysis

## WIREFRAME LINK - https://www.figma.com/proto/bktJjWk355VOhKi1xk5Dgs/Trell?node-id=211%3A580&scaling=contain&page-id=0%3A1

## PROBLEM STATEMENT: 

Based on what we observe, we believe that TRELL is more than just a vlogging platform, it has an e-commerce system too. We used TRELL for days and researched about it. 
It doesn’t provide a personalized feed to users. So to enhance user experience the app should recommend videos having the same category. 
Similarly, we can recommend them some products to buy from TRELL. 
Not only this, the creator must get details about their target audience in the dashboard. The dashboard must include graphs that display posts data based on gender, views, Age group, area of the audience, like the timing of the video, content category, and overall performance of the creator.  


## WIREFRAMES: 

Trending Page: 
This page will show all the top videos.


## Personalized Feed:
 This page will show the data according to user preferences and history. This page will contain videos of different categories that were watched by the user or liked by the user. This page will help Trell in increasing its e-commerce demand. The page will promote the Trell products as we all know that Trell is not just an entertainment platform. The advertisement will be related to the user’s preferences and interests, determined by the user’s search and watch history.


## USER DASHBOARD: 
This page will be useful for creators who want to increase their reach. The dashboard will contain the information regarding the data of user’s videos. The number of likes, followers, comments, target audience, age group, gender, and many more things. We will use graphs to show this information as it will be easy to analyze for every creator and get to know what their audience likes.  

# DATABASE DESIGN:

## UserInfoTable:

This table stores descriptive property and     
security information about each user.                                   

## UserVideoTable:

This table stores all the 
videos created by the creator, video likes, 
and also enforce Referential Integrity on 
UserCommentTable.

## VideoTagTable: 

This table stores all the tags 
based on the different videos 
and is uniquely defined by the 
VideoId. 

## UserCommentTable: 

This table stores all the comments 
of a given video.

## UserTagTable: 

This table stores the frequent
 video tags based on what 
 he/she watches.

## UserFollowTable:
 
This table stores the userId of 
the creator (unique user Id) which
 he/she follows.

## AdTable: 

This table stores the e-commerce products.

## For DB Optimisation:

Indexing: For optimizing the performance of a database by minimizing the number of disk accesses required when a query is processed.

Redis: Provide high availability, scalability, faster access.

Server-Side Caching: Server caching is also fully handled and administered on the server without any involvement of the end-user, or a browser and also reduces their load and latency.

Client-Side Caching: For high-performance services.

## BACKEND ARCHITECTURE:

Here the Backend receives requests from the client and contains logic to send the appropriate data back to the client. The Backend also includes a Database that will persistently store all of the data and Redis(cache server) for faster access. 
So whenever the client sends a request to the backend server. The request first goes to the Redis if the corresponding content is already present in the Redis which we called a “cache hit” and the backend sends that content as a response to the client. And if it is not present in the Redis. So at that point in time the backend initiates the query to the Database and after that, the response sends to the client and also saves the response to the Redis.

## API DESIGN:

API Reference:
Subscriptions
A subscription resource contains information about a Trell user subscription. 
Method
HTTP request
Description
delete
DELETE /subscription
Deletes a subscription.
insert
POST /subscription
Adds a subscription for the authenticated user's channel.
list
GET /subscription
Returns subscription resources that match the API request criteria.



CommentThread 
A CommentThread resource can represent comments about either a video or a channel. 

Method
HTTP request
Description
list
GET /commentThread
Returns a list of comment threads that match the API request parameters.
insert
POST /commentThread
Creates a new top-level comment. 
update
PUT /commentThread
Modifies the top-level comment in a comment thread.




VideoCategories
A videoCategory resource identifies a category that has been or could be associated with uploaded videos. 
Method
HTTP request
Description
list
GET /videoCategories
Returns a list of categories that can be associated with Trell videos.

Search
A search result contains information about a Trell video, channel, or playlist that matches the search parameters specified in an API request.

Method
HTTP request
Description
list
GET /search
Returns a collection of search results that match the query parameters specified in the API request. 



Categories
Identifies a category that algorithmically assigns a channel's content or other indicators, such as the channel's popularity. The list is similar to VideoCategories, with the difference being that a video's uploader can assign a video category but only Trell can assign a channel category. 

Method
HTTP request
Description
list
GET /Categories
Returns a list of categories that can be associated with Trell channels.



ChannelSection
A channelSection resource contains information about a set of videos that a channel has chosen to feature.

Method
HTTP request
Description
insert
POST /channelSection
Adds a channel section to the authenticated user's channel. 
list
GET /channelSection
Returns a list of channelSection resources that match the API request criteria.
update
PUT /channelSection
Updates a channel section.


Channel
A Channel resource contains information about a Trell Channel.

Method
HTTP request
Description
list
GET /channels
Returns a collection of zero or more channel resources that match the request criteria.
update
PUT /channels
Updates a channel's metadata. 


## FRONTEND: 

## Personalized Feed:

 Personalized feed is a new tab for the user where they can watch the trells based on their search history and subscribed creators. 
  It will display advertisement banners at the bottom of the screen based on the user interest, this would surely increase the trell e-commerce turnover.
It will be developed using Reactjs. We will utilize the lazy loading component of Reactjs to provide a blazing-fast user experience. 


## Creator Dashboard:

Creator Dashboard would be the best feature that can attract a lot of creators from other platforms on Trell.
We will use Reactjs to render its UI/UX and  Chartjs to draw astonishing charts from creators data. We will provide different charts based on various properties like views, comments, and likes. 
These charts would be easy to understand and interpret by creators. Charts will display percentage increments and decrements based on previous performance (like 20% more views from the previous video).
