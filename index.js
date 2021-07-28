const express = require('express');
const app = express();
const port = 4000;


const date = new Date();
const hour=date.getHours()
const day=date.getDay()

app.set("view engine", "ejs")

app.use(express.static('public'))
app.use('/style',express.static(__dirname +"style"))

//app.use(loading); 
app.use(getTime); 

 /* function loading(req,res,next){
    
    setInterval(function(){
       res.render("loading")
   console.log('test'); next();
      },3000);   
      clearInterval()
}  */
function getTime(req,res,next){
    console.log("A new request received at " + day +hour);
    if( ( (day>0)&&(day<6) ) &&  ( (hour>8)&&(hour<18) )){
        next(); 
    }else{
        res.render("locked")
    }
}

app.get('/' ,function(req,res) {
    res.render("home")
    
}); 
app.get('/services', function(req,res) {
    res.render("services")
});
app.get('/contact', function(req,res) {
    res.render("contact")
    
});


app.listen(port, () =>{
    console.log('The server is running, ' +
        ` please, open your browser at http://localhost:${port}` 
        );
  }); 