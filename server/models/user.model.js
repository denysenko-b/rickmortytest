const mongoose = require('mongoose');

const follower = new mongoose.Schema({
    userId: {
        ref: "users",
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
});

const userSchema = mongoose.Schema(
    {
        name: String,
        facebookId: String,
        googleId: String,
        discordId: String,
        githubId: String,
        photo: String,
        liked: [ String ]
    },
    { timestamps: true }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
