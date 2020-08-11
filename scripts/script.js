let photo = document.querySelector("img");
let imgFloatHeight = parseFloat(window.getComputedStyle(photo).height);
let imgFloatWidth = parseFloat(window.getComputedStyle(photo).width);

document.querySelector("img").addEventListener("mousemove", event => {
  let y = -(((event.offsetY / imgFloatHeight) * 100 - 50) * 0.2);
  let x = -(((event.offsetX / imgFloatWidth) * 100 - 50) * 0.2);
  photo.style.boxShadow = `${x}px ${y}px 10px #6246ea`;
});
