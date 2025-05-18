const Notification = require('../models/Notification');
const sendEmail = require('../services/emailService');
const sendSMS = require('../services/smsService');
const sendInApp = require('../services/inAppService');

exports.sendNotification = async (req, res) => {
    const { userId, type, message } = req.body;

    let status = 'sent';
    try {
        if (type === 'email') await sendEmail(userId, message);
        else if (type === 'sms') await sendSMS(userId, message);
        else if (type === 'in-app') await sendInApp(userId, message);
        else return res.status(400).json({ error: 'Invalid type' });
    } catch (err) {
        console.error(err);
        status = 'failed';
    }

    const notification = new Notification({ userId, type, message, status });
    await notification.save();

    res.status(201).json({ success: true, status });
};

exports.getUserNotifications = async (req, res) => {
    const { id } = req.params;
    const notifications = await Notification.find({ userId: id }).sort({ createdAt: -1 });
    res.json(notifications);
};
