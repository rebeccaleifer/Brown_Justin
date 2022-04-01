/*
    Author: Justin Brown
    Serving routing via express
*/

const express = require("express");

const req = require("express/lib/request");

const app = express();

var port = app.listen(process.env.PORT || 3000)

const path = require("path");

app.use(express.urlencoded({extended: true}));

//Set base directory as static for css, js, and img files to render
app.use(express.static(__dirname));

//Index page route
app.get("/", (req,res) => res.sendFile(path.join(__dirname + "/index.html")));

//Email subscription form route
app.post("/email", (req, res) => 
{
    //Redirects to main page where sign up form is located
    res.redirect("/#signup");
    //Prints data to console
    res.send(console.log("Email submitted: " + req.body.email));
});

app.listen(port, () => {console.log("Server is listening on port " + port)});