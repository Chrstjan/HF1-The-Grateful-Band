const hamburgerBtn = document.getElementById("hamburger");
const navigation = document.querySelector(".main-nav");

export const shownav = () => {
  hamburgerBtn.addEventListener("click", () => {
    navigation.classList.toggle("show-nav");
  });
};
