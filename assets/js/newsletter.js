const app = document.getElementById("app");
const newsletterContainer = document.createElement("div");
newsletterContainer.classList.add("newsletter-container");

export const newsletter = () => {
    clearApp();

    let newsletter = `
        <form>
            <fieldset>
                <button class="close-modal-btn">X</button>
                <header>
                    <h2>Sign up to recive news about our next concert</h2>
                </header>
                <label for="name">Your Name</label>
                <input class="form-name" name="name" type="text" placeholder="John Doe" />
                <label for="email">Your Email</label>
                <input class="form-email" name="email" type="email" placeholder="none@fake.com" />
                <span class="form-btn-container">
                    <input type="submit" value="Sign Up" placeholder="Sign Up" />
                    <input type="reset" value="Reset" placeholder="Reset" />
                </span>
            </fieldset>
        </form>`;

        newsletterContainer.innerHTML += newsletter;
        app.appendChild(newsletterContainer);

        const closeBtn = document.querySelector(".close-modal-btn");
        closeBtn.addEventListener("click", () => {
            newsletterContainer.remove();
        })
}

const clearApp = () => {
    newsletterContainer.innerHTML = "";
}