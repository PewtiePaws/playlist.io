const backbBtn = document.getElementById("backBtn");

backbBtn.addEventListener("click", () =>
{
  window.history.back();
}
)

const songList = [
    { src: './aa/audio1.mp3', img: './aaa/audio1.jpg', title: 'Everyday' },
    { src: './aa/audio2.mp3', img: './aaa/audio2.jpg', title: 'Style' },
    { src: './aa/audio3.mp3', img: './aaa/audio3.jpg', title: 'Call you Mine' },
    { src: './aa/audio4.mp3', img: './aaa/audio4.jpg', title: 'To the bone' },
    { src: './aa/audio5.mp3', img: './aaa/audio5.jpg', title: 'Landside' }
  ];
  
  function playSong(songIndex) {
    const audioPlayer = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");
    const songImage1 = document.getElementById("songImage1");
    const nowPlayingElement = document.getElementById("nowPlaying");
  
    audioSource.src = songList[songIndex].src;
    audioPlayer.load();
    audioPlayer.play();
  
    // Update now playing text
    nowPlayingElement.textContent = "Now Playing: " + songList[songIndex].title;
    
    // Update song image
    songImage1.src = songList[songIndex].img;
  }
  