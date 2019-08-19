const express = require('express');
let app = express();


app.get("/", function(req, res){
    res.render("home.ejs");
})

app.get("/regular", function (req, res) {
    res.render("regular.ejs");
})

app.get("/naruto", function (req, res) {
    res.send("hi from naruto.ejs");
})

app.get("/spongebob", function (req, res) {
    res.send("hi from spongebob.ejs");
})

//serve public files
app.use(express.static("public"));


let PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server listening at ", PORT);
}); 
