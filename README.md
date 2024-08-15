
# REST-API

 REST CRUD API with node.js,express.js and mongoDB

   you can do crud operation on model( user),you can get all users   from     databse  (myApp),add user by id,get user by id,delete user by id,update user by id

Clone this repo on your github account or download zip file and then open in vs code

## Installation-Guide

install node.js  using nvm

 link to install->  https://nodejs.org/en/download/package-manager

 Node.js includes npm (10.8.1).
 
install mongoDB
link-->  
https://www.mongodb.com/docs/manual/administration/install-community/


## command to run the application
``` bash
npm start
```
once the application get started ,use postman to send request  
(HTTP Methods:GET,POST,PATCH,DELETE) , server is started on localhost port no. 8001
exp: localhost:8001/api/user 
## API-ENDPOINT
 HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/user | To get all users |
|GET | /api/user/id | To get user by  id |
| POST | /api/user/ | To create a new user |
| PATCH | /api/user/id | To edit the details of a user with id |
| DELETE | /api/user/id| To delete a user with id |