const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/messageController');

// Routes for /api/messages
router.route('/')
    .post(sendMessage)
    .get(getMessages);

module.exports = router;

