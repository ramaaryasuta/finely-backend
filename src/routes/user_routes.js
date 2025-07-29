const authenticateToken = require('../middlewares/auth_middleware');
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

router.get('/profile', authenticateToken, userController.profile);

module.exports = router;