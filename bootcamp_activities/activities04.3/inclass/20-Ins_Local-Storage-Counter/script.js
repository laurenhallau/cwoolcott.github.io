var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

var count = sessionStorage.getItem("count");

counter.textContent = count;

addButton.addEventListener("click", function() {
  count++;
  counter.textContent = count;

  sessionStorage.setItem("count", count);
});

subtractButton.addEventListener("click", function() {
  count--;
  counter.textContent = count;

  sessionStorage.setItem("count", count);
});
