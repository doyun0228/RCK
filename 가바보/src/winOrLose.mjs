import { PAPER, ROCK, SCISSOR } from "./constants.mjs";

export function WinorLose(playerSelected, com) {
  const w = document.querySelector(".w");
  const e = document.querySelector(".e");
  const l = document.querySelector(".l");
  const back = document.querySelector(".background");
  if (
    (playerSelected === SCISSOR && com === PAPER) ||
    (playerSelected === PAPER && com === ROCK) ||
    (playerSelected === ROCK && com === SCISSOR)
  ) {
    const Win = document.createElement("h2");
    const centerdiv = document.createElement("div");
    centerdiv.appendChild(Win);
    centerdiv.className = "centerdiv";
    w.innerText++;
    console.log(w.innerText);
    Win.innerText = "플레이어가 승리하였습니다";
    back.appendChild(centerdiv);
  }
  if (
    (playerSelected === SCISSOR && com === ROCK) ||
    (playerSelected === PAPER && com === SCISSOR) ||
    (playerSelected === ROCK && com === PAPER)
  ) {
    const lose = document.createElement("h2");
    const centerdiv = document.createElement("div");
    centerdiv.appendChild(lose);
    centerdiv.className = "centerdiv";
    l.innerText++;
    lose.innerText = "플레이어가 패배하였습니다";
    back.appendChild(centerdiv);
  }
  if (
    (playerSelected === SCISSOR && com === SCISSOR) ||
    (playerSelected === PAPER && com === PAPER) ||
    (playerSelected === ROCK && com === ROCK)
  ) {
    const equal = document.createElement("h2");
    const centerdiv = document.createElement("div");
    centerdiv.appendChild(equal);
    centerdiv.className = "centerdiv";
    e.innerText++;
    equal.innerText = "플레이어와 컴퓨터가 비겼습니다";
    back.appendChild(centerdiv);
  }
}
