const mongoose=require('mongoose');
const listSchema=new mongoose.Schema({
category : { //category refers to the type of the work
    type : String,
    required:true
},
discription :{  //details of the work
    type : String,
    required : true,
},
 date:{ //date and time for the work
     type:Date,
     required: true
 }

});
//name of collection
const List= mongoose.model('List',listSchema);
module.exports=List;