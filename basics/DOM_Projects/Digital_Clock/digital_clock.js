let clock=document.getElementById('clock');

// function to set current time 
setInterval(function(){
let date=new Date();
clock.innerHTML=date.toLocaleTimeString();

},1000);