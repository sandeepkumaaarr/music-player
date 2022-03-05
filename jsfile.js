let music = document.querySelector("audio");
let play = document.getElementById("play");
let prev = document.getElementById("prev");
let forw = document.getElementById("forw");
let title = document.getElementById("title");
let rotate = document.getElementById("rotate");
console.log(title);
// console.log(play);
// console.log(forw);
console.log(music);
let artist = document.getElementById("artist");



let isPlay = true;
play.addEventListener("click" , ()  => {
    if(isPlay){
        pauseMusic();
    }
    else{
        playMusic();
    }
    // img.classList.add("anime");
});
function pauseMusic(){
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    rotate.classList.remove("rotate");

    isPlay = false;
}
function playMusic(){
    music.play();
    play.classList.replace("fa-play","fa-pause");
    rotate.classList.add("rotate");
    isPlay = true;
}

console.log("hello-1");
let songs = [
    {
        title1 : "Dola ni aaya",
        artist1 : "B prake",
        name :"music-1.mp3"
    },
    {
        title1 : "Raaste se tha",
        artist1 : "Arijit Singh",
        name :"music-2.mp3"

    }
];

function loadSong(songs){
    console.log("hello");
    title.textContent = songs.title1;
    artist.textContent = songs.artist1; 
    // console.log(title);
    music.src =  songs.name;
    music.textContent = songs.name;
}
// console.log(title);
    
// loadSong(songs[1]);
let nxt= 0; 
forw.addEventListener("click" , ()  => {
    console.log("Hello in forw");
    nxt = (nxt + 1) % songs.length; 
    loadSong(songs[nxt]);
    playMusic();
    //console.log(title);
    //music.pause();
});
prev.addEventListener("click" , ()  => {
    console.log("Hello in prev");
    nxt = (nxt - 1 + songs.length) % songs.length; 
    loadSong(songs[nxt]);
    playMusic();
    //console.log(title);
    //music.pause();
});

// console.log(title);
