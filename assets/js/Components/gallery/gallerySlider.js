export const selectGalleryImage = () => {
  const heroBullets = document.querySelectorAll(".figure-bullets");
  heroBullets.forEach((bullet) => {
    bullet.addEventListener("click", () => {
      const gallerImage = document.querySelector(".hero-image");
      console.log(gallerImage);

      const bulletNumber = bullet.getAttribute("bullet-index");
      console.log(bulletNumber);

      gallerImage.src = bulletNumber;
    });
  });
}

export const gallerySlider = (gallery) => {
    let currentIndex = 0;
    const galleryImage = document.querySelector(".hero-image");

    const updateIndex = () => {
      currentIndex = (currentIndex + 1) % gallery.length;
      galleryImage.src = gallery[currentIndex];
    };

    setInterval(updateIndex, 4000);
  };