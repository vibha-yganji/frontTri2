---
layout: base
title: Profile Creation
permalink: /Profile/
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
            max-width: 100%;
            height: auto;
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
        <div>
            <img id="profileImage" src="" alt="Selected Profile Image">
        </div>
    </div>
    <script>
        function updateProfile() {
            // Get the selected profile value
            var selectedProfile = document.getElementById("profileSelect").value;
            // Get the image element
            var profileImage = document.getElementById("profileImage");
            // Set the source of the image based on the selected profile
            switch (selectedProfile) {
                case "profile1":
                    profileImage.src = "ascii_profile1.txt"; // Replace with the actual path to your ASCII art file
                    break;
                case "profile2":
                    profileImage.src = "ascii_profile2.txt";
                    break;
                case "profile3":
                    profileImage.src = "ascii_profile3.txt";
                    break;
                case "profile4":
                    profileImage.src = "ascii_profile4.txt";
                    break;
                case "profile5":
                    profileImage.src = "ascii_profile5.txt";
                    break;
                default:
                    profileImage.src = ""; // Set a default image or leave it empty
            }
        }
        // Initial update when the page loads
        updateProfile();
    </script>

</body>
</html>
