console.log("welcome to treble geet")
//Initialize the variables
let songIndex = 0;
//play the song
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogessbar = document.getElementById('myprogessbar');
 let gif = document.getElementById('gif');
// let songduration = document.getElementById('songduration');

let songItem = Array.from(document.getElementsByClassName('songItem'));




let songs = [
    { songName: "Kudi Nu Nachne De", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Raataan Lamiyan", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Daaru Desi (cocktail)", filePath: "songs/4.mp3", coverPath: "covers/3.jpg" },
    { songName: "Malhari (Bajirao Mastani)", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Hindustani (patriotic song)", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Let Me Like You", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Let Me Love You", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Janji-Heroes Tonight", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Senorita (remix)", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "you say you Love me", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },

]

songItem.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerHTML = songs[i].songName;
    
    
   
});

//handle play.pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();

        gif.style.opacity = "1"
        masterplay.classList.remove('fa-play-circle-o')
        masterplay.classList.add('fa-pause-circle-o');
    }
    else {
        audioElement.pause();
        gif.style.opacity = "0"
        masterplay.classList.remove('fa-pause-circle-o');
        masterplay.classList.add('fa-play-circle-o')

    }
})

//Listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(audioElement.currentTime)
    // console.log(audioElement.duration)
    // console.log(progress)

    //show the time at how much song is complete
 minlast=parseInt(audioElement.duration);
 minlast=parseInt(minlast/60);
     seclast=parseInt(audioElement.duration)%60;
 minfirst=parseInt(audioElement.currentTime);
 minfirst=parseInt(minfirst/60);
     secfirst=parseInt(audioElement.currentTime)%60;
      if(isNaN(minlast)){
          minlast=0;seclast=0;
      }
document.getElementById('songduration').innerText =`${minfirst}:${secfirst} / ${minlast}:${seclast}`;
    myprogessbar.value = progress;
})
myprogessbar.addEventListener('change', () => {
    audioElement.currentTime = (myprogessbar.value * audioElement.duration) / 100;
})

const makeAllplays = () => {
    let songitemplay = Array.from(document.getElementsByClassName('songitemplay'));
    songitemplay.forEach((e) => {
 e.classList.remove('fa-pause-circle-o')
 e.classList.add('fa-play-circle-o')
//  audioElement.pause();
    })
}
// play song from list
let songitemplay = Array.from(document.getElementsByClassName('songitemplay'));
songitemplay.forEach((e) => {
    e.addEventListener('click', (ele) => {
        // console.log(ele.target);
        makeAllplays();
     
     
        songIndex=parseInt(ele.target.id);
        ele.target.classList.remove('fa-play-circle-o')
        ele.target.classList.add('fa-pause-circle-o')
        audioElement.src= `songs/${songIndex+1}.mp3`;
        songtitle.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle-o')
        masterplay.classList.add('fa-pause-circle-o');
        gif.style.opacity = "1"
    

     
        })
     } )

document.getElementById('next').addEventListener('click',()=>{
    console.log("click next")
    if(songIndex>=9){
    songIndex=0;}
    else{
        songIndex+=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    songtitle.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle-o')
    masterplay.classList.add('fa-pause-circle-o');
    gif.style.opacity = "1"
})
document.getElementById('prev').addEventListener('click',()=>{
    console.log("click prev")
    if(songIndex<=0){
    songIndex=9;}
    else{
        songIndex-=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    songtitle.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle-o')
    masterplay.classList.add('fa-pause-circle-o');
    gif.style.opacity = "1"
})
// search html
let btn=document.getElementsByClassName('btn')
let forminput=document.getElementsByClassName('form-input')
let searchitem=forminput.innerText;
console.log(searchitem)
forminput.innerText="raju"