const express = require("express");
const modules = require("./modules");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
   modules.CollectRequestData(req, res)
});

app.listen(port)