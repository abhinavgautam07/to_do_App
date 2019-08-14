const List=require('../models/todolist');
module.exports.Task=function(req,res){
const id=req.body.selected;
List.findByIdAndDelete(id,function(err){
    if(err){
        console.log("error in deleting",err);
        
        return;
    }
    
  return  res.redirect('back');
});





};