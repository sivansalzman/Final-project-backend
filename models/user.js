const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    googleID: {type: String, require:true}    
},{collection: 'users'});


const User = model('User', userSchema);

module.exports = User;