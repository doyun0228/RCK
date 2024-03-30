import { displayImg } from "./displayImg.mjs";
import { PAPER, ROCK, SCISSOR } from "./constants.mjs";

export function comResult(com) {
  if (com === ROCK) {
    displayImg("ro");
  }
  if (com === PAPER) {
    displayImg("pa");
  }
  if (com === SCISSOR) {
    displayImg("sc (1)");
  }
  clicked = true;
}
