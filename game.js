import './js/libs/weapp-adapter'
// require('./js/libs/weapp-adapter')
import './js/libs/symbol'

const LOGO_IMG_SRC = 'images/logo.png';
const TEXT_IMG_SRC = 'images/text1.png';
const TITLE_IMG_SRC ='images/title.png';

let context = canvas.getContext('2d');

context.fillStyle = 'yellow'
context.fillRect(0, 0, canvas.width, canvas.height)

let logo_image = new Image();
logo_image.onload = function () {
  context.drawImage(logo_image, 0, 50)
}
logo_image.src = LOGO_IMG_SRC;

let text_image = new Image();
text_image.onload = function () {
  context.drawImage(text_image, 80, 235)
}
text_image.src = TEXT_IMG_SRC;

let title_image = new Image();
title_image.onload = function () {
  context.drawImage(title_image, 390, 50)
}
title_image.src = TITLE_IMG_SRC;


