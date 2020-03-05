const modelUser = require('../models').user;
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

class Auth {
    static login(req, res) {
        const {username, password} = req.body;
        return modelUser.findAll({
            attributes: ['id', 'fullname', 'username', 'password', 'email'],
            where: {
                username: username
            }
        }).then(function (result) {
            const data = result[0];
            bcrypt.compare(password, result.password, function (err, response) {
                const token = jwt.sign(
                    {
                        id:data.id,
                        fullname: data.fullname,
                        username:data.username,
                        email: data.email
                    }, "jwtsecret", {expiresIn: 10080});
                res.json({
                    status: 'Success',
                    message: 'Login Success',
                    token: 'Bearer ' + token
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