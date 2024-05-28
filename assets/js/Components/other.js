import { newsletter } from "../newsletter.js";

const hamburgerBtn = document.getElementById("hamburger");
const navigation = document.querySelector(".main-nav");

export const shownav = () => {
  hamburgerBtn.addEventListener("click", () => {
    navigation.classList.toggle("show-nav");
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
  })
}