const GoogleStrategy = require("passport-google-oauth20").Strategy;
const DiscordStrategy = require("passport-discord").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const User = require("./models/user.model");

const passport = require("passport");

require("dotenv").config();

const getCallbackUrl = (provider) =>
    `${process.env.API_URL}/auth/${provider}/callback`;

const validateUser = async (provider, providerId, name, photo, done) => {
    try {
        const user = await User.findOne({
            [provider + "Id"]: providerId,
        });

        if (user) return done(null, user);

        const newUser = await User.create({
            [provider + "Id"]: providerId,
            name,
            photo,
        });

        return done(null, newUser);
    } catch (err) {
        return done(err);
    }
};

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: getCallbackUrl("google"),
        },
        (accessToken, refreshToken, profile, done) =>
            validateUser(
                "google",
                profile.id,
                profile.displayName,
                profile.photos[0].value,
                done
            )
    )
);

passport.use(
    new DiscordStrategy(
        {
            clientID: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbackURL: getCallbackUrl("discord"),
        },
        (accessToken, refreshToken, profile, done) =>
        validateUser('discord', profile.id, profile.username, `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}`, done)
    )
);

passport.use(
    new GithubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: getCallbackUrl("github"),
        },
        (accessToken, refreshToken, profile, done) =>
        validateUser("github", profile.id, profile.displayName, profile.photos[0].value, done)
    )
);

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL: getCallbackUrl("facebook"),
        },
        (accessToken, refreshToken, profile, done) =>
            validateUser("facebook", profile.id, profile.displayName, null, done)
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
