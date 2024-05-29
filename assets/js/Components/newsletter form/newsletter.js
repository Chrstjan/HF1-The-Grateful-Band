import { formValidation } from "./formValidation.js";

const app = document.getElementById("app");
const newsletterContainer = document.createElement("div");
newsletterContainer.classList.add("newsletter-container");

export const newsletter = () => {
  clearApp();

  let newsletter = `
        <form id="newsletter-form">
            <fieldset class="newsletter-fieldset">
                <button class="close-modal-btn">X</button>
                <header>
                    <h2>Sign up to recive news about our next concert</h2>
                </header>
                <span class="name-container">
                  <label for="name">Your Name</label>
                  <input class="form-name" name="name" type="text" placeholder="John Doe" />
                </span>
                <span class="email-container">
                  <label for="email">Your Email</label>
                  <input class="form-email" name="email" type="email" placeholder="none@fake.com" />
                </span>
                <span class="form-btn-container">
                    <input id="sign-up" type="submit" value="Sign Up" placeholder="Sign Up" />
                    <input type="reset" value="Reset" placeholder="Reset" />
                </span>
            </fieldset>
        </form>`;

  newsletterContainer.innerHTML += newsletter;
  app.appendChild(newsletterContainer);

  const closeBtn = document.querySelector(".close-modal-btn");
  closeBtn.addEventListener("click", () => {
    newsletterContainer.remove();
  });

  formValidation();
};

const clearApp = () => {
  newsletterContainer.innerHTML = "";
};
