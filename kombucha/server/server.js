const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const key = require('./config/keys.js');
const path = require()

mongoose.Promise = global.Promise


let session = require('express-session');
var sessionthings = {
 secret:'themostsecuresecretkeyever', // Secret name for decoding secret and such
 resave:false, // Don't resave session if no changes were made
 saveUninitialized: true, // Don't save session if there was nothing initialized
 name:'myCookie', // Sets a custom cookie name
 cookie: {
  secure: false, // This need to be true, but only on HTTPS
  httpOnly:false, // Forces cookies to only be used over http
  maxAge: 3600000
 }
}

app.use(session(sessionthings));

mongoose.connect(key.databasePath);


//IF DEPLOYMENT DOES NOT WORK. TRY TO UNCOMMENT:
/*if (process.env.NODE_ENV === 'production'){
    //Express will serve up production assets
    //like our main.js file, or main.css file!
    app.use(express.static('client/build'));

    //express will serve up the index.html. file
    //if it doesnt recognize the route
    const path = require('path')
    app.get('*', (request, response) => {
        response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}*/


const PORT = 8000;
app.listen(PORT, ()=> console.log("Listening on port 8000"))

