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
        role: "Lead singer",
        img: "assets/img/pexels-wendy-wei-1699161.jpg",
        description: "Wendy Wei, The co-creater and captivating lead vocalist of The Grateful, is the heart and soul of the band. Her dynamic range and emotional depth have become defining elements of the band's sound. Wendy's voice can seamlessly transition from hauntingly soft melodies to powerful, anthemic choruses, captivating audiences with every note."
    },
    {
        name: "Brett Sayles",
        role: "Guitarist",
        img: "assets/img/pexels-brett-sayles-1309240.jpg",
        description: "Brett Sayles, The co-creater and guitarist for The Grateful, is the architect of the band's rich, intricate soundscapes. Known for his exceptional skill and creativity, Brett's guitar work ranges from delicate acoustic strumming to explosive electric solos,"
    },
    {
        name: "Jc Siller",
        role: "Drummer",
        img: "assets/img/pexels-jc-siller-8634867.jpg",
        description: "JC Siller, the powerhouse drummer of The Grateful, provides the rhythmic backbone that drives the band's energetic performances. Known for his impeccable timing and dynamic drumming style, JC brings a powerful, infectious energy to every song."
    },
    {
        name: "Oleg Magni",
        role: "Bassist",
        img: "assets/img/pexels-oleg-magni-1813124.jpg",
        description: "Oleg Magni, the bassist for The Grateful, is the groove master who anchors the band's sound with his smooth, rhythmic bass lines. Oleg's playing is characterized by its precision and fluidity, providing a solid foundation that supports the melodies and harmonies of the band's songs. His ability to create catchy, driving bass lines that complement both the guitar and drums adds depth and richness to The Grateful's music."
    }
];

export const buildBandMembers = () => {
    const bandArticle = document.createElement("article");
    bandArticle.classList.add("band-article");
    bandArticle.id = "band";

    let bandMemberHeader = `<header><h2>The Members</h2></header>`;

    bandArticle.innerHTML += bandMemberHeader;

    bandMembersArray.map((member) => {
        let bandMembers = `
            <figure>
                <img src="${member.img}"
                <h3>${member.name}</h3>
                <figcaption>
                    <header>
                        <h4>${member.role}</h4>
                    </header>
                    <p>${member.description}</p>
                </figcaption>
            </figure>`;

            bandArticle.innerHTML += bandMembers;
    })

        app.appendChild(bandArticle);
}

const clearApp = () => {
  bandContainer.innerHTML = "";
};
