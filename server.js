const { request } = require("express");
const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("index.html");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at : msparihar@gmail.com")
});

app.get("/about", function(req, res) {
    res.send("Hi, I am Manish Singh Parihar.I am a tech enthusiast and I love to automate things😎.")
})

app.get("/hobbies", function(req, res) {
    res.send("My hobbies are playing chess and reading novels.")
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});