const music = document.getElementById("music");
const btnPause = document.getElementById("pause");
const background = document.querySelector(".background");

let tocando = true;

btnPause.addEventListener("click", () => {
    if (tocando === false){
        btnPause.innerHTML = "▶";
        music.pause();
        tocando = true;
        background.style.opacity = "0";
    } else{
        btnPause.innerHTML = "⏸";
        music.play();
        tocando = false;
        background.style.opacity = "0.55";
    }
});

const barraProgress = document.getElementById("barra-prog");

music.addEventListener("timeupdate", () =>{
    const percent = 
    (music.currentTime / music.duration) * 100;

    barraProgress.style.width = `${percent}%`; 
});

const volume = document.getElementById("volume");

volume.addEventListener("input", () =>{
    music.volume = volume.value;
});
