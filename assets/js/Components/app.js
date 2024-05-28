import { buildAboutBandView, buildBandMembers } from "./band.js";
import { buildHero } from "./heroGallery.js";
import { showNewsletter, shownav, scrollChecker } from "./other.js";

export const initPage = () => {
  buildHero();
  shownav();
  buildAboutBandView();
  buildBandMembers();
  showNewsletter();
  scrollChecker();
};
