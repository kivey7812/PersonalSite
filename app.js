const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");



const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));

app.get("/", function(req, res){
  res.render("index");
});

app.get("/:pagetitle", function(req,res){
  const pageTitle = req.params.pagetitle;
  res.render(pageTitle);
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function(){
  console.log("server started successfully");
});
