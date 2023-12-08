---
layout: page
title: Binary Color
permalink: /BinaryColor/
---
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