const List=require('../models/todolist');

module.exports.newTask=function(req,res){
    console.log('body',req);
List.create({
    
category : req.body.category,
discription: req.body.discription,
date: req.body.date


},function(err,newList){
    if(err){
        console.log("error in adding");
        return;
    }
    console.log('***************',newList);
    res.redirect('back');
});


}
