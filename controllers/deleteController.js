const User = require('../models/user-model');
const _ = require("lodash");

const deleteUser = async(req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id, function (err, user) {
        if (err){
            console.log(err)
        }
        else{
            console.log(user);
        }
    });
    return res.end(JSON.stringify({success: true}));
}

module.exports = {
    deleteUser
};