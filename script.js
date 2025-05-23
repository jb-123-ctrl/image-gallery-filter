function filterImages(category) {
  const images = document.querySelectorAll('.gallery .image');

  images.forEach(img => {
    if (category === 'all') {
      img.classList.remove('hidden');
    } else {
      if (img.classList.contains(category)) {
        img.classList.remove('hidden');
      } else {
        img.classList.add('hidden');
      }
    }
  });
}
