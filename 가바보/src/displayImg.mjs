export function displayImg(imageFileName) {
  const back = document.querySelector(".background");
  const bdiv = document.createElement("div");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const text = document.createElement("h1");
  bdiv.appendChild(div);
  bdiv.appendChild(text);
  div.appendChild(img);
  bdiv.appendChild(img);
  back.appendChild(bdiv);
  bdiv.className = "displayimg";
  div.className = "dawd";
  text.innerText = "컴퓨터";
  img.src = "/img/" + imageFileName + ".png";
  img.style.width = "100px";
  img.style.height = "100px";
}
