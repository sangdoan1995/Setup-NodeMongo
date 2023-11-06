import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,

    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,

    },
    mobile: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "User"
    }
}, { timestamps: true });

userSchema.pre("save", async function () {
    const salt = await bcrypt.genSaltSync(10)
    this.password = await bcrypt.hash(this.password, salt)

})

userSchema.methods.comparePassword = function (enterPassword) {
    return bcrypt.compareSync(enterPassword, this.password)
}


//Export the model
module.exports = mongoose.model('User', userSchema);