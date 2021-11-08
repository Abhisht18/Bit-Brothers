const User = require('../models/user-model');
const _ = require("lodash");

const createUser = async(req, res) => {
    const x = new User;
    x.name = req.body.name;
    x.username = req.body.username;
    x.password = req.body.password;
    x.save(function(err){
        if(err){
            console.log(err);
        }
    });
    return res.end(JSON.stringify({user: x, success: true}));
}

module.exports = {
    createUser
};