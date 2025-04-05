const Message = require('../models/Message');

// @desc    Send a new message
// @route   POST /api/messages
// @access  Public
exports.sendMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Create new message
        const newMessage = await Message.create({
            name,
            email,
            subject,
            message
        });

        res.status(201).json({
            success: true,
            data: newMessage
        });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

// @desc    Get all messages
// @route   GET /api/messages
// @access  Private (in a real app, this would be protected)
exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: messages.length,
            data: messages
        });
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}; 