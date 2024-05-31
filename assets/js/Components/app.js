import {
  buildAboutBandView,
  buildBandMembers,
} from "../Components/band/band.js";
import { buildAlbums } from "./band/albums.js";
import { buildConcertView } from "./band/concert.js";
import { buildHero } from "./gallery/heroGallery.js";
import { showNewsletter, shownav } from "./other/other.js";
import { scrollChecker } from "./other/upArrow.js";

/**
 * - This function calls all the functions from different files that should run on page load
 */
export const initPage = () => {
  buildHero();
  shownav();
  buildAboutBandView();
  buildBandMembers();
  buildAlbums();
  buildConcertView();
  showNewsletter();
  scrollChecker();
};
