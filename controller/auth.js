const modelUser = require('../models').user;
const bcrypt = require("bcrypt");

class Auth {
    static login(req, res) {
        const {username, password} = req.body;
        return modelUser.findAll({
            attributes:['username','password'],
            where: {
                username: username
            }
        }).then(function (result) {
            bcrypt.compare(password, result.password, function (err, response) {
                res.json({
                    status: 'success',
                    message: 'success get all data',
                    data: result
                })
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
        const {fullname, username, email, password} = req.body;
        const salt = bcrypt.genSaltSync(8);
        return modelUser.create({
            fullname: fullname,
            username: username,
            email: email,
            password: bcrypt.hashSync(password, salt)
        }).then(function (result) {
            res.json({
                status: 'success',
                message: 'Insert Data Success',
                data: result
            })
        }).catch(function (error) {
            res.status(400).json({
                status: 'error',
                message: error.message,
                data: {}
            })
        })
    }
}

module.exports = Auth;