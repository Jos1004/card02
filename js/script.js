const video = document.getElementById('video');
const playButton = document.getElementById('play');

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.style.display = 'none'; // esconde o botão quando o vídeo toca
    } else {
        video.pause();
        playButton.style.display = 'block';
    }
});

// Opcional: mostrar o botão quando o vídeo pausa
video.addEventListener('pause', () => {
    playButton.style.display = 'block';
});

// Opcional: esconder o botão quando o vídeo toca
video.addEventListener('play', () => {
    playButton.style.display = 'none';
});

video.disablePictureInPicture = true;