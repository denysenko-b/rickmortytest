const router = require("express").Router();
const passport = require("passport");

require("dotenv").config();

const failureRedirect = process.env.API_URL + "/auth/login/failed";

router.get("/login/success", (req, res) => {
    if (req.user) {
        const {name, photo, liked, _id: id} = req.user;

        res.status(200).json({
            success: true,
            message: "successfull",
            user: {
                name,
                photo,
                liked,
                id
            },
        });
    }
});

router.get("/login/failed", (req, res) => {
    res.redirect(process.env.APP_URL);
});

router.get("/logout", (req, res) => {
    req.logout();
    res.sendStatus(200);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: process.env.APP_URL,
        failureRedirect,
    })
);

router.get(
    "/discord",
    passport.authenticate("discord", {
        scope: ["identify"],
    })
);

router.get(
    "/discord/callback",
    passport.authenticate("discord", {
        successRedirect: process.env.APP_URL,
        failureRedirect,
    })
);

router.get(
    "/github",
    passport.authenticate("github", { scope: ["read:user"] })
);

router.get(
    "/github/callback",
    passport.authenticate("github", {
        successRedirect: process.env.APP_URL,
        failureRedirect,
    })
);

router.get("/facebook", passport.authenticate("facebook"));

router.get(
    "/facebook/callback",
    passport.authenticate("facebook", {
        successRedirect: process.env.APP_URL,
        failureRedirect,
    })
);

module.exports = router;
