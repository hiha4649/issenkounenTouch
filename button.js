//音量ボタンの制御
const volumeButton = document.getElementById('volume');
const music = document.getElementById('bgm')
volumeButton.onclick = function() {
  console.log('ボタン押したよ');
  if (music.muted) {
    music.muted = true;
    volumeButton.setAttribute('class', 'volume-off')
  } else {
    music.muted = false;
    volumeButton.setAttribute('class', 'volume-on')
  }
}