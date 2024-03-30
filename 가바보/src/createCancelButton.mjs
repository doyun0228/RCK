export function createCancelButton(back, bigdiv) {
  const cancel = document.createElement("img");
  cancel.src = "/img/back.png";
  cancel.className = "exit";
  cancel.addEventListener("click", () => {
    const remove2 = back.querySelector(".displayimg");
    back.removeChild(remove2);
    const remove = back.querySelector(".centerdiv");
    back.removeChild(remove);
    const removeps = back.querySelector(".ps");
    back.removeChild(removeps);
    const removeimg = back.querySelector(".youimg");
    back.removeChild(removeimg);
    bigdiv.className = "block";
    cancel.className = "none";
    clicked = false;
  });
  return cancel;
}
