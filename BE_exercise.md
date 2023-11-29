---
layout: base
title: Exercise
permalink: /exercise/
---
![Alt text](images/exerciseheader.png)

<html lang="en">
  <div class="purple-form">
   <div id="binaryDurationBadge" class="binary-badge"></div>
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


document.getElementById('exerciseForm').addEventListener('submit', function (event) {
event.preventDefault();
    // Function to convert a number to binary representation
function decimalToBinary(number) {
    return (number >>> 0).toString(2); // Using bitwise zero-fill right shift operator
}

document.getElementById('exerciseForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the exercise duration from the form
    const duration = parseInt(document.getElementById('duration').value);

    // Convert duration to binary representation
    const binaryDuration = decimalToBinary(duration);

    // Display the appropriate binary badge based on duration
    displayBinaryBadge(binaryDuration);
});

// Function to display the binary badge based on duration
function displayBinaryBadge(binaryString) {
    const binaryBadgeElement = document.getElementById('binaryDurationBadge');

    // Clear existing badge content
    binaryBadgeElement.innerHTML = '';

    // Check the duration thresholds to assign badges
    if (parseInt(binaryString, 2) >= 60) {
        createBadge(6); // For durations over an hour (60 minutes or more)
    } else if (parseInt(binaryString, 2) >= 50) {
        createBadge(5); // For durations over 50 minutes
    } else {
        createBadge(parseInt(binaryString, 2)); // For other durations
    }
}

// Function to create badge elements based on the count of binary digits
function createBadge(count) {
    const binaryBadgeElement = document.getElementById('binaryDurationBadge');

    // Create spans representing binary digits for the badge
    for (let i = 0; i < count; i++) {
        const span = document.createElement('span');
        span.textContent = '1';
        span.classList.add('binary-digit', 'binary-one');
        binaryBadgeElement.appendChild(span);
    }

    // Add zero digits if needed to complete the badge
    for (let i = count; i < 6; i++) {
        const span = document.createElement('span');
        span.textContent = '0';
        span.classList.add('binary-digit');
        binaryBadgeElement.appendChild(span);
    }
}

    }
</script>

<iframe src="https://jplip.github.io/frontTri2/exercisegraph/" width="800" height="600" frameborder="0"></iframe>

<html>





