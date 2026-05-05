document.addEventListener("DOMContentLoaded", () => {
    
    // FEATURE 1: Play videos only when the mouse enters their specific section
    const sections = document.querySelectorAll('.video-section');
    
    sections.forEach(section => {
        const videosInSection = section.querySelectorAll('video');
        
        // Play all videos in this section when hovered
        section.addEventListener('mouseenter', () => {
            videosInSection.forEach(video => {
                // The catch prevents console errors if play() is interrupted
                video.play().catch(error => console.log("Video play interrupted:", error));
            });
        });

        // Pause all videos in this section when the mouse leaves
        section.addEventListener('mouseleave', () => {
            videosInSection.forEach(video => {
                video.pause();
            });
        });
    });

    // FEATURE 2: Synchronize timestamps for the hover-switch videos
    const switchContainers = document.querySelectorAll('.hover-switch-container');
    
    switchContainers.forEach(container => {
        const baseVid = container.querySelector('.base-vid');
        const hoverVid = container.querySelector('.hover-vid');

        // When mouse enters the video block, sync Video 2 to Video 1's current time
        container.addEventListener('mouseenter', () => {
            hoverVid.currentTime = baseVid.currentTime;
        });

        // When mouse leaves the video block, sync Video 1 back to Video 2's current time
        container.addEventListener('mouseleave', () => {
            baseVid.currentTime = hoverVid.currentTime;
        });
    });

});