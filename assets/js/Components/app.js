import {
  buildAboutBandView,
  buildBandMembers,
} from "../Components/band/band.js";
import { buildHero } from "./band/heroGallery.js";
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
