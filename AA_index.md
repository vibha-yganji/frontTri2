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

<script>
    const checkboxA = document.getElementById('checkboxA');
    const checkboxB = document.getElementById('checkboxB');


    // Event listeners for checkboxes
    checkboxA.addEventListener('change', () => {
        performXORLogic();
    });

    checkboxB.addEventListener('change', () => {
        performXORLogic();
    });

    function performXORLogic() {
        const isCheckedA = checkboxA.checked;
        const isCheckedB = checkboxB.checked;
        const xorResult = (isCheckedA || isCheckedB) && !(isCheckedA &&     isCheckedB);
        resultDiv.textContent = `XOR Gate Result: ${xorResult}`;
        }
</script>