const express=require('express');
const port=8000;
const app=express();
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set ('views','./views');
const db=require('./config/mongoose');
const List=require('./models/todolist');
app.use(express.static('./assests'));
const routes=require('./routes/index');
app.use('/',routes);

app.listen(port,function(err){
if(err){
    console.log(`error in running the server: ${err}`);
}
console.log(`sever is up and running on port: ${port}`);
});




