const app = document.getElementById("app");

const galleryArray = [
    "./assets/img/pexels-brett-sayles-1309240.jpg",
    "./assets/img/pexels-jc-siller-8634867.jpg",
    "./assets/img/pexels-josh-sorenson-995301.jpg",
    "./assets/img/pexels-oleg-magni-1813124.jpg",
    "./assets/img/pexels-vishnu-r-nair-1105666.jpg",
    "./assets/img/pexels-wendy-wei-1699161.jpg"
];

export const buildHero = () => {
    console.log(galleryArray[0]);
    clearApp();
    let herolanding = `
        <figure class="landing-hero-figure">
            <img class="hero-image" src="${galleryArray[0]}">
        </figure>`;

    app.innerHTML += herolanding;

    galleryArray.map((index) => {
        let heroBullets = `<button class="figure-bullets" bullet-index="${index}">Bullet</button>`;

        app.innerHTML += heroBullets;
    });

    const heroBullets = document.querySelectorAll(".figure-bullets");
    heroBullets.forEach((bullet) => {
        bullet.addEventListener("click", () => {
            const gallerImage = document.querySelector(".hero-image");
            console.log(gallerImage);

            const bulletNumber = bullet.getAttribute("bullet-index");
            console.log(bulletNumber);

            gallerImage.src = bulletNumber;
        })
    })
}

const clearApp = () => {
    app.innerHTML = "";
}