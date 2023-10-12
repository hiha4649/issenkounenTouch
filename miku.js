let width = 640
let height = 360

const mikuView = document.getElementById('canvas');
mikuView.setAttribute('width', width);
mikuView.setAttribute('height', height);
const mikuCanvas = mikuView.getContext('2d');
const mikuImage = new Image();

//画像動作の値セット
let canvas ={
  X: 0,
  Y: 0,
  moveY: 5
}
//画面切り替えインターバル
let flameRate = 66

//画像切り替え処理
let number = 1
function flameChange() {
  console.log(canvas.Y); //確認
  mikuCanvas.clearRect(0, 0, width, height);
  mikuImage.src = 'image/number_' + number + '.png';
  mikuCanvas.drawImage(mikuImage, canvas.X, canvas.Y, 640, 360);
  number = number + 1;
  if (number >= 11) {
    number = 1;
  }
}

//ロード完了後実行
window.onload = move
function move() {
  mikuImage.onload = setInterval(flameChange, flameRate);
}
    //クリック中の処理
    mikuView.addEventListener('pointerdown', function() {
      console.log('押し');
      const onLoop = setInterval(flameChangeOn,flameRate);
    
      document.addEventListener('pointerup', function() {
      clearInterval(onLoop);
      console.log('押し終了');
      }, {once: true});
    })

    function flameChangeOn() {
      canvas.Y = canvas.Y + canvas.moveY;
      if (canvas.Y >= mikuView.height) {
        canvas.Y = mikuView.height
      }
    }

    //クリック解除後の処理
    document.addEventListener('pointerup', function() {
      console.log('上げ');
      const offLoop = setInterval(flameChangeOff, flameRate);

      mikuView.addEventListener('pointerdown', function() {
      clearInterval(offLoop);
      console.log('上げ終了');
      }, {once: true});
    })
    
    function flameChangeOff() {
        canvas.Y = canvas.Y - canvas.moveY;
        if (canvas.Y <= 0) {
          canvas.Y = 0
        }
      }
 
  

    //canvas外にカーソルが出た場合の処理
      



/*
・マウスが押された時アニメーション画面を変更する（キーボードやスマホのタッチに対応しても面白そう）
・Canvas外で右クリックした時加速するバグ
・一千光年の画面の切り取り
・一千光年のアニメーション枚数確認、フレームレート(15fps)
*/