import { newsletter } from "../newsletter.js";

const hamburgerBtn = document.getElementById("hamburger");
const navigation = document.querySelector(".main-nav");

export const shownav = () => {
  hamburgerBtn.addEventListener("click", () => {
    navigation.classList.toggle("show-nav");

    document.querySelectorAll(".bar").forEach((bar, index) => {
      switch (true) {
        case index === 0:
          bar.classList.toggle("burger-top");
          break;
        case index === 1:
          bar.classList.toggle("burger-middle");
          break;
        case index === 2:
          bar.classList.toggle("burger-bottom");
          break;
        default:
          console.log("Index not found!");
          break;
      }
    });
  });
};

let isOpen = false;

export const showNewsletter = () => {
  const newsletterBtn = document.getElementById("newsletter");

  newsletterBtn.addEventListener("click", () => {
    isOpen = true;
    if (!isOpen) {
      return;
    }

    newsletter();
  });
};
