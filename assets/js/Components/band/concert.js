const app = document.getElementById("app");
const concertContainer = document.createElement("article");
concertContainer.id = "concert";
concertContainer.classList.add("concert-container");

export const buildConcertView = () => {
  clearApp();

  let concert = `
    <header>
        <h2>Concerts</h2>
    </header>
    <span class="sides-container">
     <div class="left-side">
        <ul class="concert-list">
            <li>
                <h4>Winter Waves Festival</h4>
                <p class="location">Location: Madison Square Garden, New York City, NY</p>
                <p class="date">Date: January 15, 2024</p>
            </li>
            <li>
                <h4>Rock the Night</h4>
                <p class="location">Location: The Roxy Theatre, Los Angeles, CA</p>
                <p class="date">Date: February 10, 2024</p>
            </li>
            <li>
                <h4>Spring Sounds Bash</h4>
                <p class="location">Location: The Fillmore, San Francisco, CA</p>
                <p class="date">Date: March 5, 2024</p>
            </li>
            <li>
                <h4>Echoes of Serenity Tour</h4>
                <p class="location">Location: Red Rocks Amphitheatre, Morrison, CO</p>
                <p class="date">Date: April 12, 2024</p>
            </li>
            <li>
                <h4>Echoes of Serenity Tour</h4>
                <p class="location">Location: Red Rocks Amphitheatre, Morrison, CO</p>
                <p class="date">Date: April 12, 2024</p>
            </li>
             <li>
                <h4>Midwest Melodies</h4>
                <p class="location">Location: The Vic Theatre, Chicago, IL</p>
                <p class="date">Date: May 3, 2024</p>
            </li>
        </ul>
     </div>
     <div class="right-side">
        <ul class="concert-list">
            <li>
                <h4>Southern Harmony Fest</h4>
                <p class="location">Location: Ryman Auditorium, Nashville, TN</p>
                <p class="date">Date: June 8, 2024</p>
            </li>
            <li>
                <h4>Heartland Rock Showcase</h4>
                <p class="location">Location: The Pageant, St. Louis, MO</p>
                <p class="date">Date: June 22, 2024</p>
            </li>
            <li>
                <h4>Great Lakes Jam</h4>
                <p class="location">Location: The Fillmore Detroit, Detroit, MI</p>
                <p class="date">Date: July 10, 2024</p>
            </li>
            <li>
                <h4>East Coast Echoes</h4>
                <p class="location">Location: The Anthem, Washington, D.C.</p>
                <p class="date">Date: July 25, 2024</p>
            </li>
            <li>
                <h4>Summertime Serenade</h4>
                <p class="location">Location: House of Blues, Boston, MA</p>
                <p class="date">Date: August 15, 2024</p>
            </li>
             <li>
                <h4>Sunset City Sounds</h4>
                <p class="location">Location: The Fillmore Miami Beach, Miami, FL</p>
                <p class="date">Date: August 30, 2024</p>
            </li>
        </ul>
     </div>
    </span>`;
  concertContainer.innerHTML += concert;
  app.appendChild(concertContainer);
};

const clearApp = () => {
  concertContainer.innerHTML = "";
};
