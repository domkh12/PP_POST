n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
day = n.getDay();
dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
monthNames = ["January", "February", "March", "-", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("date").innerHTML = dayNames[day] + "," + d + " " + monthNames[m] + " " + y;


window.addEventListener("scroll", function () {
  if (window.innerWidth > 1440) {
    var header = document.getElementById("nav");
  header.classList.toggle("sticky", window.scrollY > "230")
  }
})


let loadmoreBtn = document.querySelector(".container");
let currentitem = 1;

loadmoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll('main #s4')];
  for(var i = currentitem; i < currentitem + 1; i++){
      boxes[i].style.display ='flex';
  }
  currentitem+=1;

  if(currentitem >= boxes.length){
    loadmoreBtn.style.display = 'none';
  }
}
