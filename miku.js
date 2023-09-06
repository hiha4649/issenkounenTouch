const mikuView = document.getElementById('canvas');
const mikuCanvas = mikuView.getContext('2d');
const mikuImage = new Image();
let number = 1
//アニメーション処理
function flameChange() {
  mikuCanvas.fillStyle = '#FFFFFF'
  mikuCanvas.fillRect(0, 0, 640, 360);
  number = number + 1;
  if (number >= 9) {
    number = 1;
  }
  mikuImage.src = 'image/number_' + number + '.png';
  mikuImage.onload = function() {
    mikuCanvas.drawImage(mikuImage, 0, 0);
  }
}
setInterval(flameChange, 1000);

