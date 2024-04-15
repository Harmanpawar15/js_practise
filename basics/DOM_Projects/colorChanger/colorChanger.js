// reference for buttons :
const buttons=document.querySelectorAll('.button') ;

// reference for body :
const body=document.querySelector("body");

// loop on buttons:

buttons.forEach(function (btn){
    console.log(btn);
    btn.addEventListener('click',function(e){
        console.log(e); //  event object that contains information about the event
        console.log(e.target); // where you press button i.e yellow, white,blue or any other
        console.log(e.type); // tell me what kind of event was it:click


        if(e.target.id==='grey')
        { 
             alert("You  clicked grey Button") ;  

             // You can set color via two ways:
            // Method one 
           // body.style.backgroundColor= 'grey' ;
    
           // Method Two 
            body.style.backgroundColor=e.target.id;

        }
        if(e.target.id==='white')
        { 
             alert("You  clicked white Button") ;  
            body.style.backgroundColor=e.target.id;

        }
        if(e.target.id==='blue')
        { 
             alert("You  clicked blue Button") ;  
            body.style.backgroundColor=e.target.id;

        }
        if(e.target.id==='yellow')
        { 
             alert("You  clicked yellow Button") ;  
            body.style.backgroundColor=e.target.id;

        }
        
    })
})