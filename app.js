// append this to the end of the URL "&apikey=thewdb"
var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("search");
})

app.get("/results", function(req, res){
    var search = req.query.newshows;
    var url = "http://www.omdbapi.com/?s="+search+"&apikey=thewdb"
    request(url, function(error, response, body){
        if (error) {
            console.log('error:', error);
        } else {
            var data = JSON.parse(body);
            res.render("results", {data: data, search: search}); 
        }
    })
})



app.listen(process.env.PORT, process.env.ID, function(){
    console.log("movie app has started!");
})