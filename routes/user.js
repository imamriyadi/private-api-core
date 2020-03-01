const router = require('express').Router();
const userController = require('../controller/auth')
router.post('/', function (req, res, next) {
    userController.login(req, res);
})


module.exports = router;