// routes/list.js
const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');

// Incorrect: The createList function is not called
router.post('/create', listController.createList);

// Correct: Pass the function reference without calling it
router.post('/create', listController.createList);

module.exports = router;
