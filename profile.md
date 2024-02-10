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

    <script>
        function updateProfile() {
            // Get the selected profile value
            var selectedProfile = document.getElementById("profileSelect").value;

            // Get the element to display ASCII art
            var profileAscii = document.getElementById("profileAscii");

            // Set the ASCII art based on the selected profile
            switch (selectedProfile) {
                case "profile1":
                    profileAscii.textContent = getProfile1Ascii();
                    break;
                case "profile2":
                    profileAscii.textContent = getProfile2Ascii();
                    break;
                case "profile3":
                    profileAscii.textContent = getProfile3Ascii();
                    break;
                case "profile4":
                    profileAscii.textContent = getProfile4Ascii();
                    break;
                case "profile5":
                    profileAscii.textContent = getProfile5Ascii();
                    break;
                default:
                    profileAscii.textContent = ""; // Set a default ASCII art or leave it empty
            }
        }

        // ASCII art functions
        function getProfile1Ascii() {
            return `
            ________
            |      |
            |      O
            |     /|\\
            |     / \\
            |_________
            `;
        }

        function getProfile2Ascii() {
            return `
            \\    O
             \\   |\\
              \\  / \\
               \\/___\\
            `;
        }

        function getProfile3Ascii() {
            return `
            __
            ( o>
            /)__)
            - \\ \\
               / /
            `;
        }

        function getProfile4Ascii() {
            return `
            +----+
            |o o |
            | \\  |
            |  | |  
            +-----+
            `;
        }

        function getProfile5Ascii() {
            return `
            \\_o< 
            | \\ 
            <_/ 
            `;
        }

        // Initial update when the page loads
        updateProfile();
    </script>

</body>
</html>
