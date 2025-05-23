function filterImages(category) {
  const images = document.querySelectorAll('.image');

  images.forEach(image => {
    if (category === 'all') {
      image.classList.remove('hidden');
    } else {
      const match = image.classList.contains(category);
      image.classList.toggle('hidden', !match);
    }
  });
}
