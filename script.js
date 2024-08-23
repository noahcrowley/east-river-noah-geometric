document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');

    video.addEventListener('mouseover', function() {
        video.play();
    });

    video.addEventListener('mouseout', function() {
        video.pause();
    });
});
