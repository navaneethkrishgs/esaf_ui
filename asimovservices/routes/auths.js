const router = require('express').Router();
const passport = require('passport');
require('../configs/passport.config')(passport);
const jwt = require('jsonwebtoken');
const secretConfigs = require('../configs/secret.config');
var refreshTokensDir = [];
var accessTokensDir = [];

//auth users jwt
router.post('/users', function (req, res, next) {
    passport.authenticate('usersLocalStrategy', {session: false}, (err, users, info) => {
        if (err || !users) {
            return res.status(400).json({
                message: 'Something is not right',
                users   : users
            });
        }
       req.login(users, {session: false}, (err) => {
        if (err) {
            res.send(err);
        }
        const accessToken = jwt.sign({data: users}, secretConfigs.tokenSecret, {expiresIn: secretConfigs.tokenLife});
        const refreshToken = jwt.sign({data: users}, secretConfigs.refreshTokenSecret, {expiresIn: secretConfigs.refreshTokenLife});
        refreshTokensDir[refreshToken] = users;
           return res.json({users, accessToken, refreshToken});
        });
    })(req, res);
});

router.post('/users/login', passport.authenticate('usersLocalStrategy', { successRedirect: 'http://www.google.com',failureRedirect: 'http://www.yahoo.com' }));
 
//reissue users auth token
router.post('/tokens', function (req, res, next) {
    var refreshToken = req.body.refreshToken;
    try{
        var decoded = jwt.verify(refreshToken, secretConfigs.refreshTokenSecret);
        if(refreshTokensDir[refreshToken]){
            var users = refreshTokensDir[refreshToken];
            const accessToken = jwt.sign({data: users}, secretConfigs.tokenSecret, {expiresIn: secretConfigs.tokenLife});
            return res.json({users, accessToken});
        }else{
            throw new Error('Invalid refresh token')
        }
    }catch(err) {
        res.send(err);
    }
});

module.exports = router;
