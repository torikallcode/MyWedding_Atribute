const rootElement = document.querySelector(":root")
let audioIcon = document.querySelector(".audio-icon")
let btnOpened = document.getElementById("btn-opened")
const song = document.getElementById("song")
let isPlaying = false
function disable(){
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function(){
        window.scrollTo(screenTop , screenLeft)
    }
    rootElement.style.scrollBehavior = "auto"  
}

function enable(){
    window.onscroll = function(){}
    rootElement.style.scrollBehavior = "smooth"
    audioIcon.classList.add("animate-spin")
    playAudio()
}
disable()

function playAudio(){
    // song.volume = 0.7
    audioIcon.classList.remove("hidden")
    song.play()
    isPlaying = true
}

let audioContainer = document.querySelector("#audio-container")
audioContainer.addEventListener("click" , function(){
    audioIcon.classList.toggle("animate-spin")
    if (isPlaying == true){
        song.pause()
    } else {
        song.play()
    }
    isPlaying = !isPlaying
})