const playBtn = document.querySelector('.fa-regular');
const video = document.querySelector('video');

const videoContainer = document.querySelector('.video-container');

playBtn.addEventListener("click", function() {
   
    video.style.visibility = "visible";
    video.play();
    playBtn.style.visibility = "hidden";
    video.style.zIndex = "1";


    
});

videoContainer.addEventListener('click', function() { 
    video.pause();
    playBtn.style.visibility = "visible";
    video.style.zIndex ="-1";
    
})


    
