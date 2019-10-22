const express=require('express');
const port=8000;
const app=express();
app.use(express.urlencoded());  //middleware to use req.body i.e parse the req url
app.set('view engine','ejs'); //setting the view engine

// setting up the database
const db=require('./config/mongoose');
const List=require('./models/todolist');
const sassMiddleware = require('node-sass-middleware');
// middleware for using static files for css and javascript

app.set ('views','./views'); //setting the path for views
app.use(express.static('./assests'));
// routes 
const routes=require('./routes/index');
app.use('/',routes);

// firing up the server
app.listen(port,function(err){
if(err){
    console.log(`error in running the server: ${err}`);
}
console.log(`sever is up and running on port: ${port}`);
});


