const path = require("path");
const fs = require("fs");
const express = require("express");
const modules = require("./modules/modules.js");

const app = express();
const port = process.env.PORT || 80;

app.get("/", async (req, res) => {
    let params = modules.GetParameters(req.url);
    if (Object.keys(params).length === 0) {
        res.sendFile(path.join(__dirname, "../public/website.html"));
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

app.use(express.static('public'));

app.listen(port);