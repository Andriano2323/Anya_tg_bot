
// Ensure modal is hidden on page load
document.addEventListener('DOMContentLoaded', () => {
    const fullscreenModal = document.getElementById('fullscreenModal');
    fullscreenModal.style.display = 'none'; // Explicitly hide the modal
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
            console.log("Videos button clicked!");
            // Add code to handle 'videos' button click here
            break;
        case 'mentorship':
            console.log("Mentorship button clicked!");
            // Add code to handle 'mentorship' button click here
            break;
        case 'texts':
            console.log("Texts button clicked!");
            // Add code to handle 'texts' button click here
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

// Function to close the cases gallery modal
function closeModal() {
    const modal = document.getElementById('casesModal');
    modal.style.display = "none";
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
