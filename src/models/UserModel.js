// models/userModel.js
const User = {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

exports.module = User;