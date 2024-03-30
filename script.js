import { WinorLose } from "./src/winOrLose.mjs";
import { Playerselected } from "./src/Playerselected.mjs";
import { Youplayer } from "./src/Youplayer.mjs";
import { createCancelButton } from "./src/createCancelButton.mjs";
import { comResult } from "./src/comResult.mjs";
import { PAPER, ROCK, SCISSOR } from "./src/constants.mjs";

const pa = document.querySelector(".pa");
const ro = document.querySelector(".ro");
const bigdiv = document.querySelector(".bigdiv");
const sc = document.querySelector(".sc");
const back = document.querySelector(".background");
window.clicked = false;

sc.addEventListener("click", () => {
  if (clicked === false) {
    Playerselected("가위");
    bigdiv.className = "none";
    const cacnel = createCancelButton(back, bigdiv);
    back.appendChild(cacnel);
    Youplayer("sc (1)");
    const com = Math.floor(Math.random() * 3) + 1;
    WinorLose(SCISSOR, com);
    comResult(com);
  }
});
pa.addEventListener("click", () => {
  if (clicked === false) {
    Playerselected("보");
    bigdiv.className = "none";
    const cancel = createCancelButton(back, bigdiv);
    back.appendChild(cancel);
    Youplayer("pa");
    const com = Math.floor(Math.random() * 3) + 1;
    WinorLose(PAPER, com);
    comResult(com);
  }
});

ro.addEventListener("click", () => {
  if (clicked === false) {
    Playerselected("주먹");
    bigdiv.className = "none";
    const cancel = createCancelButton(back, bigdiv);
    back.appendChild(cancel);
    Youplayer("ro");
    const com = Math.floor(Math.random() * 3) + 1;
    WinorLose(ROCK, com);
    comResult(com);
  }
});
