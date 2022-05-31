const mongoose = require( 'mongoose' );

//creating a schema for user
const userSchema = mongoose.Schema({
    name : String,
    age : Number,
    email : String,
    time : {
        type : Date,
        default :Date.now
    }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;