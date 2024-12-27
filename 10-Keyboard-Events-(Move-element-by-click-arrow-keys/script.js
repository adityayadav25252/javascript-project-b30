const img = document.querySelector("img");

let moveX = 0;
let moveY = 0;

document.addEventListener("keydown", (dets) => {
  if (dets.code == "ArrowRight") {
    moveX++;
    img.style.left = moveX + "%";
  }
  else if (dets.code == "ArrowLeft") {
    moveX--;
    img.style.left = moveX + "%";
  }
  else if (dets.code == "ArrowUp") {
    moveY++;
    img.style.top = moveY + "%";
  }
  else if (dets.code == "ArrowDown") {
    moveY--;
    img.style.top = moveY + "%";
  }
});
