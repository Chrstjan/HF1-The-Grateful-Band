import { buildHero } from "./heroGallery.js";
import { shownav } from "./other.js";

export const initPage = () => {
  buildHero();
  shownav();
};
