// const cookieSession = require("cookie-session");
const session = require("express-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

app.use(
    session({
        secret: "rickmortytest",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: process.env.APP_URL,
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.use("/auth", authRoute);
app.get('/', (req, res) => {
    res.send("I love you");
})

app.listen(process.env.PORT, () => {
    console.log("Server is running!");
});

mongoose
    .connect(process.env.DB)
    .then(() => {
        console.log("Connected to MongoDB database");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB database", error);
    });
