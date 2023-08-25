const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/", function(req, res){
   res.render("home"); 
});


app.get("/doctor", function(req, res){
    res.render("doctor"); 
});

app.get("/patient", function(req, res){
    res.render("patient"); 
});

app.get("/admin", function(req, res){
    res.render("admin"); 
});


app.listen(3000, function(req, res){
    console.log("server started on port 3000");
})