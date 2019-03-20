var _ = require('lodash');

/** helpers */


/** ordbms db */
const db = require('../models');
const Users = db.users;

/**
 * find all users
 */
module.exports.findAll = async (req, res) => {
  try{
    if (req.query.offset) var offset = parseInt(req.query.offset);
    if (req.query.limit) var limit = parseInt(req.query.limit);
  
    var whereUsers = req.query.users;
  
    var users = await Users.findAll({
      where: whereUsers, offset, limit
    });
    users?res.send(users):res.sendStatus(400);    
  }catch(err){
    console.log('err: ', err);
  }
};

/**
 * find users by id
 */
module.exports.findById = async (req, res) => {	
  try{
    var users = await Users.findByPk(req.params.id);
    users?res.send(users):res.sendStatus(400);
  }catch(err){
    console.log('err: ', err);
  }
};

/**
 * update users by id
 */
module.exports.update = (req, res) => {	
    Users.update(req.body, {where: {usersid: req.params.id}})
    .then(rsp => {	
		  rsp?res.send(rsp):res.sendStatus(400);
	});
};

/**
 * add new users
 */
module.exports.create = async (req, res) => {	
  try{
    const newUsers = new Users(req.body);
    var users = await newUsers.save();
    users?res.send(users):res.sendStatus(400);
  }catch(err){
    console.log('err: ', err);
  }
};