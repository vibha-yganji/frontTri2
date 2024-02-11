async function updateName() {
    var newName = document.getElementById('newName').value;

    // Assuming you have the user's ID available, replace '123' with the actual user ID
    const userIDFromLocalStorage = localStorage.getItem('loggedInUserId');
    console.log(userIDFromLocalStorage)

    try {
        const response = await fetch(`http://127.0.0.1:8240/api/users/${userIDFromLocalStorage}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newName }),
        });

        if (response.ok) {
            const resultDiv = document.getElementById('result');
            const responseData = await response.json();
            resultDiv.innerHTML = `Name updated successfully. New name: ${responseData.name}`;
        } else {
            throw new Error('Error updating name');
        }
    } catch (error) {
        alert(`Request failed: ${error.message}`);
    }
}