const path = require("path");
const fs = require("fs");
const express = require("express");
const modules = require("./modules.js");

const app = express();
const port = process.env.PORT || 80;

app.get("/", (req, res) => {
    let params = modules.GetParameters(req.url);
    if (Object.keys(params).length === 0) {
        res.sendFile(path.join(__dirname, "/website.html"));
    } else {
        let countdown = modules.ParseURL(params);
        res.send(countdown);
    }
}); 
app.get("/stylesheet.css", (req, res) => {
   res.write(fs.readFileSync(__dirname + "/stylesheet.css", 'utf8'));
   res.end();
})
app.listen(port);