---
layout: base
title: profile
permalink: /profile/
---
<html>
    <div class="purple-form">
        <h2>Exercise Profiles</h2>
        <label for="profileSelect">Select Profile:</label>
        <select id="profileSelect" onchange="updateSelectedProfile()">
    <option value="profile1">Profile 1</option>
    <option value="profile2">Profile 2</option>
    <option value="profile3">Profile 3</option>
    <option value="profile4">Profile 4</option>
    <option value="profile5">Profile 5</option>

    
</select>
    </div>
    <div class="profileOption" id="profile1">
        ________
        |      |
        |      O
        |     /|\\
        |     / \\
        |_________
    </div>
    <div class="profileOption" id="profile2">
        \\    O
         \\   |\\
          \\  / \\
           \\/___\\
    </div>
    <div class="profileOption" id="profile3">
        __
        ( o>
        /)__)
        - \\ \\
           / /
    </div>
    <div class="profileOption" id="profile4">
        +----+
        |o o |
        | \\  |
        |  | |  
        +-----+
    </div>
    <div class="profileOption" id="profile5">
             (\__/)
              (UwU)
           ＿ノ ヽ ノ＼＿ 
         /　`/ ⌒Ｙ⌒ Ｙ　 \
       | 　(三ヽ人　 /　 　|
        |　ﾉ⌒＼ ￣￣ヽ　 ノ
         ヽ＿＿＿＞､＿＿／
            ｜( 王 ﾉ〈 
            /ﾐ`ー―彡\ 
           |╰      ╯| 
           |   /\   |  
           |  |  |  |
           |  |  |  |
    </div>
    <div id="selectedAscii"></div>
    <div class="purple-form">
        <label for="newName">New Name:</label>
        <input type="text" id="newName" name="newName" required>
        <button type="button" onclick="updateName()">Update Name</button>
    <hr>
    <div id="result"></div>
     <form class = 'purple-form'>
    <h2>Profile Picture</h2>
    <div id="profilePicture" class="profilePictureContainer"></div>
    <h2> General Information </h2>
     <div id="userDetails"></div>
    </form>
    <script src="https://jplip.github.io/frontTri2/assets/js/name.js" defer></script>
    <script>
       // Initial update when the page loads
function updateProfile() {
    // Get the selected profile value
    var selectedProfile = getSelectedProfile();
    // Show the selected profile's ASCII art in the upper right corner
    var selectedAscii = document.getElementById("selectedAscii");
    selectedAscii.textContent = getProfileAscii(selectedProfile);
    // Hide all profile options
    var allOptions = document.getElementsByClassName("profileOption");
    for (var i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = "none";
    }
    // Show the selected profile's option
    var selectedOption = document.getElementById(selectedProfile);
    selectedOption.style.display = "block";
}
// ASCII art functions
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
              (\__/)
              (UwU)
           ＿ノ ヽ ノ＼＿ 
         /　`/ ⌒Ｙ⌒ Ｙ　 \
       | 　(三ヽ人　 /　 　|
        |　ﾉ⌒＼ ￣￣ヽ　 ノ
         ヽ＿＿＿＞､＿＿／
            ｜( 王 ﾉ〈 
            /ﾐ`ー―彡\ 
           |╰      ╯| 
           |   /\   |  
           |  |  |  |
           |  |  |  |
            `;
        default:
            return ""; // Set a default ASCII art or leave it empty
    }
}
// Function to update and store the selected profile
function updateSelectedProfile() {
    // Get the selected profile value from the select element
    var selectedProfile = document.getElementById("profileSelect").value;
    // Update and store the selected profile in local storage
    localStorage.setItem('selectedProfile', selectedProfile);
    // Update the profile immediately after setting it
    updateProfile();
}

// Function to retrieve the selected profile from local storage
function getSelectedProfile() {
    var storedProfile = localStorage.getItem('selectedProfile');
    return storedProfile || 'profile1'; // Default to 'profile1' if not found
}

// Initial update when the page loads
updateProfile();

// Function to generate HTML img tag with the selected profile's ASCII art
        function getProfileImage(profile) {
            var asciiArt = getProfileAscii(profile);
            return '<pre>' + asciiArt + '</pre>'; // Display ASCII art directly
        }
        // Function to update the profile picture
        function updateProfilePicture() {
            var selectedProfile = getSelectedProfile();
            var profilePictureDiv = document.getElementById("profilePicture");
            profilePictureDiv.innerHTML = getProfileImage(selectedProfile);
        }
        // Initial update when the page loads
        updateProfilePicture();
        // Functions for retrieving and updating the selected profile
        function getSelectedProfile() {
            var storedProfile = localStorage.getItem('selectedProfile');
            return storedProfile || 'profile1'; // Default to 'profile1' if not found
        }
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
         // Retrieve user information from localStorage
        const loggedInUserName = localStorage.getItem('loggedInUserName');
        const loggedInUserId = localStorage.getItem('loggedInUserId');
        // Display user information
        if (loggedInUserName) {
            document.getElementById('userDetails').textContent = ` Username: ${loggedInUserName} (ID: ${loggedInUserId})`;
        } else {
            document.getElementById('userDetails').textContent = "Not logged in.";
        }

    </script>



