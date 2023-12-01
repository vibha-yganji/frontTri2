---
layout: base
title: Home
permalink: "/"
search_exclude: false
---
<html lang="en">
  <style>
    /* CSS for styling purposes (optional) */
    .feature {
      margin-bottom: 10px;
    }
  </style>
  <h1>Stress and Well Being</h1>
  
  <!-- Feature: Completed Exercise -->
  <div class="feature">
    <label for="completedExercise">Completed Exercise:</label>
    <input type="checkbox" id="completedExercise">
  </div>

  <!-- Feature: Rest Day -->
  <div class="feature">
    <label for="restDay">Rest Day:</label>
    <input type="checkbox" id="restDay">
  </div>

  <!-- Feature: Favorite Exercise -->
  <div class="feature">
    <label for="favoriteExercise">Favorite Exercise:</label>
    <input type="checkbox" id="favoriteExercise">
  </div>

  <!-- Feature: Warm-up Completed -->
  <div class="feature">
    <label for="warmupCompleted">Warm-up Completed:</label>
    <input type="checkbox" id="warmupCompleted">
  </div>

  <!-- Feature: Cool-down Completed -->
  <div class="feature">
    <label for="cooldownCompleted">Cool-down Completed:</label>
    <input type="checkbox" id="cooldownCompleted">
  </div>

  <script>
    // JavaScript to handle binary features (id)
    const completedExerciseCheckbox = document.getElementById('completedExercise');
    const restDayCheckbox = document.getElementById('restDay');
    const favoriteExerciseCheckbox = document.getElementById('favoriteExercise');
    const warmupCompletedCheckbox = document.getElementById('warmupCompleted');
    const cooldownCompletedCheckbox = document.getElementById('cooldownCompleted');

    // Event listeners for checkboxes
    completedExerciseCheckbox.addEventListener('change', () => {
      if (completedExerciseCheckbox.checked) {
    // If 'Completed Exercise' is checked, uncheck 'Rest Day'
        restDayCheckbox.checked = false;
    });

    restDayCheckbox.addEventListener('change', () => {
      if (restDayCheckbox.checked) {
    // If 'Rest Day' is checked, uncheck 'Completed Exercise'
        completedExerciseCheckbox.checked = false;
    });

    favoriteExerciseCheckbox.addEventListener('change', () => {
    });

    warmupCompletedCheckbox.addEventListener('change', () => {
    });

    cooldownCompletedCheckbox.addEventListener('change', () => {
    });
 </script>
  <a href="https://jplip.github.io/frontTri2/login/"><button class="btn">Login</button></a>
    <a href="https://jplip.github.io/frontTri2/Register/"><button class="btn">Register</button></a>
    <div class="top-container">
        <div class="element">
            <a href="https://jplip.github.io/frontTri2/exercise/">
        <img src="images/ExerciseHome.png">
            </a>
        </div>
        <div class="element">
            <a href="https://jplip.github.io/frontTri2/sleep/">
        <img src="images/SleepHome.png">
            </a>
        </div>
    </div>
    <div class="bottom-container">
        <div class="element">
            <a href="https://jplip.github.io/frontTri2/stress/">
        <img src="images/LessBlurryStress.png">
            </a>
        </div>
        <div class="element">
            <a href="https://jplip.github.io/frontTri2/food/">
        <img src="images/FoodHome.png">
            </a>
        </div>
        <div class="element">
            <a href="https://jplip.github.io/frontTri2/water/">
        <img src="images/WaterHome.png">
            </a>
        </div>
    </div>
</html>