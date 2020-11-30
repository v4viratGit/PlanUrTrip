//PACKAGES
    //EXPRESS
const express       =       require("express"),
      app           =       express(),
    //EJS
      ejs           =       require("ejs");


app.get("/", (req,res)=>{
    res.send("Home page will be here soon!");
});



//dsajiiikaskak

//PORT LISTENER
app.listen(3000, ()=>{
    console.log("Server started");
});