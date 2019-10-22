const express = require('express');
const path = require('./add_task');
const router = express.Router();
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home);
//routes for creating new work
router.use('/new_task', path);
//route for deleting a task
router.use('/delete_task', require('./delete_task'));
module.exports = router;

