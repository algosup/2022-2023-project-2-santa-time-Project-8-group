const path = require("path");
const fs = require("fs");
const express = require("express");
const modules = require("./modules/modules.js");
const https = require("https");
const http = require("http");

var options = {
    key: fs.readFileSync("santa.algosup.com/privkey.pem"),
    cert: fs.readFileSync("santa.algosup.com/cert.pem")
};


const app = express();
// const port = process.env.PORT || 80;
const port = 443;

app.get("/", async (req, res) => {
    let params = modules.GetParameters(req.url);
    if (Object.keys(params).length === 0) {
        res.sendFile(path.join(__dirname, "../public/website.html"));
    } else {
        let countdown = await modules.ParseURL(params);
        res.send(countdown);
    }
});

app.use(express.static('public'));

//redirect all traffic to https
app.use(function(req, res, next) {
    if (req.secure) {
        next();
    } else {
        res.redirect('https://' + req.headers.host + req.url);
    }
});
//listen to http requests
http.createServer(app).listen(80);
https.createServer(options,app).listen(port);