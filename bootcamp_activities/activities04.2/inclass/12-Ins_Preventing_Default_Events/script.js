var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

submitEl.addEventListener("click", function(event) {
  event.preventDefault();

  console.log(event);
  if (event.shiftKey){
    alert("you held the shift key");
  }
  else{
    alert("you DIDNT hold the shift key");
  }
  
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
});

//https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent