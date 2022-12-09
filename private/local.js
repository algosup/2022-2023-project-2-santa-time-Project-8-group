const path = require("path");
const express = require("express");
const modules = require("./modules/modules.js");
const http = require("http");


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

//listen to http requests
http.createServer(app).listen(80);