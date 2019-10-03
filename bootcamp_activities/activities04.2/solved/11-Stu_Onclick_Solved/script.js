var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

var count = 0;



incrementEl.addEventListener("click", function() {
  count++;
  countEl.textContent = count;
});

decrementEl.addEventListener("click", function() {
  count--;
  if(count === 0) {
    count = 0;
  }
    
    countEl.textContent = count;
}); 