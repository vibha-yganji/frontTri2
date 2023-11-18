---
layout: base
title: Register
permalink: /Register/
---

<html lang="en">
    <title>User Registration</title>
    <h1>User Registration</h1>
    <form id="registrationForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>     
        <label for="uid">Username</label>  
        <input type="username" id="uid" name="uid" required><br><br>
        <label for="password">Password</label> 
        <input type="password" id="password" name="password" required><br><br>
        <label for="dob">Date of Birth</label>
        <input type="text" id="dob" name="dob" required><br><br>
        <input type="submit" value="Create User">
    </form>
    <script>
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            // Get form data
            const formData = new FormData(this);           
            // Make POST request to backend API endpoint for user creation
            fetch('http://127.0.0.1:8240/api/users/create', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    // Redirect to login page or dashboard upon successful user creation
                    window.location.href = '/frontTri2/login/'; // Replace with your desired URL
                } else {
                    // Handle failed user creation (show error message, etc.)
                    console.error('User creation failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    </script>
</html>
