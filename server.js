const express = require('express');
const app=express();
app.use(express.static('public'));
app.get('/',(req,res)=>{
res.send("welcome");});
app.listen(8000);
console.log("App is listening on port 8000");