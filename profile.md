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
        #profileAscii {
            font-family: monospace;
            white-space: pre;
            margin-top: 10px;
        }

        .profileOption {
            display: none;
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
        <div id="profileAscii"></div>
    </div>

    <div>
        <h3>All Options:</h3>
        <div class="profileOption" id="profile1">
            <pre>
            ________
            |      |
            |      O
            |     /|\\
            |     / \\
            |_________
            </pre>
        </div>
        <div class="profileOption" id="profile2">
            <pre>
            \\    O
             \\   |\\
              \\  / \\
               \\/___\\
            </pre>
        </div>
        <div class="profileOption" id="profile3">
            <pre>
            __
            ( o>
            /)__)
            - \\ \\
               / /
            </pre>
        </div>
        <div class="profileOption" id="profile4">
            <pre>
            +----+
            |o o |
            | \\  |
            |  | |  
            +-----+
            </pre>
        </div>
        <div class="profileOption" id="profile5">
            <pre>
            \\_o< 
            | \\ 
            <_/ 
            </pre>
        </div>
    </div>

    <script>
        function updateProfile() {
            // Get the selected profile value
            var selectedProfile = document.getElementById("profileSelect").value;

            // Show the selected profile's ASCII art
            document.getElementById("profileAscii").textContent = getProfileAscii(selectedProfile);

            // Hide all other options
            var allOptions = document.getElementsByClassName("profileOption");
            for (var i = 0; i < allOptions.length; i++) {
                allOptions[i].style.display = "none";
            }

            // Show the selected profile's option
            document.getElementById(selectedProfile).style.display = "block";
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

        // Initial update when the page loads
        updateProfile();
    </script>

</body>
</html>
