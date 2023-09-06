const mikuView = document.getElementById('canvas');
const mikuCanvas = mikuView.getContext('2d');
const mikuImage = new Image();
mikuImage.src = 'image/number_1.png';
mikuImage.onload = function() {
  mikuCanvas.drawImage(mikuImage, 0, 0);
}

const anime = {
  counter: 0, //フレーム記録
  image: {},//画像データ
}

function init() {
  anime.counter = 0;
}

function ticker() {
  // 画面クリア
  mikuCanvas.clearRect(0, 0, canvas.width, canvas.height);
  //ミクの移動
  moveMiku();
  //ミクの描画
  drawMiku();
  // カウンタの更新
  anime.counter = (anime.counter + 1) % 1000000;
}

function createMiku() {
  anime.miku = {
    x: anime.image.miku.width / 2,
    y: canvas.height - anime.image.miku.height / 2,
    moveY: 0,
    width: anime.image.miku.width,
    height: anime.image.miku.height,
    image: anime.image.miku
  }
}

console.log(anime.miku)//あとで消す

document.onkeydown = function(e) {
  if(e.key === ' ') {
      anime.miku.moveY = -41;
  }
};

function moveMiku() {
  anime.miku.y += anime.miku.moveY;
  if (anime.miku.y >= canvas.height - anime.miku.height / 2) {
      anime.miku.y = canvas.height - anime.miku.height / 2;
      anime.miku.moveY = 0;
  } else {
      anime.miku.moveY += 3;
  }
}
  
