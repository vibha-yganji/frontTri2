---
layout: base
title: Exercise
permalink: /exercise/
--- 
![Alt text](images/exerciseheader.png)
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Exercise</title>
</head>
<body>
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
        const userIDFromLocalStorage = localStorage.getItem('loggedInUserId');
        console.log(userIDFromLocalStorage);
        document.getElementById('exerciseForm').addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const exerciseType = document.getElementById('exerciseType').value;
            const duration = document.getElementById('duration').value;
            const exerciseDate = document.getElementById('exerciseDate').value;
            fetch(`http://127.0.0.1:8240/api/users/${userIDFromLocalStorage}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const originalExerciseData = Array.isArray(data.exercise) ? data.exercise : [];
                    const exercise = {
                        "name": name,
                        "exerciseType": exerciseType,
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
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                    const binaryDuration = decimalToBinary(duration);
                    displayBinaryBadge(binaryDuration);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
        function decimalToBinary(number) {
            return (number >>> 0).toString(2);
        }
        function displayBinaryBadge(binaryString) {
            const binaryBadgeElement = document.getElementById('binaryDurationBadge');
            binaryBadgeElement.innerHTML = '';
            const overThirtyMinutes = isOverThirtyMinutes(binaryString);
            const overTenMinutes = isOverTenMinutes(binaryString);
            const didPractice = checkPracticeToday(); // Assuming you have a function to check if they practiced today
            const badgeEarned = performOR(overThirtyMinutes, performAND(overTenMinutes, didPractice));
            createBadge(badgeEarned);
        }
        function isOverThirtyMinutes(binaryString) {
            return parseInt(binaryString, 2) >= 30; // Assuming 30 minutes equals binary 11110
        }
        function isOverTenMinutes(binaryString) {
            return parseInt(binaryString, 2) >= 10; // Assuming 10 minutes equals binary 1010
        }
        function checkPracticeToday(exerciseDate) {
          const today = new Date(); // Get current date
          const exercise = new Date(exerciseDate); // Convert exercise date string to Date object
           // Compare the year, month, and day of both dates
          return (
            today.getFullYear() === exercise.getFullYear() &&
            today.getMonth() === exercise.getMonth() &&
            today.getDate() === exercise.getDate()
            );
        }
        function performOR(flag1, flag2) {
            return (flag1 || flag2) ? 1 : 0;
        }
        function performAND(flag1, flag2) {
            return (flag1 && flag2) ? 1 : 0;
        }
        function createBinaryBadge(duration, isToday) {
            const binaryBadgeElement = document.getElementById('binaryDurationBadge');
            binaryBadgeElement.innerHTML = '';
            if (isToday) {
                const asciiBadge = document.createElement('pre');
                asciiBadge.style.fontSize = '24px';
                asciiBadge.style.lineHeight = '1';
                asciiBadge.style.color = 'green';
                asciiBadge.textContent = 'Today';
                binaryBadgeElement.appendChild(asciiBadge);
            } else if (duration >= 30) {
                const binaryString = (duration >>> 0).toString(2); // Convert duration to binary string
                for (let i = 0; i < binaryString.length; i++) {
                    const span = document.createElement('span');
                    span.textContent = binaryString[i];
                    span.classList.add('binary-digit');
                    binaryBadgeElement.appendChild(span);
                }
            } else {
                for (let i = 0; i < 6; i++) {
                    const span = document.createElement('span');
                    span.textContent = '0';
                    span.classList.add('binary-digit');
                    binaryBadgeElement.appendChild(span);
                }
            }
        }
    function displayBinaryBadge(duration, exerciseDate) {
        const binaryBadgeElement = document.getElementById('binaryDurationBadge');
        binaryBadgeElement.innerHTML = '';
        const today = new Date();
        const exercise = new Date(exerciseDate);
        const isToday = (
            today.getFullYear() === exercise.getFullYear() &&
            today.getMonth() === exercise.getMonth() &&
            today.getDate() === exercise.getDate()
        );
        createBinaryBadge(duration, isToday);
    }
    </script>
    <iframe src="https://jplip.github.io/frontTri2/exercisegraph/" width="800" height="600" frameborder="0"></iframe>

</body>

</html>







