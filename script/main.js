
// ---------------------Simple slideshow---------------------------//
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';

//button listeners
nextBtn.addEventListener('click', ()=>{
  if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
});

prevBtn.addEventListener('click', ()=>{
  if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
  if(carouselImages[counter].id === "lastClone"){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX('+(-size*counter)+'px)";
  };
  if(carouselImages[counter].id === "firstClone"){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX('+(-size*counter)+'px)";
  };
});

//-------------------------------Image modal-------------------------//
const myModal = document.getElementById('myModal');
const img1 = document.getElementById('myImg1');
const img2 = document.getElementById('myImg2');
const img3 = document.getElementById('myImg3');
const modalImg = document.getElementById('img01');
const caption = document.getElementById('caption');
const close = document.getElementsByClassName('close')[0];

 img1.onclick = function(){
   myModal.style.display = "block";
   modalImg.src = this.src;
   caption.innerHTML = this.alt;
 };

 img2.onclick = function(){
   myModal.style.display = "block";
   modalImg.src = this.src;
   caption.innerHTML = this.alt;
 };

 img3.onclick = function(){
   myModal.style.display = "block";
   modalImg.src = this.src;
   caption.innerHTML = this.alt;
 };

 close.onclick = function(){
   myModal.style.display = "none";
 };

 //------------------------Slideshow gallery-------------------------//
 var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption-text");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
