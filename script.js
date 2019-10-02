const images = [
  "/assets/screenshots/1.png",
  "/assets/screenshots/2.png",
  "/assets/screenshots/3.png",
  "/assets/screenshots/3.png"
];

let i = 0;
setInterval(() => {
  i = (i + 1) % images.length;
  document.querySelector('.demo img').src = images[i];
}, 2000);


function preload() {
  for (let i = 0; i < images.length; i++) {
    let img = new Image(500, 500);
    img.src = images[i];
  }
}

preload();
