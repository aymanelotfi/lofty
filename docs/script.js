const moneys = document.querySelector(".moneys");
const colorOverlay = document.querySelector(".color_overlay");

let fixed=30
let dollars=0
function updateMoneys(d, c) {
  dollars++
  moneys.innerHTML = d;
}

let updateTimer = window.setInterval(() => {
  updateMoneys(dollars);
  if(dollars>fixed){
  clearInterval(updateTimer)
  }
}, 50);
