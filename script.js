// Ensure modals are hidden on page load
document.addEventListener('DOMContentLoaded', () => {
    const fullscreenModal = document.getElementById('fullscreenModal');
    const casesModal = document.getElementById('casesModal');
    const videosModal = document.getElementById('videosModal');

    fullscreenModal.style.display = 'none'; // Explicitly hide full-screen modal
    casesModal.style.display = 'none'; // Explicitly hide cases modal
    videosModal.style.display = 'none'; // Explicitly hide videos modal
});

// Function to handle button clicks
function handleButtonClick(action) {
    switch (action) {
        case 'cases':
            // Delay opening the modal until after the neon effect
            const neonEffectDuration = 600; // Matches the CSS transition duration in milliseconds
            setTimeout(() => {
                openCasesModal(); // Open the modal after the effect
            }, neonEffectDuration);
            break;
        case 'videos':
            openVideosModal(); // Open videos modal
            break;
        case 'mentorship':
            console.log("Mentorship button clicked!");
            // Add code to handle mentorship button click
            break;
        case 'texts':
            console.log("Texts button clicked!");
            // Add code to handle texts button click
            break;
        default:
            console.log('Unknown action: ' + action);
    }
}

// Function to open the cases gallery modal
function openCasesModal() {
    const modal = document.getElementById('casesModal');
    modal.style.display = "block";

    // Array of image paths
    const images = [
        "images/cases/case_1.jpg",
        "images/cases/case_2.jpg",
        "images/cases/case_3.jpg",
        "images/cases/case_4.jpg",
        "images/cases/case_6.jpg",
        "images/cases/case_7.jpg",
        "images/cases/case_8.jpg",
        "images/cases/case_9.jpg",
        "images/cases/case_10.jpg",
        "images/cases/case_11.jpg",
        "images/cases/case_12.jpg",
        "images/cases/case_13.jpg"
    ];

    // Clear previous gallery content
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = "";

    // Dynamically add images to the gallery
    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.classList.add("gallery-image");
        imgElement.onclick = () => openFullscreenModal(image); // Add click event for full-screen
        gallery.appendChild(imgElement);
    });
}

// Function to open the videos modal
function openVideosModal() {
    const modal = document.getElementById('videosModal');
    modal.style.display = "block";

    // Array of video paths
    const videos = [
        "videos/video_1.mp4",
        "videos/video_2.mp4",
        "videos/video_3.mp4"
    ];

    // Clear previous gallery content
    const gallery = document.getElementById('videosGallery');
    gallery.innerHTML = "";

    // Dynamically add videos to the gallery
    videos.forEach(video => {
        const videoElement = document.createElement("video");
        videoElement.src = video;
        videoElement.controls = true; // Add video controls
        videoElement.classList.add("gallery-video"); // Optional styling class
        gallery.appendChild(videoElement);
    });
}

// Function to close modals
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
}

// Function to open the full-screen image modal
function openFullscreenModal(imageSrc) {
    if (!imageSrc) {
        console.error('openFullscreenModal called without a valid imageSrc'); // Debugging error
        return; // Prevent the modal from opening
    }
    const fullscreenModal = document.getElementById('fullscreenModal');
    const fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.src = imageSrc; // Set the selected image as full-screen image
    fullscreenModal.style.display = "flex"; // Use flex to center the modal content
}

// Function to close the full-screen image modal
function closeFullscreenModal() {
    const fullscreenModal = document.getElementById('fullscreenModal');
    fullscreenModal.style.display = "none";
}
