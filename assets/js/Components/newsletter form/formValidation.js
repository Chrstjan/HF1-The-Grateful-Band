export const formValidation = () => {
  const newsletterForm = document.getElementById("newsletter-form");
  const newsLetterFieldset = document.querySelector(".newsletter-fieldset");

  const nameInput = document.querySelector(".form-name");
  const emailInput = document.querySelector(".form-email");

  const nameRegex = /^[A-Za-z]+(?:[-'][A-Za-z]+)* [A-Za-z]+(?:[-'][A-Za-z]+)*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let nameIsValid = false;
  let emailIsValid = false;

  const validateName = () => {
    nameIsValid = nameRegex.test(nameInput.value);
    if (nameIsValid) {
      console.log("Valid");
      nameInput.classList.remove("invalid-input");
      nameInput.classList.add("valid-input");
    } else {
      console.log("Not valid");
      nameInput.classList.remove("valid-input");
      nameInput.classList.add("invalid-input");
    }
  };

  const validateEmail = () => {
    emailIsValid = emailRegex.test(emailInput.value);
    if (emailIsValid) {
      console.log("Valid");
      emailInput.classList.remove("invalid-input");
      emailInput.classList.add("valid-input");
    } else {
      console.log("Not valid");
      emailInput.classList.remove("valid-input");
      emailInput.classList.add("invalid-input");
    }
  };

  nameInput.addEventListener("input", validateName);
  emailInput.addEventListener("input", validateEmail);

  newsletterForm.addEventListener("submit", (e) => {
    validateName();
    validateEmail();
    if (nameIsValid && emailIsValid) {
      console.log("Form submitted");
      newsLetterFieldset.innerHTML = `
        <button class="close-modal-btn">X</button>
        <header>
          <h2>Thank you for singing up for our newsletter. You will recive a email about our next concert</h2>
        </header>`;

      const closeBtn = document.querySelector(".close-modal-btn");
      closeBtn.addEventListener("click", () => {
        newsletterForm.remove();
      });
    } else {
      e.preventDefault();
      console.log("Ha");
    }
  });
};
