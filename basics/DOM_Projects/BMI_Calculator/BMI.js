
// lets take whole form from html file:

let form=document.querySelector('form');
//console.log(form)

// this usecase will give you empty
// const height = parseInt (document. querySelector( '#height').value)

form.addEventListener('submit' , function(e) {  // tp prevent default submit without giving us results
    e.preventDefault();  
  let height= parseInt( document.querySelector('#height').value) ;
  let weight= parseInt(document.querySelector('#weight').value);
  let results= document.querySelector('#results');
  let displayresult= document.querySelector('#displayresult')

 // lets set some cases , to  avoid getting some values:

 if(height=== '' || height<0 || isNaN(height)){
   
results.innerHTML= 'Please enter a valid Height!';
 }

  else if(weight=== " " || weight<0 || isNaN(weight)){
    results.innerHTML = "Enter valid  Weight";
 }

 else  {
     let bmi= (weight / ((height*height) /10000)). toFixed(2) ;
    results.innerHTML="BMI is "+bmi;
 if (bmi<18.6){
    displayresult.innerHTML= " You are UnderWeight "
 }
 else if (bmi>=18.5 && bmi<=24.9){
    displayresult.innerHTML=" You are Perfectly Normal "
 }


 }




})  