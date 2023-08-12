//UserModel
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        minlength: 3,
        maxlength: 100
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', async function (next) {
    //criptografa a senha antes de salconst no banco
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

module.exports = mongoose.model('User', UserSchema);