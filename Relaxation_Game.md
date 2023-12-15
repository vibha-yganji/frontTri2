<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Meditation Session</title>
    <style>
        /* Some basic styles for the page */
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Guided Meditation Session</h1>
    <button id="fetchMeditationBtn">Fetch Meditation Session</button>
    <div id="meditationInfo"></div>

    <script>
        document.getElementById('fetchMeditationBtn').addEventListener('click', function() {
            fetch('/fetch_meditation') // Replace this URL with your server endpoint
                .then(response => response.json())
                .then(data => {
                    // Display fetched meditation information
                    const meditationInfoDiv = document.getElementById('meditationInfo');
                    if (data && data.title) {
                        meditationInfoDiv.innerHTML = `<h2>${data.title}</h2><p>Duration: ${data.duration} seconds</p>`;
                    } else {
                        meditationInfoDiv.innerHTML = '<p>No meditation session available</p>';
                    }
                })
                .catch(error => {
                    console.error('Error fetching meditation:', error);
                });
        });
    </script>
</body>
</html>
