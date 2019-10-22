const List=require('../models/todolist');
module.exports.Task=function(req,res){
const id=req.body.selected;
for(let i of id){
    console.log(i);
List.findByIdAndDelete(i,function(err){
    if(err){
        console.log('error in deleting');
        return;
    }
  
});


}
return  res.redirect('back');



}