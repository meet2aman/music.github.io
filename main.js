gsap.from('.image',{duration:1 , opacity:0, ease:'power2.out', x:100,});

gsap.from('.logo', { duration: 2, ease: "power2.out", x:-500, opacity:0,});

gsap.from('.aman', { duration: 2, ease: "power2.out", x:-500, opacity:0,});






var myAudio = document.getElementById("audio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? audio.pause() : audio.play();
};

audio.onplaying = function() {
  isPlaying = true;
};
audio.onpause = function() {
  isPlaying = false;
};



// var audio = document.getElementById('audio');
// var playPauseBTN = document.getElementById('playPauseBTN');

// var count = 0;

// function playPause(){
//     if(count == 0){
//         count = 1;
//         audio.play();
//         playPauseBTN.innerHTML = "";
//     }
//     else{
//         count = 0;
//         audio.pause();
//         playPauseBTN.innerHTML = "&#9208;";
//     }
// }