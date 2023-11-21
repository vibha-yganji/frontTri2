---
layout: base
title: Exercise
permalink: /exercise/
---
![Alt text](images/exerciseheader.png)

<html lang="en">
  <div class="purple-form">
    <form id="exerciseForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required>
            <label for="exerciseType">Exercise Type:</label>
            <input type="text" id="exerciseType" name="exerciseType" placeholder="Enter exercise type" required>
            <label for="duration">Duration (in minutes):</label>
            <input type="number" id="duration" name="duration" placeholder="Enter duration" required>
            <label for="exerciseDate">Date of Exercise:</label>
            <input type="date" id="exerciseDate" name="exerciseDate" required>
            <input type="submit" value="Submit">
        </form>
</div>


<script>
    const userIDFromLocalStorage = localStorage.getItem('loggedInUserId'); //gets user id from local storage
    console.log(userIDFromLocalStorage) // tells me if I have the right one 
     document.getElementById('exerciseForm').addEventListener('submit', function(event) { // eventlistner(necessary for fform submission)
            event.preventDefault();
            const name = document.getElementById('name').value; //get name
            const exerciseType = document.getElementById('exerciseType').value; //g
            const duration = document.getElementById('duration').value;
            const exerciseDate = document.getElementById('exerciseDate').value;
            fetch(`http://127.0.0.1:8240/api/users/${userIDFromLocalStorage}`) //comment
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); //return user.read() json object (user!)
            })
            .then(data => {
                // Combine old and new exercise data
                const originalExerciseData = Array.isArray(data.exercise) ? data.exercise : [];
                const exercise = {
                        "name": name,
                        "exerciseType" : exerciseType,
                        "duration": duration,
                        "exerciseDate": exerciseDate
                    }
                const updatedExerciseData = [...originalExerciseData, exercise];
                const data2 = {
                        "id": userIDFromLocalStorage,
                        "name": name,
                        "uid": "life",
                        "dob": "10/12/13",
                        "age": "16",
                        "exercise": updatedExerciseData,
                        "tracking": {}
                    };
                var jsonData = JSON.stringify(data2);
            // Here you can perform an API request to send this data to your backend
            // Modify this section to send the collected data to your backend API
            // Example API call using fetch (modify as per your backend endpoint)
                fetch(`http://127.0.0.1:8240/api/users/${userIDFromLocalStorage}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: jsonData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Server response:', data);
                    // Handle response or perform additional actions after sending data
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Handle error if the request fails
                });
            });
     });


<html lang="en">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
 <style>
        /* Style the chart container */
        #exerciseChart {
            width: 800px;
            height: 400px;
            margin: 20px auto;
        }
</style>
</head>
<body>
    <!-- Chart container -->
    <canvas id="exerciseChart"></canvas>
 <script>
        // Replace 'userID' with the ID of the specific user you want to fetch data for
         const userIDFromLocalStorage = localStorage.getItem('loggedInUserId'); // Replace 'user123' with an actual user ID
        // Fetch exercise data for the specific user from the server API
        fetch(`http://your-api-url/users/${userIDFromLocalStorage}/exercises`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(exerciseData => {
                // Extract dates and durations for Chart.js
                const exerciseDates = exerciseData.map(data => data.date);
                const exerciseDurations = exerciseData.map(data => data.duration);
                // Create the chart
                const ctx = document.getElementById('exerciseChart').getContext('2d');
                const exerciseChart = new Chart(ctx, {
                    type: 'line', 
                    data: {
                        labels: exerciseDates, // X-axis labels (dates)
                        datasets: [{
                            label: 'Daily Exercise Duration',
                            data: exerciseDurations, // Y-axis data (exercise durations)
                            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Bar color
                            borderColor: 'rgba(54, 162, 235, 1)', // Border color
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Duration (minutes)'
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: 'Date'
                                }
                            }
                        }
                    }
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // Handle error if the request fails
            });
    </script>
</body>
</html>


</script>
</html>


