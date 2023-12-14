<!---
layout: page
title: Binary Color
permalink: /BinaryColor/
--->
<style>
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }

  #container {
    text-align: center;
  }

  #colorBarContainer {
    margin-bottom: 20px;
  }

  #colorBar {
    width: 300px;
    height: 50px;
    background-color: #3498db; /* Default color */
    margin: 0 auto; /* Center horizontally */
  }
</style>
<div id="container">
  <div id="colorBarContainer">
    <div id="colorBar"></div>
  </div>

  <label for="redSlider">Red:</label>
  <input type="range" id="redSlider" min="0" max="255" value="255">

  <label for="greenSlider">Green:</label>
  <input type="range" id="greenSlider" min="0" max="255" value="255">

  <label for="blueSlider">Blue:</label>
  <input type="range" id="blueSlider" min="0" max="255" value="255">
</div>

<script>
    // Function to update the color of the bar based on slider values
    function updateColor() {
      const redValue = document.getElementById("redSlider").value;
      const greenValue = document.getElementById("greenSlider").value;
      const blueValue = document.getElementById("blueSlider").value;

      const colorBar = document.getElementById("colorBar");
      colorBar.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    }

    // Add event listeners to the sliders
    document.getElementById("redSlider").addEventListener("input", updateColor);
    document.getElementById("greenSlider").addEventListener("input", updateColor);
    document.getElementById("blueSlider").addEventListener("input", updateColor);

    // Initial color update
    updateColor();
</script>



# Binary Functions
The three sliders (redSlider, greenSlider, and blueSlider) allow the user to adjust the intensity of each color component (red, green, and blue) independently. The resulting color is displayed as a bar with the id of colorBar at the top of the page.

The JavaScript part of the code is responsible for updating the color of the bar in real-time as the user adjusts the sliders. The updateColor function is called whenever the user interacts with any of the sliders, and it sets the background color of the colorBar based on the current values of the sliders.

In summary, this code creates a simple interactive color picker interface where the user can choose a color by adjusting the red, green, and blue components using sliders. The color is displayed in real-time as the sliders are manipulated.