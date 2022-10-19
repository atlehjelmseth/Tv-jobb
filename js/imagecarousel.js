const images = ["images/tvbilde1.png","images/tvbilde2.png","images/tvbilde3.png","images/tvbilde4.png","images/tvbilde5.png","images/tvbilde6.png"];
const carousel = document.querySelector(".header");
const interval = setInterval(function() {
   startCarousel();
 }, 10000);
var index = 1;

startCarousel = () => {
  carousel.style.backgroundImage = `url(${images[index++]})`;
  carousel.classList.remove("fade");
  void carousel.offsetWidth;
  carousel.classList.add("fade");
  if(index > images.length - 1) index = 0;
}