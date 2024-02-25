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
    <script>
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
    </script>

</body>
</html>
