const app = document.getElementById("app");
const albumsContainer = document.createElement("article");
albumsContainer.classList.add("albums-container");
albumsContainer.id = "albums";

const albumBtn = document.getElementById("albums");

const albums = [
    {
        album_name: "Echoes of Serenity",
        release_date: "2021",
        key_tracks: ["Midnight Waves", "Lost in the Moment", "Shadows and Light"],
    },
    {
        album_name: "Whispers in the Wind",
        release_date: "2022",
        key_tracks: ["Fading Echoes", "Silent Heartbeat", "Winds of Change"],
    },
    {
        album_name: "Harmonic Horizons",
        release_date: "2023",
        key_tracks: ["Endless Sky", "Dreamcatcher", "Waves of Time"],
    },
    {
        album_name: "Rhythms of the Night",
        release_date: "2023",
        key_tracks: ["Moonlit Dance", "Nightfall Serenade", "Echoing Silence"],
    },
    {
        album_name: "Reflections of Reality",
        release_date: "2024",
        key_tracks: ["Mirror of My Soul", "Through the Looking Glass", "Fractured Dreams"],
    },
    {
        album_name: "Serenade of the Stars",
        release_date: "2024",
        key_tracks: ["Galactic Whisper", "Stardust Symphony", "Celestial Journey"],
    },
]

export const buildAlbums = () => {
    clearApp();

    let albumArticleHeader = `<header class="album-header"><h2>Albums</h2></header>`;

    albumsContainer.innerHTML += albumArticleHeader;

    albums.map((album) => {
        let albums = `
        <span>
         <header>
            <h3>${album.album_name}</h3>
         </header>
         <div class="album-content">
            <p>Release date: ${album.release_date}</p>
            <p>Tracks: ${album.key_tracks}</p>
         </div>
        </span>`;
         
         albumsContainer.innerHTML += albums;
    })
    app.appendChild(albumsContainer);
}

const clearApp = () => {
    albumsContainer.innerHTML = "";
}