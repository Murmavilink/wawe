export const audio = () => {
    const headerPlay = document.querySelector('.header__play');

    const audio = new Audio('audio/waves.mp3');

    headerPlay.addEventListener('click', () => {
        if(audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

};