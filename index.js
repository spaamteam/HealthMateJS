var express = require("express");
var app = express();

// Provide all routes here, this is for Home page.

app.get("/",function(req,res){
  res.json({"message" : "Hello World"});
});

// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.

app.get("/api",router);

// Listen to this Port

app.listen(process.env.PORT ||3000,function(){
  console.log("Live at Port 3000");
});
