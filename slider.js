
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideArray = Array.from(document.querySelectorAll('.slide'));
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    let currentIndex = 0;
  
    const updateSlidePosition = () => {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    };
  
    const showPrevSlide = () => {
      currentIndex = (currentIndex - 1 + slideArray.length) % slideArray.length;
      updateSlidePosition();
    };
  
    const showNextSlide = () => {
      currentIndex = (currentIndex + 1) % slideArray.length;
      updateSlidePosition();
    };
  
    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);
  

    setInterval(showNextSlide, 3000); 
  });
  