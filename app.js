
//Init
var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));

app.get('/hello',function (req,res) {
    res.send('Hello World');
});

app.listen(3000,function () {
    console.log('Form app is listening in 3000');
});