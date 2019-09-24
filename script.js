

let i = 0;
setInterval(() => {
  i = ((i ) % 4) + 1
  console.log(i, document.querySelector(`.demo :nth-child(${i})`))
  document.querySelector(`.demo .show`).classList.remove('show')
  document.querySelector(`.demo :nth-child(${i})`).classList.add('show')

  // document.querySelector(`.demo`).appendChild(images[i])
}, 2000)


    // var img=new Image();

  // var images = [];
  // function preload() {
  //     for (var i = 0; i < arguments.length; i++) {
  //         images[i] = new Image(500, 500);
  //         images[i].src = preload.arguments[i];
  //     }
  // }
  //
  // preload([
  //   "/assets/screenshots/2.png",
  //   "/assets/screenshots/3.png",
  //   "/assets/screenshots/4.png"
  // ])
