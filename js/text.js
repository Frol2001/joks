function toggle(){
    var trailler = document.querySelector('.watch-trailler');
    var video = document.querySelector('video');
    trailler.classList.toggle('active');
    video.currentTime = 1;
    video.play();


 }