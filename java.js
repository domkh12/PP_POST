
//curren date


n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
day = n.getDay();
dayNames = ["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"];
monthNames = ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"];
document.getElementById("date").innerHTML = dayNames[day] + "," + d + " " + monthNames[m] + " " + y;


//nav sticky

window.addEventListener("scroll", function () {
  if (window.innerWidth > 1440) {
    var header = document.querySelector("#nav");
    var bodyWidth = document.body.offsetWidth; // Get the body width
    var header1 = this.document.querySelector(".header1");
    if (window.scrollY > 230) {
      header.classList.add("sticky");
      header.style.width = bodyWidth + "px"; // Set the width to body width
      header1.style.paddingBottom = "90" + "px";
    } else {
      header.classList.remove("sticky");
      header.style.width = "100%"; // Reset to 100% when not sticky
      header1.style.paddingBottom = "0" + "px";
    }
  }
});



// button loadmore

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


//button scroll to top

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




//open main page

const show_main = document.getElementsByClassName('show_main');
const show_main_h1 = document.querySelector('.sectionP2 .show_main h1');
const show_main_img = document.querySelector('.show_main img');
const show_main_p = document.querySelector('.show_main p:nth-child(4)');

let pageOpened = false;

    // Function to open the page
    function openPage() {
      if (!pageOpened) { 
         window.open('main.html', '_parent');
        pageOpened = true;        
      }
    }

    document.getElementById('readmore').addEventListener('click', openPage);
    document.querySelector('.s3left #readmore').addEventListener('click', openPage);
    document.querySelector('.s3news3:nth-child(1) #readmore').addEventListener('click', openPage);
    document.querySelector('.s3news3:nth-child(2) #readmore').addEventListener('click', openPage);
    document.querySelector('.s3news3:nth-child(3) #readmore').addEventListener('click', openPage);
    document.querySelector('#s4 .s3container2 .s3news3:nth-child(1) #readmore').addEventListener('click', openPage);
    document.querySelector('#s4 .s3container2 .s3news3:nth-child(2) #readmore').addEventListener('click', openPage);
    document.querySelector('#s4 .s3container2 .s3news3:nth-child(3) #readmore').addEventListener('click', openPage);
    document.querySelector('#s4 .s3container2 .s3news3:nth-child(4) #readmore').addEventListener('click', openPage);
    document.querySelector('#s4 .s3container2 .s3news3:nth-child(5) #readmore').addEventListener('click', openPage);
    document.querySelector('#s4 .s3container2 .s3news3:nth-child(6) #readmore').addEventListener('click', openPage);
    document.querySelector('#s4 .s3container2:nth-child(2) .s3news3:nth-child(1) #readmore').addEventListener('click', openPage);
    document.querySelector('#s4 .s3container2:nth-child(2) .s3news3:nth-child(2) #readmore').addEventListener('click', openPage);
    document.querySelector('#s4 .s3container2:nth-child(2) .s3news3:nth-child(3) #readmore').addEventListener('click', openPage);
    document.querySelector('#s4 .s3container2:nth-child(2) .s3news3:nth-child(4) #readmore').addEventListener('click', openPage);
    document.querySelector('#s4 .s3container2:nth-child(2) .s3news3:nth-child(5) #readmore').addEventListener('click', openPage);
    document.querySelector('#s4 .s3container2:nth-child(2) .s3news3:nth-child(6) #readmore').addEventListener('click', openPage);