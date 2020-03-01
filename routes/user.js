const router = require('express').Router();
const Auth = require('../controller/auth')
router.post('/', function (req, res, next) {
    Auth.login(req, res);
})

router.get('/', function (req, res, next) {
    res.json({
        status:'success'
    })
})



module.exports = router;