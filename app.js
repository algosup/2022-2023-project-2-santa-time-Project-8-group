const path = require("path")
const express = require("express")

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/website.html"))
})
app.get("/pathwhereicangetmydata", (req, res) => {
    res.sendFile(path.join(__dirname, "/modules"))
})

app.listen(port)