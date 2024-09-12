let currentIndex = 0;

function moveCarousel(direction) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  
  document.querySelector('.carousel-inner').style.transform = 
    `translateX(-${currentIndex * 100}%)`;
}
