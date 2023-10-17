import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "please input email"],
        unique: [true, "Email exist"]
    },
    password: {
        type: String,
        required: [true, "please input password"],
        unique: [true, "password exist"]
    }

})
module.exports = mongoose.model.Users || mongoose.model('User', UserSchema)