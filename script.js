let songs = [];
let currentSong = 0;

async function playSongs() {
    const response = await fetch("./data/musics.json");
    songs = await response.json();    


    console.log(songs);

    loadMusic(songs[0]);
};



const music = document.getElementById("music");
const btnPause = document.getElementById("pause");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");

const containerBarra = document.querySelector(".container-barra");


const body = document.body;
const background = document.querySelector(".background");

const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const audioSource = document.getElementById("song");
const year = document.getElementById("year");
const story = document.getElementById("story");

function loadMusic(songData){

    cover.src = songData.cover;
    title.textContent = songData.title;
    artist.textContent = songData.artist;
    audioSource.src = songData.song;
    year.textContent = songData.year;
    story.textContent = songData.story;


    body.className = "";
    body.classList.add(songData.theme);
    background.style.backgroundImage = `url(${songData.background})`;

    music.load();
}

function nextMusic(){
    const isPlaying = !music.paused;
    currentSong++;

    if (currentSong >= songs.length){
        currentSong = 0;
    }

    loadMusic(songs[currentSong]);

    if (isPlaying){
        music.play();
    };
};

function prevMusic(){
    const isPlaying = !music.paused;
    currentSong --

    if (currentSong < 0){
        currentSong = songs.length - 1;
    }

    loadMusic(songs[currentSong]);

    if (isPlaying){
        music.play();
    };
}

btnPause.addEventListener("click", () => {
    if (music.paused){
        btnPause.innerHTML = "⏸";
        music.play();
        console.log("INICIOU");
        background.style.opacity = "0.35";
    } else{
        btnPause.innerHTML = "▶";
        music.pause();
             console.log("PAUSOU")
        background.style.opacity = "0";
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

playSongs();

btnNext.addEventListener("click", () => {
    nextMusic();
});

btnPrev.addEventListener("click", () => {
    prevMusic();
});

containerBarra.addEventListener("click", (e) => {
    const width = containerBarra.clientWidth;
    const clickX = e.offsetX;
    const duration = music.duration;

    music.currentTime = (clickX / width) * duration;
})