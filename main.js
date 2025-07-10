const images = [
    './imges/ab1.jpg',
    './imges/ab2.jpg',
    './imges/ab3.jpg',
    './imges/ab4.jpg',
    './imges/ab5.jpg',
    './imges/ab6.jpg',
    './imges/ab7.jpg',
    './imges/ab8.jpg'
  ];
  let current = 0;

  function updateImage() {
    const img = document.getElementById('gallery-image');
    const counter = document.getElementById('image-counter');
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = images[current];
      img.style.opacity = 1;
      counter.textContent = (current + 1) + ' / ' + images.length;
    }, 200);
  }

  function prevImage() {
    current = (current - 1 + images.length) % images.length;
    updateImage();
  }

  function nextImage() {
    current = (current + 1) % images.length;
    updateImage();
  }