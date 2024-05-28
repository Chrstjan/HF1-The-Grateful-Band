import { buildAboutBandView, buildBandMembers } from "./band.js";
import { buildHero } from "./heroGallery.js";
import { shownav } from "./other.js";

export const initPage = () => {
  buildHero();
  shownav();
  buildAboutBandView();
  buildBandMembers();
};
