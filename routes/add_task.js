const express=require('express');
const router=express.Router();
const addController=require('../controllers/add_controller');
router.post('/',addController.newTask);

module.exports=router;
