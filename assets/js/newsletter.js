const app = document.getElementById("app");
const newsletterContainer = document.createElement("div");
newsletterContainer.classList.add("newsletter-container");

export const newsletter = () => {
    clearApp();

    let newsletter = `
        <form>
            <fieldset>
                <header>
                    <h2>Sign up to recive news about our next concert</h2>
                </header>
            </fieldset>
        </form>`;

        newsletterContainer.innerHTML += newsletter;
        app.appendChild(newsletterContainer);
        console.log("lol");
}

const clearApp = () => {
    newsletterContainer.innerHTML = "";
}