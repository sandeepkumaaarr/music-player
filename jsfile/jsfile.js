let music = document.querySelector("audio");
let play = document.getElementById("play");
let prev = document.getElementById("prev");
let forw = document.getElementById("forw");
let title = document.getElementById("title");
let rotate = document.getElementById("rotate");
let progress = document.getElementById("progress");
let duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");
const progress_div = document.getElementById("progress_div");
console.dir(title);
console.log(window)
// console.log(play);
// console.log(forw);
console.dir(music);
let artist = document.getElementById("artist");



let isPlay = false;
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

    },
    {
        title1:"menang",
        artist1  : "chinese",
        name :"music-3.mp3"
    }
];

function loadSong(songs){
    console.log("hello");
    title.textContent = songs.title1;
    artist.textContent = songs.artist1; 
    // console.log(title);
    music.src =  "Music/"+songs.name;
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

function format(time) {   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}



// console.log(title);
music.addEventListener("timeupdate" ,function(event){
//    console.log(event);
   const {currentTime,duration} = event.srcElement;
//    let currenttime = parseInt((currentTime%3600)/60);
//    let totalduration = parseInt(duration);

//    console.log(currentTime);
  

//    duration.textContent = currenttime;
//    current_time.textContent = totalduration;
   document.getElementById("current_time").innerHTML = format(currentTime);
   document.getElementById("duration").innerHTML = format(duration);
    let progress_width = (currentTime/duration)*100;
    progress.style.width = `${progress_width}%`;
});

music.addEventListener("ended",()=>{
    nxt = (nxt + 1) % songs.length; 
    loadSong(songs[nxt]);
    playMusic();
});

progress_div.addEventListener("click",(event)=>{
    console.log(event);
    // const {clientWidth} = event.srcElement;
    // console.log(clientWidth);
    // const {offsetX} = event;
    // console.log(offsetX);
    const {currentTime,duration} =music;
    let widthper = (event.offsetX/event.srcElement.clientWidth)*duration;
    console.log(widthper);
    progress.style.width = widthper+"%";
    music.currentTime = widthper;
});