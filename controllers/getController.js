const User = require('../models/user-model');
const _ = require("lodash");

const getAlluser = async(req, res) => {
    User.find({}, (err, users) => {
        return res.end(JSON.stringify({user: users, success: true}));
    })
}

const getUser = async(req, res) => {
    const id = req.params.id;
    console.log(id);
    User.findById(id, (err, user) => {
        if (err){
            console.log(err);
        }
        else{
            return res.end(JSON.stringify({user: user, success: true}));
        }
    });
    return res.end(JSON.stringify({success: false}));
}

module.exports = {
    getAlluser, 
    getUser
};