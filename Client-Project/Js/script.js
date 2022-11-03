// navbar Functionality

const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

var theme = document.getElementById("theme");
var theme2 = document.getElementById("theme2");

theme.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    theme.innerHTML = ' <ion-icon name="sunny-outline"></ion-icon>';
    theme2.innerHTML = ' <img src="img/A-removebg-preview.png" alt="">';
  } else {
    theme.innerHTML = ' <ion-icon name="moon-sharp"></ion-icon>';
    theme2.innerHTML = ' <img src="img/A-removebg-preview(1).png" alt="">';
  }
};


const navTogBtn = document.querySelector('.Navbartoggle_btn')
const navBar = document.querySelector('.navigation')
navTogBtn.addEventListener('click', () =>{
  console.log('Button clicked')
  navBar.classList.add('navActive')
})

// End of navigation






// slider
// omo, if you understand the slideContainer, you be boss, cuz it's not arranged


const slideContainer = document.querySelector(".cont");
const slide = document.querySelector(".slides");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const interval = 3000;

let slides = document.querySelectorAll(".slide");
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

slide.addEventListener("transitionend", () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  if (slides[index].id === lastClone.id) {
    slide.style.transition = "none";
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const getSlides = () =>document.querySelectorAll('.slide');

const moveToPrevSlide = ()=>{
    if(index <= 0) return;
    index--;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = ".7s";
}

const moveToNextSlide = ()=> {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = ".7s";
};

slideContainer.addEventListener("mouseenter", () => {
  clearInterval(slideId);
});

slideContainer.addEventListener("mouseleave", startSlide);

nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPrevSlide);

startSlide();

// end of slider