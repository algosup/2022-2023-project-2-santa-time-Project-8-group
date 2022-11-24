const path = require("path");
const fs = require("fs");
const express = require("express");
const modules = require("./modules");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    let params = modules.GetParameters(req.url);
    if (Object.keys(params).length === 0) {
        res.sendFile(path.join(__dirname, "/website.html"));
    } else {
        res.send("Request has parameters!");
    }
});
app.get("/stylesheet.css", (req, res) => {
   res.write(fs.readFileSync(__dirname + "/stylesheet.css", 'utf8'));
   res.end();
})
app.listen(port);