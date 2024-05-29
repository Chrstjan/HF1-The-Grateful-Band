import { buildAboutBandView, buildBandMembers } from "./band.js";
import { buildHero } from "./heroGallery.js";
import { showNewsletter, shownav } from "./other.js";
import { scrollChecker } from "./upArrow.js";

export const initPage = () => {
  buildHero();
  shownav();
  buildAboutBandView();
  buildBandMembers();
  showNewsletter();
  scrollChecker();
};
