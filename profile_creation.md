---
layout: base
title: Profile Display
permalink: /Profile_Display/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Picture Display</title>
</head>
<body>
<form class = 'purple-form'>
    <h2>Profile Picture</h2>
    <div id="profilePicture" class="profilePictureContainer"></div>
    <hr>
    <h1> <strong> General Information </strong> </h1>
     <div id="userDetails"></div>
     <div class="purple-form">
        <label for="newName">New Name:</label>
        <input type="text" id="newName" name="newName" required>
        <button type="button" onclick="updateName()">Update Name</button>
    <div id="result"></div>
    <script src="https://jplip.github.io/frontTri2/assets/js/name.js" defer></script>
    <hr>
    <div class="container">
        <h1><strong> User Health Data </strong> </h1>
        <div class="form-group">
            <label for="weight">Weight (kg):</label>
            <input type="number" id="weight" value="0">
            <button class="edit-button" onclick="makeEditable('weight')">Edit</button>
        </div>
        <div class="form-group">
            <label for="height">Height (cm):</label>
            <input type="number" id="height" value="0">
            <button class="edit-button" onclick="makeEditable('height')">Edit</button>
        </div>
        <div class="form-group">
            <label for="bmi">BMI:</label>
            <input type="text" id="bmi" value="0" readonly>
        </div>
        <div class="form-group">
            <label for="caloricIntake">Caloric Intake (kcal):</label>
            <input type="number" id="caloricIntake" value="0">
            <button class="edit-button" onclick="makeEditable('caloricIntake')">Edit</button>
        </div>
        <div class="form-group">
            <label for="waterIntake">Water Intake (ml):</label>
            <input type="number" id="waterIntake" value="0">
            <button class="edit-button" onclick="makeEditable('waterIntake')">Edit</button>
        </div>
        <div class="form-group">
            <button class="calculate-button" onclick="calculateBMI()">Calculate</button>
            <button class="save-button" onclick="saveUserData()">Save</button>
        </div>
    </div>
    <script>
        const weight = document.getElementById('weight').value;
        localStorage.setItem("Weight", weight)
        // JavaScript code
        function makeEditable(fieldId) {
            const field = document.getElementById(fieldId);
            field.readOnly = !field.readOnly;
            field.focus(); // Put the cursor in the input field
        }
        function calculateBMI() {
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
            const bmiInput = document.getElementById('bmi');
            if (weight && height) {
                const bmi = (weight / (height * height)).toFixed(2);
                bmiInput.value = bmi;
            } else {
                alert('Please enter valid weight and height values.');
            }
        }
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
             __
    \ ______/ V\`-,
    }        /~~
    /_)^ --,r'
    |b      |b
            `;
        case "profile2":
            return `
                (\__/)
                (UwU)
            `;
        case "profile3":
            return `
            ╱|、
           (˚ˎ 。7
            |、˜〵
           じしˍ,)ノ
            `;
        case "profile4":
            return `
        [|━|]╭(♡･ㅂ･)و ̑̑
            `;
        default:
            return ""; // Set a default ASCII art or leave it empty
    }
}
 const loggedInUserName = localStorage.getItem('loggedInUserName');
        const loggedInUserId = localStorage.getItem('loggedInUserId');
        // Display user information
        if (loggedInUserName) {
            document.getElementById('userDetails').textContent = `Logged in as: ${loggedInUserName} (ID: ${loggedInUserId})`;
        } else {
            document.getElementById('userDetails').textContent = "Not logged in.";
        }
         loadUserData(); // Load user data immediately when the page is loaded
        function makeEditable(fieldId) {
            const field = document.getElementById(fieldId);
            field.readOnly = !field.readOnly;
            field.focus(); // Put the cursor in the input field
        }
        function calculateBMI() {
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
            const bmiInput = document.getElementById('bmi');
            if (weight && height) {
                const bmi = (weight / (height * height)).toFixed(2);
                bmiInput.value = bmi;
            } else {
                alert('Please enter valid weight and height values.');
            }
        }
        function saveUserData() {
            localStorage.setItem('weight', document.getElementById('weight').value);
            localStorage.setItem('height', document.getElementById('height').value);
            localStorage.setItem('caloricIntake', document.getElementById('caloricIntake').value);
            localStorage.setItem('waterIntake', document.getElementById('waterIntake').value);
        }
        function loadUserData() {
            document.getElementById('weight').value = localStorage.getItem('weight') || '0';
            document.getElementById('height').value = localStorage.getItem('height') || '0';
            document.getElementById('caloricIntake').value = localStorage.getItem('caloricIntake') || '0';
            document.getElementById('waterIntake').value = localStorage.getItem('waterIntake') || '0';
        }
    </script>
