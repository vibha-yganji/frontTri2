---
layout: page
permalink: /profile home/
---

   

<h1>ASCII Profile Selector</h1>

<label for="profile-select">Select a profile:</label>
<select id="profile-select" onchange="updateAscii()">
  <option value="coffeeMug">Coffee Mug</option>
  <option value="lightningBolt">Lightning Bolt</option>
  <option value="heartbeat">Heartbeat</option>
  <option value="waterBottle">Water Bottle</option>
  <option value="weight">Weight</option>
  <option value="pillow">Pillow</option>
  <!-- Add more options as needed -->
</select>

<div id="ascii-container">
  <!-- ASCII art will be displayed here -->
</div>

<script>
  // ASCII art for different profiles
  const asciiArt = {
    coffeeMug: `
   ( (
    ) )
........
|      |]
\      / 
 `    '  
    `,
    lightningBolt: `
       ⚡
     \   /
      . .
    /  _  \\
   /  / \  \\
  |  |   |  |
 `,
    heartbeat: `
  /¯¯\
 (    )
  \  /
   \/
    `,
    waterBottle: `
   ____
  ||  ||
  ||  ||
  ||  ||
  ||  ||
  ||  ||
  ||__||
  |____|
  `,
    weight: `
   _________
  |         |
  |         |
  |    ●    |
  |         |
  |_________|
  `,
    pillow: `
   ________
  |        |
  |  ____  |
  | (    ) |
  |  |  |  |
  |  |  |  |
  |__|__|__|
  `,
`
  };

  function updateAscii() {
    const selectElement = document.getElementById('profile-select');
    const profile = selectElement.value;
    const asciiContainer = document.getElementById('ascii-container');

    // Display the selected ASCII art
    asciiContainer.textContent = asciiArt[profile];
  }

  // Initial update on page load
  updateAscii();
</script>

</body>
</html>
