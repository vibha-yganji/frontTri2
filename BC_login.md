---
layout: base
title: Login
permalink: /login/
---
<html>
<h1>Login</h1>
    <form id="loginForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>       
        <input type="submit" value="Login">
    </form>
    <script>
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            // Get form data
            const formData = new FormData(this);            
            // Make POST request to backend API endpoint for login
            fetch('http://127.0.0.1:8240/api/users/login', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    window.location.href = '/'; 
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
    <html>
