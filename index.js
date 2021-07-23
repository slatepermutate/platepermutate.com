const images = [
  'https://i.imgur.com/9en0it9.jpg',
  'https://i.imgur.com/xtvFhVz.jpg',
  'https://i.imgur.com/6xHWJaX.jpg',
  'https://i.imgur.com/26VMISo.jpg',
  'https://i.imgur.com/wuCdxHn.jpg',
  'https://i.imgur.com/cDPHMm1.jpg',
];
let imageIndex = Date.now() % images.length;
document.body.style.backgroundSize = 'cover';
(function setBackground () {
  document.body.style.backgroundImage = `url('${images[imageIndex = (imageIndex + 1) % images.length]}')`;
  setTimeout(setBackground, 30000);
})();
