const path = require("path");
const fs = require("fs");
const express = require("express");
const modules = require("./modules.js");

const app = express();
const port = process.env.PORT || 80;

app.get("/", async (req, res) => {
    let params = modules.GetParameters(req.url);
    if (Object.keys(params).length === 0) {
        res.sendFile(path.join(__dirname, "/website.html"));
    } else {
        let countdown = await modules.ParseURL(params);
        res.send(countdown);
    }
});

// TODO: Create folders and refactor code to serve
// static files more easily with express
// (Exercise for Jason)
/*
    public/
        css/
            stylesheet.css
        images/
            ...
        js/
            client.js
        website.html
    private/
        app.js
        modules.js
*/
app.get("/stylesheet.css", (req, res) => {
   res.write(fs.readFileSync(__dirname + "/stylesheet.css", 'utf8'));
   res.end();
});
app.get("/client.js", (req, res) => {
   res.write(fs.readFileSync(__dirname + "/client.js", 'utf8'));
   res.end();
});
app.get("/images/twitter.svg", (req, res) => {
    res.sendFile(__dirname + "/images/twitter.svg")
});
app.get("/images/facebook.png", (req, res) => {
    res.sendFile(__dirname + "/images/facebook.png")
});
app.get("/images/linkedin.png", (req, res) => {
    res.sendFile(__dirname + "/images/linkedin.png")
});
app.get("/images/reddit.png", (req, res) => {
    res.sendFile(__dirname + "/images/reddit.png")
});
app.get("/images/whatsapp.svg", (req, res) => {
    res.sendFile(__dirname + "/images/whatsapp.svg")
});
app.get("/images/copy.svg", (req, res) => {
    res.sendFile(__dirname + "/images/copy.svg")
});
app.get("/images/github.png", (req, res) => {
    res.sendFile(__dirname + "/images/github.png")
});
app.get("/images/algosup.png", (req, res) => {
    res.sendFile(__dirname + "/images/algosup.png")
});

app.listen(port);