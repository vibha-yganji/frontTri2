---
layout: base
title: Home
permalink: "/"
search_exclude: false
---
<style>
    /* CSS for styling purposes (optional) */
    .feature {
      margin-bottom: 10px;
    }

    .top-container,
    .bottom-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }

    .element {
      margin: 10px;
    }

    /* Added styles for scaling images */
    .element img {
      width: 300px; /* Set your desired width */
      height: 300px; /* Set your desired height */
      object-fit: cover; /* Maintain aspect ratio */
    }
</style>

<html lang="en">
<div id="selectedAscii"></div>
  <a href="https://jplip.github.io/frontTri2/tracking/"><button class="btn">Daily</button></a>
  <a href="https://jplip.github.io/frontTri2/login/"><button class="btn">Login</button></a>
    <a href="https://jplip.github.io/frontTri2/Register/"><button class="btn">Register</button></a>
    <div class="top-container">
        <div class="element">
            <a href="https://jplip.github.io/frontTri2/exercise/">
        <img src="images/ExerciseHome.png">
            </a>
        </div>
        <div class="element">
            <a href="https://jplip.github.io/frontTri2/sleep/">
        <img src="images/SleepHome.png">
            </a>
        </div>
    </div>
    <div class="bottom-container">
        <div class="element">
            <a href="https://jplip.github.io/frontTri2/stress/">
        <img src="images/LessBlurryStress.png">
            </a>
        </div>
        <div class="element">
            <a href="https://jplip.github.io/frontTri2/food/">
        <img src="images/FoodHome.png">
            </a>
        </div>
        <div class="element">
            <a href="https://jplip.github.io/frontTri2/water/">
        <img src="images/WaterHome.png">
            </a>
        </div>
    </div>

<script>
// exercise-profiles.js

// Function to retrieve the selected profile from local storage
// exercise-profiles.js

// Function to retrieve the selected profile from local storage
function getSelectedProfile() {
    var storedProfile = localStorage.getItem('selectedProfile');
    console.log(storedProfile);
    return localStorage.getItem('selectedProfile');
}

// Function to set a default profile in local storage
function setDefaultProfile() {
     var selectedProfile = localStorage.getItem('selectedProfile');
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
    // Set a default profile if none is selected
    setDefaultProfile();

    // Get the selected profile value
    var selectedProfile = getSelectedProfile();

    // Show the selected profile's ASCII art in the upper right corner
    var selectedAscii = document.getElementById("selectedAscii");
    selectedAscii.textContent = getProfileAscii(selectedProfile);
}

// Initial display when the page loads
document.addEventListener('DOMContentLoaded', function () {
        displaySelectedProfile();
    });




</script>



</html>

