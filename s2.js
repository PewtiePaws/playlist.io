const backbBtn = document.getElementById("backBtn");

backbBtn.addEventListener("click", () =>
{
  window.history.back();
}
)


const songList = [
  { src: './bb/song1.mp3', img: './bbb/song1.jpg', title: 'I juz wanna hide U' },
  { src: './bb/song2.mp3', img: './bbb/song2.jpg', title: 'No reason' },
  { src: './bb/song3.mp3', img: './bbb/song3.jpg', title: 'Empty' },
  { src: './bb/song4.mp3', img: './bbb/song4.jpg', title: 'Its You' },
  { src: './bb/song5.mp3', img: './bbb/song5.jpg', title: 'Distance' }
];

function playSong(songIndex) {
  const audioPlayer = document.getElementById("audioPlayer");
  const audioSource = document.getElementById("audioSource");
  const songImage = document.getElementById("songImage");
  const nowPlayingElement = document.getElementById("nowPlaying");

  audioSource.src = songList[songIndex].src;
  audioPlayer.load();
  audioPlayer.play();

  // Update now playing text
  nowPlayingElement.textContent = "Now Playing: " + songList[songIndex].title;
  
  // Update song image
  songImage.src = songList[songIndex].img;
}
