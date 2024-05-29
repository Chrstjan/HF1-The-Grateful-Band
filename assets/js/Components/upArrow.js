const app = document.getElementById("app");
const upCircleContainer = document.createElement("div");
upCircleContainer.classList.add("scroll-up-arrow");

export const scrollChecker = () => {
  let pastScrollCheckpoint = false;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400 && !pastScrollCheckpoint) {
      pastScrollCheckpoint = true;
      clearApp();
      console.log("Stop criminal scum!");

      let upCircle = `
        <span class="up-circle">
          <a href="#home">&uarr;</a>
        </span>`;

      upCircleContainer.innerHTML += upCircle;
      app.appendChild(upCircleContainer);
    }
    if ((window.scrollY < 300) & pastScrollCheckpoint) {
      pastScrollCheckpoint = false;
      console.log("Good day sir");
      upCircleContainer.remove();
    }
  });
};

const clearApp = () => {
  upCircleContainer.innerHTML = "";
};
