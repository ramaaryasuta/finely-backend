const userService = require('../services/user_service');

exports.profile = (req, res) => {
    const user = userService.profile();
    res.json(user);
}