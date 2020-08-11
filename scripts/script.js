let avatarObj = {
  photo: document.querySelector("img"),
  get height() {
    return parseFloat(window.getComputedStyle(this.photo).height);
  },
  get width() {
    return parseFloat(window.getComputedStyle(this.photo).width);
  },
};

document.querySelector("img").addEventListener("mousemove", event => {
  let y = -(((event.offsetY / avatarObj.height) * 100 - 50) * 0.2);
  let x = -(((event.offsetX / avatarObj.width) * 100 - 50) * 0.2);
  avatarObj.photo.style.boxShadow = `${x}px ${y}px 10px #6246ea`;
});
