const myImg = document.getElementById("myImg");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");

leftBtn.addEventListener("click", () => {
  const div1 = myImg.parentElement;
  const prevSibling = div1.previousElementSibling;
  if (prevSibling) {
    prevSibling.appendChild(myImg);
  }
});

rightBtn.addEventListener("click", () => {
  const div1 = myImg.parentElement;
  const nextSibling = div1.nextElementSibling;
  if (nextSibling) {
    nextSibling.appendChild(myImg);
  }
});
