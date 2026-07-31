console.log("Player started");

const music = document.getElementById("music");
const btnPause = document.getElementById("pause");
let tocando = true;

btnPause.addEventListener("click", () => {
    if (tocando === false){
        btnPause.innerHTML = "Play";
        music.pause();
        tocando = true;
    } else{
        btnPause.innerHTML = "Pause";
        music.play();
        tocando = false;
    }
});