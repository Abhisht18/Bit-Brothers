const User = require('../models/user-model');
const _ = require("lodash");

const updateUser = async(req, res) => {
    const id = req.params.id;
    const obj = req.body;
    console.log(obj);
    User.findByIdAndUpdate(id, obj, (err, user) => {
    if (err){
        console.log(err)
    }
    else{
        return res.end(JSON.stringify({user: user, success: true}));
    }
    });
    return res.end(JSON.stringify({success: false}));
}

module.exports = {
    updateUser
};