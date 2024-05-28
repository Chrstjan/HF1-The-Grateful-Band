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

let bandMembersArray = 
[
    {
        name: "Wendy Wei",
        description: "Lead singer",
        img: "assets/img/pexels-wendy-wei-1699161.jpg"
    },
    {
        name: "Brett Sayles",
        description: "Guitarist",
        img: "assets/img/pexels-brett-sayles-1309240.jpg"
    },
    {
        name: "Jc Siller",
        description: "Drummer",
        img: "assets/img/pexels-jc-siller-8634867.jpg"
    },
    {
        name: "Oleg Magni",
        description: "Bassist",
        img: "assets/img/pexels-oleg-magni-1813124.jpg"
    }
];

export const buildBandMembers = () => {
    const bandArticle = document.createElement("article");
    bandArticle.classList.add("band-article");

    let bandMemberHeader = `<header><h2>The Members</h2></header>`;

    bandArticle.innerHTML += bandMemberHeader;

    bandMembersArray.map((member) => {
        let bandMembers = `
            <figure>
                <img src="${member.img}"
                <h4>${member.name}</h4>
            </figure>`;

            bandArticle.innerHTML += bandMembers;
    })

        app.appendChild(bandArticle);
}

const clearApp = () => {
  bandContainer.innerHTML = "";
};
