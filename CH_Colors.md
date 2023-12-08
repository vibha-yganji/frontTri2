---
layout: page
title: Binary Color
permalink: /BinaryColor/
---
<style>
#colorBar {
    width: 300px;
    height: 50px;
    margin-top: 20px;
    background-color: #3498db; /* Default color */
}
</style>
  <label for="redSlider">Red:</label>
  <input type="range" id="redSlider" min="0" max="255" value="52">

  <label for="greenSlider">Green:</label>
  <input type="range" id="greenSlider" min="0" max="255" value="152">

  <label for="blueSlider">Blue:</label>
  <input type="range" id="blueSlider" min="0" max="255" value="219">

  <div id="colorBar"></div>

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