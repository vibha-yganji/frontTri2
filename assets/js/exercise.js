// exercise-profiles.js

// Function to retrieve the selected profile from local storage
// exercise-profiles.js

// Function to retrieve the selected profile from local storage
// document.addEventListener('DOMContentLoaded', function () {
    // Code inside this block will execute after the DOM is fully loaded

    // Function to get the selected profile from local storage
    function getSelectedProfile() {
        return localStorage.getItem('selectedProfile');
    }

    // Function to set a default profile in local storage
    // Function to set a default profile in local storage
    function setDefaultProfile() {
    // Get the currently selected profile
        var currentProfile = getSelectedProfile();
        console.log(currentProfile)

        // Check if no profile is selected
        // if (!currentProfile) {
        //     // If not, set a default profile
        //     localStorage.setItem('selectedProfile', 'profile1');
        // }
    }


    // ASCII art functions (unchanged)
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
                (\\__/)
                 (UwU)
             ＿ノ ヽ ノ＼＿ 
            /　\`/ ⌒Ｙ⌒ Ｙ　  \
            | 　(三ヽ人　 /　 　|
            |　ﾉ⌒＼ ￣￣ヽ　 ノ
            ヽ＿＿＿＞､＿＿／
              ｜( 王 ﾉ〈 
               ﾐ\`ー―彡\\ 
             |╰      ╯| 
             |   /\\   |  
             |  |  |  |
             |  |  |  |   
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

    // Function to display the selected profile
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
    displaySelectedProfile();
//});
