---
layout: base
title: Exercise
permalink: /exercise/
---
![Alt text](images/exerciseheader.png)

<html lang="en">
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

</script>
</html>

<!-- <html lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Add your CSS styles here */
        /* Example styles - modify as needed */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .formcontainer {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        label {
            display: block;
            margin-bottom: 8px;
        }
        input[type="text"],
        input[type="number"],
        input[type="date"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        input[type="submit"] {
            background-color: #4caf50;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
    <div class="container">
        <h2>Exercise Tracker Form</h2>
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
        document.getElementById('exerciseForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const exerciseType = document.getElementById('exerciseType').value;
            const duration = document.getElementById('duration').value;
            const exerciseDate = document.getElementById('exerciseDate').value;
            // Displaying collected data (you can modify this section)
            console.log('Name:', name);
            console.log('Exercise Type:', exerciseType);
            console.log('Duration:', duration);
            console.log('Exercise Date:', exerciseDate);
            // Here you can perform an API request to send this data to your backend
            // Modify this section to send the collected data to your backend API
            // Example API call using fetch (modify as per your backend endpoint)
            fetch('`http://127.0.0.1:8240/api/users/${selectedUserId}`', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    exerciseType: exerciseType,
                    duration: duration,
                    exerciseDate: exerciseDate
                })
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
    </script>
</html> -->
