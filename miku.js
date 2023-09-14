const mikuView = document.getElementById('canvas');
mikuView.setAttribute('width', 640);
mikuView.setAttribute('height', 360);
const mikuCanvas = mikuView.getContext('2d');
const mikuImage = new Image();
let number = 1
let canvasX = 0
let canvasY = 0

//ロード完了後実行
window.onload = move
function move() {
  setInterval(flameChange, 66);
  function flameChange() {
  mikuCanvas.fillRect(0, 0, 640, 360);
  number = number + 1;
  if (number >= 11) {
    number = 1;
  }
  mikuImage.src = 'image/number_' + number + '.png';
  mikuCanvas.drawImage(mikuImage, canvasX, canvasY, 640, 360);
  }
}

//クリック中の処理
mikuView.onmousedown = moveOn;
function moveOn() {
  console.log('押し')
  setInterval(flameChangeOn, 66);
  function flameChangeOn() {
  let canvasY = canvasY + 50;
  }
}

//クリック解除後の処理
mikuView.onmouseup = moveOff;
function moveOff() {
  console.log('上げ');
  setInterval(flameChangeOff, 66);
  function flameChangeOff() {
  let canvasY = canvasY - 50;
  }
}

/*
・マウスが押された時アニメーション画面を変更する（キーボードやスマホのタッチに対応しても面白そう）
・画像が上がり下がりするようにする
・一千光年の画面の切り取り
・一千光年のアニメーション枚数確認、フレームレート確認
*/