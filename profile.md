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
</select>
    <!-- </div>
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
    </div> -->
    </div>
    <div class="profileOption" id="profile1">
                         __
                \ ______/ V\`-,
                }        /~~
                /_)^ --,r'
                |b      |b
    </div>
    <div class="profileOption" id="profile2">
                 (\__/)
                 (UwU)
             ＿ノ ヽ ノ＼＿ 
            /　\`/ ⌒Ｙ⌒ Ｙ　\
            | 　(三ヽ人　 /　|
            ヽ＿＿＿＞､＿＿／
              ｜( 王 ﾉ〈 
               ﾐ\`ー―彡\\ 
              |╰      ╯| 
              |   /\\  |   
    </div>
<div class="profileOption" id="profile3">
    ╱|、
   (˚ˎ 。7
    |、˜〵
   じしˍ,)ノ
</div>
<div class="profileOption" id="profile4">
     [|━|]╭(♡･ㅂ･)و ̑̑
</div>
    <div id="selectedAscii"></div>
    <div id="profileAscii"></div>
    <div class="purple-form">
        <label for="newName">New Name:</label>
        <input type="text" id="newName" name="newName" required>
        <button type="button" onclick="updateName()">Update Name</button>
    <div id="result"></div>
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
             ＿ノ ヽ ノ＼＿ 
            /　\`/ ⌒Ｙ⌒ Ｙ　\
            | 　(三ヽ人　 /　|
            ヽ＿＿＿＞､＿＿／
              ｜( 王 ﾉ〈 
               ﾐ\`ー―彡\\ 
              |╰      ╯| 
              |   /\\  | 
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
</script>



