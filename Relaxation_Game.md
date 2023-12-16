<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Meditation Session</title>
</head>
<body>
    <h1>Guided Meditation Session</h1>
    <button class="btn fetchMeditationBtn">Fetch Meditation Session</button>
    <div id="meditationInfo"></div>

    <script>
        document.querySelector('.fetchMeditationBtn').addEventListener('click', function() {
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
