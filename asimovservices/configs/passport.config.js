const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const HeaderAPIKeyStrategy = require('passport-headerapikey').HeaderAPIKeyStrategy;
var Promise = require("bluebird");
var _ = require('lodash');
const secretConfigs = require('../configs/secret.config');
/** nosql db */
// const secretConfigs = require('../configs/secret.config');
// optsUsers.secretOrKey = secretConfigs.tokenSecret;


/** ordbms db */
const db = require('../models');
const Users = db.users;

module.exports = function(passport) {
    passport.serializeUser((user, done) => {
        done(null, user.usersid);
    });

    passport.deserializeUser((usersid, done) => {
        return Users.findById(usersid).then((user) => {
            done(null, user);
        });
    });

    /** 
     * authentication of users
     * local strategy
    */
    passport.use('usersLocalStrategy', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, 
    function (username, password, done){
        //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        Users.findOne({ 
            where: {            
                username : username,
                password : password
            },
            include: [{ all: true, nested: true }]
        })
            .then(users => {
            if (!users) {
                return done(null, false, {message: 'Incorrect email or password.'});
            }
            return done(null, users, {message: 'Logged In Successfully'});
        })
        .catch(err => done(err));
    }
    ));
    /** 
     * jwt opts for users
    */
    var optsUsers = {}
    optsUsers.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
    optsUsers.secretOrKey = secretConfigs.tokenSecret;
    passport.use('usersLocalStrategyJwt', new JWTStrategy(optsUsers, function(jwt_payload, done) {
        Users.findByPk(jwt_payload.data.usersid)
        .then(user => {
            if (!user) {
                return done(null, false, {message: 'Incorrect email or password.'});
            }
            return done(null, user, {message: 'Logged In Successfully'});
        })
        .catch(err => done(err));
    }));
};



