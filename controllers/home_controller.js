const List=require('../models/todolist');
module.exports.home=function(req,res){
List.find({},function(err,tasks){
    if(err){
        console.log('error in finding');
        return;
    }
    res.render('home',{
        title:"my to-do list",
        Tasks:tasks
    })
})
};