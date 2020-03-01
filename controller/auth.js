const modelUser = require('../models');
class Auth {
    static login(req, res) {
        const {username, password} = req.body;
        return modelUser.user.findAll({
            where: {
                username: username,
                password: password
            }
        }).then(function (result) {
            res.json({
                status: 'success',
                message: 'success get data',
                data: result
            });
        }).catch(function (err) {
            res.status(400).json({
                status: 'error',
                message: err.message,
                data: {}
            })
        });
    }

    static register(req, res) {

    }
}

module.exports = Auth;