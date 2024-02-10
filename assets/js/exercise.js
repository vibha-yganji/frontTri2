// exercise-profiles.js

// Function to retrieve the selected profile from local storage
// exercise-profiles.js

// Function to retrieve the selected profile from local storage
function getSelectedProfile() {
    return localStorage.getItem('selectedProfile');
}

// ASCII art functions (unchanged)
function getProfileAscii(profile) {
            switch (profile) {
                case "profile1":
                    return `
                    ________
                    |      |
                    |      O
                    |     /|\\
                    |     / \\
                    |_________
                    `;
                case "profile2":
                    return `
                    \\    O
                     \\   |\\
                      \\  / \\
                       \\/___\\
                    `;
                case "profile3":
                    return `
                    __
                    ( o>
                    /)__)
                    - \\ \\
                       / /
                    `;
                case "profile4":
                    return `
                    +----+
                    |o o |
                    | \\  |
                    |  | |  
                    +-----+
                    `;
                case "profile5":
                    return `
                    \\_o< 
                    | \\ 
                    <_/ 
                    `;
                default:
                    return ""; // Set a default ASCII art or leave it empty
            }
        }


function displaySelectedProfile() {
    // Get the selected profile value
    var selectedProfile = getSelectedProfile();

    // Show the selected profile's ASCII art in the upper right corner
    var selectedAscii = document.getElementById("selectedAscii");
    selectedAscii.textContent = getProfileAscii(selectedProfile);
}

// Initial display when the page loads
displaySelectedProfile();

   
// Function to retrieve the selected profile from local storage
function getSelectedProfile() {
    var storedProfile = localStorage.getItem('selectedProfile');
    console.log(storedProfile);
    return localStorage.getItem('selectedProfile');
}

// Function to set a default profile in local storage


// ASCII art functions (unchanged)
function getProfileAscii(profile) {
            switch (profile) {
                case "profile1":
                    return `
                    ________
                    |      |
                    |      O
                    |     /|\\
                    |     / \\
                    |_________
                    `;
                case "profile2":
                    return `
                    \\    O
                     \\   |\\
                      \\  / \\
                       \\/___\\
                    `;
                case "profile3":
                    return `
                    __
                    ( o>
                    /)__)
                    - \\ \\
                       / /
                    `;
                case "profile4":
                    return `
                    +----+
                    |o o |
                    | \\  |
                    |  | |  
                    +-----+
                    `;
                case "profile5":
                    return `
                    \\_o< 
                    | \\ 
                    <_/ 
                    `;
                default:
                    return ""; // Set a default ASCII art or leave it empty
            }
        }


function displaySelectedProfile() {
    // Set a default profile if none is selected
    setDefaultProfile();

    // Get the selected profile value
    var selectedProfile = getSelectedProfile();

    // Show the selected profile's ASCII art in the upper right corner
    var selectedAscii = document.getElementById("selectedAscii");
    selectedAscii.textContent = getProfileAscii(selectedProfile);
}

// Initial display when the page loads
        displaySelectedProfile();

