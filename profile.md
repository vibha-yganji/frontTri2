---
layout: base
title: profile
permalink: /profile/
---
<html>
    <div class="purple-form">
        <h2>Exercise Profiles</h2>
        <label for="profileSelect">Select Profile:</label>
        <select id="profileSelect" onchange="updateProfile()">
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
        \\_o< 
        | \\ 
        <_/ 
    </div>
    <div id="selectedAscii"></div>
    <div id="profileAscii"></div>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
           function updateSelectedProfile(profile) {
                localStorage.setItem('selectedProfile', profile);
            }
            // Function to retrieve the selected profile from local storage
            function getSelectedProfile() {
                var storedProfile = localStorage.getItem('selectedProfile');
                console.log(storedProfile);
                return localStorage.getItem('selectedProfile');
            }
        function updateProfile() {
            // Get the selected profile value
            var selectedProfile = document.getElementById("profileSelect").value;
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
                    \\_o< 
                    | \\ 
                    <_/ 
                    `;
                default:
                    return ""; // Set a default ASCII art or leave it empty
            }
        }
        });
        // Initial update when the page loads
        updateProfile();
    </script>
</html>
