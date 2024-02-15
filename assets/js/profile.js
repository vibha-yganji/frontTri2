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
    [|━|]╭(♡･ㅂ･)و ̑̑
    `;
        case "profile2":
            return `
               (\\__/)
                (UwU)
            ＿ノ ヽ ノ＼＿ 
        /　\`/ ⌒Ｙ⌒ Ｙ　 \\
        | 　(三ヽ人　 /　 　|
        |　ﾉ⌒＼ ￣￣ヽ　 ノ
        ヽ＿＿＿＞､＿＿／
            ｜ ( 王 ﾉ〈 
            /ﾐ\`ー―彡\\ 
            |╰       ╯| 
            |   /\\   |  
            |  |  |   |
            |  |  |   |
    `;
        case "profile3":
            return `
          __
\\ ______/ V\`-,
}        /~~
/_^ --,r'
|b    |b
    `;
        case "profile4":
            return `
        ╱|、
        (˚ˎ 。7
        |、˜〵
        じしˍ,)ノ
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