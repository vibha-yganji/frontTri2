---
layout: base
title: Login
permalink: /login/
---
<!-- Your login form HTML -->
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h1>Login</h1>
    <form id="loginForm">
        <label for="uid">Username:</label>
        <input type="text" id="uid" name="uid" required><br><br>        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>       
        <input type="submit" value="Login">
    </form>
    <div id="userDisplayName"></div>
    <script>
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const uid = document.getElementById('uid').value;
            const password = document.getElementById('password').value;
            const loginData = {
                uid: uid,
                password: password
            };
            fetch('http://127.0.0.1:8240/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            })
            .then(response => {
                if (response.ok) {
                    return response.json(); // Parse response JSON
                } else {
                    console.error('Login failed');
                    throw new Error('Login failed');
                }
            })
            .then(data => {
                // Assuming the backend sends the user object with a 'name' property
                const loggedInUserName = data.user.name; // Extract the user's name
                // Storing user's name in local storage
                localStorage.setItem('loggedInUserName', loggedInUserName);
                // Displaying the user's name in the UI
                document.getElementById('userDisplayName').textContent = `Welcome, ${loggedInUserName}!`;
                // get rid of form
                document.getElementById('loginForm').style.display = 'none';
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    </script>
</body>
</html>
