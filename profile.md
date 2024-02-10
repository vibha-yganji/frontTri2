---
layout: base
title: profile
permalink: /profile/
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Add some styling to the navbar */
        #navbar {
            background-color: #333;
            color: white;
            padding: 10px;
            text-align: center;
        }

        #profileImage {
            max-width: 50px; /* Adjust the size of the profile image as needed */
            height: auto;
            margin-top: 10px;
        }

        #profileAscii {
            font-family: monospace;
            white-space: pre;
            margin-top: 10px;
        }

        .profileOption {
            font-family: monospace;
            white-space: pre;
            display: none;
            margin-top: 10px;
        }
    </style>
    <title>Exercise Profiles</title>
</head>
<body>
    <div id="navbar">
        <h2>Exercise Profiles</h2>
        <label for="profileSelect">Select Profile:</label>
        <select id="profileSelect" onchange="updateProfile()">
            <option value="profile1">Profile 1</option>
            <option value="profile2">Profile 2</option>
            <option value="profile3">Profile 3</option>
            <option value="profile4">Profile 4</option>
            <option value="profile5">Profile 5</option>
        </select>
        <img id="profileImage" src="" alt="Profile Image">
        <div id="profileAscii"></div>
    </div>
    <div>
        <h3>All Options:</h3>    
          <div class="profileOption" >
            ________
            |      |
            |      O
            |     /|\\
            |     / \\
            |_________
        </div>
        <div class="profileOption">
            \\    O
             \\   |\\
              \\  / \\
               \\/___\\
        </div>
        <div class="profileOption">
            __
            ( o>
            /)__)
            - \\ \\
               / /
        </div>
        <div class="profileOption" >
            +----+
            |o o |
            | \\  |
            |  | |  
            +-----+
        </div>
        <div class="profileOption">
            \\_o< 
            | \\ 
            <_/ 
        </div>
   </div>
    </div>
    <script>
        function updateProfile() {
            // Get the selected profile value
            var selectedProfile = document.getElementById("profileSelect").value;
            // Show the selected profile's ASCII art
            document.getElementById("profileAscii").textContent = getProfileAscii(selectedProfile);
            // Hide the selected profile's option
            var allOptions = document.getElementsByClassName("profileOption");
            for (var i = 0; i < allOptions.length; i++) {
                allOptions[i].style.display = "none";
            }
            // Show all options
            document.getElementById(selectedProfile).style.display = "block";
            // Set the profile image based on the selected profile
            var profileImage = document.getElementById("profileImage");
            profileImage.src = getProfileImage(selectedProfile);
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
                    \\_o< 
                    | \\ 
                    <_/ 
                    `;
                default:
                    return ""; // Set a default ASCII art or leave it empty
            }
        }
        // Profile image function
        function getProfileImage(profile) {
            switch (profile) {
                case "profile1":
                    return "path_to_profile1_image.jpg"; // Replace with the actual path to your profile image
                case "profile2":
                    return "path_to_profile2_image.jpg";
                case "profile3":
                    return "path_to_profile3_image.jpg";
                case "profile4":
                    return "path_to_profile4_image.jpg";
                case "profile5":
                    return "path_to_profile5_image.jpg";
                default:
                    return ""; // Set a default image or leave it empty
            }
        }

        // Initial update when the page loads
        updateProfile();
    </script>
</body>
</html>
