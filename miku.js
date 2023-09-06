//音量ボタンの制御
const volumeButton = document.getElementById('volume');
const music = document.getElementById('bgm')
volumeButton.onclick = function() {
  console.log('ボタン押したよ');
  if (music.muted = false) {
    music.muted = true;
  } else {
    music.muted = false;
  }
}