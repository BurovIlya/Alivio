const mobileNav = document.querySelector('.mobile-nav');

const mobileNavButton = document.querySelector('.mobile-nav-button');

const mobileNavIcon = mobileNavButton.firstElementChild;

mobileNavButton.addEventListener('click', function() {
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});


const videoBtn = document.getElementById('video-btn-1');
const videoFile = document.getElementById('video-1');
const videoIcon = videoBtn.firstElementChild;
const overlay = document.querySelector('.story-video-overlay');

videoBtn.addEventListener('click', function() {
    
    function toggleOverlay(event) {
        if ( event.type === 'mouseleave' ) {
            overlay.classList.add('hidden');
        } else {
            overlay.classList.remove('hidden');
        }
    }
    
    if ( videoFile.paused ) {
        videoFile.play();
        videoIcon.src = "./img/pause.svg";

        overlay.onmouseleave = toggleOverlay;
        overlay.onmouseenter = toggleOverlay;

    } else {
        videoFile.pause();
        videoIcon.src = "./img/play-white.svg";
        overlay.onmouseleave = null;
        overlay.onmouseenter = null;
    }
});