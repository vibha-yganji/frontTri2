---
layout: base
title: Water 
permalink: /water/
---
![Alt text](images/Water Tracker Logo.png)
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f0f0f0; /* Original background color */
            overflow: hidden; /* Prevent scrolling */
        }
        
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none; /* Allow clicks to fall through to elements behind */
            z-index: -1; /* Place behind other content */
        }
        
        .emoji-pattern {
            background-image: url('{{site.baseurl}}/images/Exercise Background.png'); /* Path to your emoji image */
            opacity: 0.3; /* Adjust opacity to your liking */
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-repeat: repeat; /* Repeat the emoji pattern */
            background-size: cover; /* Ensure image doesn't stretch from its original ratio */
        }

        /* Your existing styles */
        #progress-bar-container {
            width: 300px;
            height: 30px;
            border: 1px solid #ccc;
            margin: 20px;
            position: relative;
            overflow: hidden;
        }
        #progress-bar {
            height: 100%;
            background-color: #0a4dab;
            transition: width 0.9s ease-in-out;
        }
        #progress-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #000;
            font-weight: bold;
        }
        #cup-info {
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <script src="https://jplip.github.io/frontTri2/assets/js/exercise.js" defer></script>
    <div class="purple-form">
        <label for="cupInput">Enter number of cups: </label>
        <input type="number" id="cupInput" min="0">
        <input type="submit" onclick="updateProgressBar()" value="Submit">
    </div>
    <div id="progress-bar-container">
        <div id="progress-bar"></div>
        <div id="progress-text">0 cups</div>
    </div>
    <div id="cup-info"></div>
    <div class="overlay">
        <div class="emoji-pattern"></div>
    </div>
    <script>
        let totalCups = 0;
        function updateProgressBar() {
            const inputElement = document.getElementById('cupInput');
            const progressBar = document.getElementById('progress-bar');
            const progressText = document.getElementById('progress-text');
            const cupInfo = document.getElementById('cup-info');
            const maxCups = 10;
            const cups = parseInt(inputElement.value);
            if (!isNaN(cups) && cups >= 0 && cups <= maxCups) {
                totalCups += cups;
                const percentage = (totalCups / maxCups) * 100;
                progressBar.style.width = percentage + '%';
                progressText.innerText = totalCups + ' cups';
                if (totalCups >= 8) {
                    progressBar.style.width = '100%';
                }
                cupInfo.innerText = 'You have drank ' + totalCups + ' cups.';
                inputElement.value = '';
            }
        }
    </script>
</body>
</html>
