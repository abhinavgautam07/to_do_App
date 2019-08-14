const express=require('express');
const router=express.Router();
const deleteController=require('../controllers/delete_controller');
router.post('/',deleteController.Task);
module.exports=router;
