// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/create', taskController.createTask);
router.post('/update-status', taskController.updateTaskStatus);
// Add other routes as needed

module.exports = router;

