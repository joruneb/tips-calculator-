var tipAmount = document.querySelector(".tipAmount");
var total = document.querySelector(".total");
var tip = document.getElementsByClassName("box"); 
var bill = document.querySelector(".bill");
var people = document.querySelector(".people");
var buttonReset = document.getElementsByClassName("reset");
var buttons = document.getElementsByTagName("button");
var customTip = document.querySelector("#input");
var resetBtn = document.querySelector(".reset");


  for (var i = 0; i < tip.length; i++) {
    tip[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
  
      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
  
      // Add the active class to the current/clicked button
      this.className += " active";

      calculate();
    }
    );
  }


function calculate(){
  for(var i = 0; i < tip.length; i++){
  if (+bill.value > 0 && +people.value >= 1){
    let tipPercent = document.querySelector(".active");
    tipAmount.innerHTML = "$" + ((bill.value * (+tipPercent.value/100))/ people.value).toFixed(2);
    total.innerHTML = "$" + (bill.value/people.value + (bill.value * (+tipPercent.value/100))/ people.value).toFixed(2);
    resetBtn.disabled=false;
  resetBtn.classList.add("activeBtn");
  } 

} 
}


function peopleChange(){
  if (+people.value < 1){
    document.querySelector(".zero").style.display = "block";
  }
  else {
    document.querySelector(".zero").style.display = "none";
  }
}

function reset(){
  people.value = '';
  bill.value = '';
  tipAmount.innerHTML = '$' + "0.00";
  total.innerHTML= '$' + "0.00";
  document.querySelector(".active").classList.remove("active");
  customTip.value='';
  resetBtn.disabled=true;
  resetBtn.classList.remove("activeBtn");
}



bill.addEventListener("change", calculate);
people.addEventListener("change", calculate);
people.addEventListener("change", peopleChange);
customTip.addEventListener("change", calculate);
resetBtn.addEventListener("click", reset)