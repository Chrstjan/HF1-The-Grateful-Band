const app = document.getElementById("app");
const bandContainer = document.createElement("div");
bandContainer.classList.add("band-container");

export const buildAboutBandView = () => {
  clearApp();

  let aboutBand = `
        <header>
            <h2>The Grateful</h2>
        </header>
        <article class="about-The-Grateful">
            <p>
                Introducing The Grateful, a dynamic rock/pop band
                that's taking the music scene by storm.
                Comprised of four talented musicians,
            </p>
            <p>
                The Restful blends catchy melodies, 
                powerful lyrics, and electrifying performances to create a
                sound that's both refreshing and unforgettable.
            </p>
            <p>
                The Grateful broke through in 2021 with their debut album,
                "Echoes of Serenity." The lead single,
                "Midnight Waves," quickly captured the attention of both
                fans and critics with its haunting melody and powerful chorus.
            </p>
        </article>`;

  bandContainer.innerHTML += aboutBand;
  app.appendChild(bandContainer);
};

const clearApp = () => {
  bandContainer.innerHTML = "";
};
