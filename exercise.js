// exercise-profiles.js

// Function to retrieve the selected profile from local storage
function getSelectedProfile() {
    return localStorage.getItem('selectedProfile');
}

// ASCII art functions (unchanged)

function displaySelectedProfile() {
    // Get the selected profile value
    var selectedProfile = getSelectedProfile();

    if (selectedProfile) {
        // Show the selected profile's ASCII art in the upper right corner
        var selectedAscii = document.getElementById("selectedAscii");
        selectedAscii.textContent = getProfileAscii(selectedProfile);
    } else {
        // If no profile is selected, you can handle this case accordingly
        console.log("No profile selected");
    }
}

// Initial display when the page loads
displaySelectedProfile();
