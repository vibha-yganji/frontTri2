---
layout: base
title: Home
permalink: "/"
search_exclude: false
---
<style>
    /* CSS for styling purposes (optional) */
    .feature {
      margin-bottom: 10px;
    }

    .top-container,
    .bottom-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }

    .element {
      margin: 10px;
    }

    /* Added styles for scaling images */
    .element img {
      width: 300px; /* Set your desired width */
      height: 300px; /* Set your desired height */
      object-fit: cover; /* Maintain aspect ratio */
    }
</style>

<html lang="en">
<div id="selectedAscii"></div>
  <a href="tracking"><button class="btn">Daily</button></a>
  <a href="login"><button class="btn">Login</button></a>
    <a href="Register"><button class="btn">Register</button></a>
    <div class="top-container">
        <div class="element">
            <a href="exercise">
        <img src="images/ExerciseHome.png">
            </a>
        </div>
        <div class="element">
            <a href="sleep">
        <img src="images/SleepHome.png">
            </a>
        </div>
    </div>
    <div class="bottom-container">
        <div class="element">
            <a href="stress">
        <img src="images/LessBlurryStress.png">
            </a>
        </div>
        <div class="element">
            <a href="food">
        <img src="images/FoodHome.png">
            </a>
        </div>
        <div class="element">
            <a href="water">
        <img src="images/WaterHome.png">
            </a>
        </div>
    </div>

<script src="https://jplip.github.io/frontTri2/assets/js/exercise.js" defer></script>


</html>

