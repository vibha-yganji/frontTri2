---
layout: base
title: Login
permalink: /login/
---
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
    <script>
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission           
            // Get form input values
            const uid = document.getElementById('uid').value;
            const password = document.getElementById('password').value;          
            // Create a JSON object with login data
            const loginData = {
                uid: uid,
                password: password
            };
            // Make POST request to backend API endpoint for login
            fetch('http://127.0.0.1:8240/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            })
            .then(response => {
                if (response.ok) {
                    // Redirect to the home page
                    const loggedInUserName = data.user.name; // Adjust according to your backend response
                    // Storing user's name in local storage
                    localStorage.setItem('loggedInUserName', loggedInUserName);
                    // Displaying the user's name in the UI
                    document.getElementById('userDisplayName').textContent = `Welcome, ${loggedInUserName}!`;
                    window.location.href = '/frontTri2/'; 
                } else {
                    // Handle failed login (show error message, etc.)
                    console.error('Login failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    </script>
</body>
</html>


