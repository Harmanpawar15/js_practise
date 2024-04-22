
// Take two buttons start and stop generate random color everytime after button is clicked and stop generating after stop is clicked :

// function to generate random color in hexcode:

 let randomColor =  () => {
    const hex='0123456789ABCDEF'
    var color= '#'
    for(let i=0; i<6; i++) {
       color += hex[Math.floor(Math.random()*16)]
    }
return color ;
 }
 //console.log(randomColor())

 // To activate Start and stop button:
 var  interval ;

 let  setColor= function (){
    // do check if interval is empty or no 
    if(!interval){
    interval= setInterval(changebgcolor,1000) }
    function changebgcolor (){
    document.body.style.backgroundColor=randomColor(); }

 } 
 let  stopColor = function() {
   
    clearInterval(interval);
    // after clearin interval we will  reset the background again so that it is not same
    interval= null ;
    
   
 }

 document.querySelector('#start').addEventListener('click', setColor);
 document.querySelector('#stop').addEventListener('click', stopColor);


 

 