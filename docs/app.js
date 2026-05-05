document.addEventListener("DOMContentLoaded", () => {
    
    // FEATURE 1: Play and STRICTLY SYNC videos on hover
    const sections = document.querySelectorAll('.video-section');
    
    sections.forEach(section => {
        const videosInSection = section.querySelectorAll('video');
        
        section.addEventListener('mouseenter', () => {
            videosInSection.forEach(video => {
                // Force all videos to start at the exact same frame to prevent drifting
                video.currentTime = 0; 
                video.play().catch(error => console.log("Video play interrupted:", error));
            });
        });

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

        container.addEventListener('mouseenter', () => {
            hoverVid.currentTime = baseVid.currentTime;
        });

        container.addEventListener('mouseleave', () => {
            baseVid.currentTime = hoverVid.currentTime;
        });
    });
});