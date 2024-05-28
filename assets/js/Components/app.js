import { buildAboutBandView, buildBandMembers } from "./band.js";
import { buildHero } from "./heroGallery.js";
import { showNewsletter, shownav } from "./other.js";
import { newsletter } from "../newsletter.js";

export const initPage = () => {
  buildHero();
  shownav();
  buildAboutBandView();
  buildBandMembers();
  showNewsletter();
};
