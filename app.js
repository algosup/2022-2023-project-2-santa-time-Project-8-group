const path = require("path")
const express = require("express")
const app = express()
const port = 3000
const onclick = require("./openstreetmap.js")
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/website.html"))
})

app.listen(port)