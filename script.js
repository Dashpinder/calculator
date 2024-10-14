
let btn= document.getElementById("btn");

btn.addEventListener("click",function() {
  
let results= document.getElementById("results");
  let weight= document.getElementById("weight").value;
  let height= document.getElementById("height").value/100;
  
  if(!weight || !height) {
    alert("Enter a valid values");
    return;
  }

const BMI = (weight/(height*height)).toFixed(2);

if(BMI < 18.5) {
   results.innerHTML= `Your BMI is ${BMI} and ur underweight`;
} else if (BMI >= 18.5 || BMI < 24.9){
    results.innerHTML= `Your BMI is ${BMI} and ur normal`;
} else if (BMI >= 25 || BMI <29.9){
   results.innerHTML= `Your BMI is ${BMI} and ur overweight`;
} else {
   results.innerHTML= `Your BMI is ${BMI} and ur fatty banda`; 
}


});
