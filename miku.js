const mikuView = document.getElementById('canvas');
mikuView.setAttribute('width', 640);
mikuView.setAttribute('height', 360);
const mikuCanvas = mikuView.getContext('2d');
const mikuImage = new Image();
let number = 1
let canvas ={
  X: 0,
  Y: 0,
  moveY: 5
}
let flameRate = 66

//ロード完了後実行
window.onload = move
function move() {
  setInterval(flameChange, 66);
  
  //画像切り替え処理
  function flameChange() {
    console.log(canvas.Y); //確認
    mikuCanvas.fillRect(0, 0, 640, 360);
    number = number + 1;
    if (number >= 11) {
      number = 1;
    }

    mikuImage.src = 'image/number_' + number + '.png';
    mikuCanvas.drawImage(mikuImage, canvas.X, canvas.Y, 640, 360);

    //クリック中の処理
    mikuView.onmousedown = moveOn;
    function moveOn() {
      console.log('押し')

      function flameChangeOn() {
        canvas.Y = canvas.Y + canvas.moveY;
        if (canvas.Y >= mikuView.height) {
          canvas.Y = mikuView.height
          clearInterval(onLoop);
        }
      }
        const onLoop = setInterval(flameChangeOn,flameRate);
    }


    //canvas外にカーソルが出た場合の処理
      
    //クリック解除後の処理
    mikuView.onmouseup = moveOff;
    function moveOff() {
      console.log('上げ');

      function flameChangeOff() {
        canvas.Y = canvas.Y - canvas.moveY;
        if (canvas.Y <= 0) {
          canvas.Y = 0
          clearInterval(offLoop);
        }
      }
      const offLoop = setInterval(flameChangeOff, flameRate);
    }
  }
}


/*
・マウスが押された時アニメーション画面を変更する（キーボードやスマホのタッチに対応しても面白そう）
・画像が上がり下がりするようにする
・一千光年の画面の切り取り
・一千光年のアニメーション枚数確認、フレームレート確認
*/