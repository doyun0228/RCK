export function Playerselected(Pslected) {
  const back = document.querySelector(".background");
  const Pselect = document.createElement("h1");
  back.appendChild(Pselect);
  Pselect.className = "ps";
  Pselect.innerText = "당신은 " + Pslected + "를 선택하였습니다";
}
