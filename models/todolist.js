const mongoose=require('mongoose');
const listSchema=new mongoose.Schema({
category : {
    type : String,
    required:true
},
discription :{
    type : String,
    required : true,
},
 date:{
     type:Date,
     required: true
 }

});
//name of collection
const List= mongoose.model('List',listSchema);
module.exports=List;