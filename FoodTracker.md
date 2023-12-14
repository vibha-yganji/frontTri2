---
layout: base
title: Food Tracker
permalink: "/food/"
search_exclude: false
---
<html lang="en">
<head>
  <title>Food Tracker</title>
</head>
<body>
  <div>
    <label for="proteinRatio" class="label">Cups of Protein:</label>
    <input type="number" id="proteinRatio" value="20">
  </div>
  <div>
    <label for="vegetableRatio" class="label">Cups of Vegetables:</label>
    <input type="number" id="vegetableRatio" value="30">
  </div>
  <div>
    <label for="fruitRatio" class="label">Cups of Fruits</label>
    <input type="number" id="fruitRatio" value="15">
  </div>
  <div>
    <label for="dairyRatio" class="label">Cups of Dairy:</label>
    <input type="number" id="dairyRatio" value="20">
  </div>
  <div>
    <label for="grainRatio" class="label">Cups of Grain:</label>
    <input type="number" id="grainRatio" value="15">
  </div>
  <button class="btn" onclick="createPieChart()">User's Chart</button>
  <button class="btn" onclick="createUSDAChart()">USDA's Chart</button>

  <h2>User Food Ratios Pie Chart</h2>
  <svg id="userChart" width="300" height="300"></svg>
  
  <h2>USDA Suggested Food Ratios Pie Chart</h2>
  <svg id="usdaChart" width="300" height="300"></svg>

  <div id="legend"></div>

  <h2>Food Intake in Binary</h2>
  <div id="foodBinaryDisplay"></div>

  <script>
    function createPieChart() {
      const protein = parseFloat(document.getElementById('proteinRatio').value);
      const vegetable = parseFloat(document.getElementById('vegetableRatio').value);
      const fruit = parseFloat(document.getElementById('fruitRatio').value);
      const dairy = parseFloat(document.getElementById('dairyRatio').value);
      const grain = parseFloat(document.getElementById('grainRatio').value);

      const total = protein + vegetable + fruit + dairy + grain;

      const proteinAngle = (protein / total) * 360;
      const vegetableAngle = (vegetable / total) * 360;
      const fruitAngle = (fruit / total) * 360;
      const dairyAngle = (dairy / total) * 360;
      const grainAngle = (grain / total) * 360;

      const userChart = document.getElementById('userChart');
      
      userChart.innerHTML = '';

      drawSegment(userChart, 150, 150, 100, 0, proteinAngle, '#FFC3BD');
      drawSegment(userChart, 150, 150, 100, proteinAngle, proteinAngle + vegetableAngle, '#C1E1C1');
      drawSegment(userChart, 150, 150, 100, proteinAngle + vegetableAngle, proteinAngle + vegetableAngle + fruitAngle, '#ADD8E6');
      drawSegment(userChart, 150, 150, 100, proteinAngle + vegetableAngle + fruitAngle, proteinAngle + vegetableAngle + fruitAngle + dairyAngle, '#FFD700');
      drawSegment(userChart, 150, 150, 100, proteinAngle + vegetableAngle + fruitAngle + dairyAngle, 360, '#E6A8D7');

      updateLegend();

      updateBinaryDisplay();
    }

    function createUSDAChart() {
      const usdaProtein = 20; // USDA suggested ratio for protein
      const usdaVegetable = 30; // USDA suggested ratio for vegetables
      const usdaFruit = 20; // USDA suggested ratio for fruits
      const usdaDairy = 20; // USDA suggested ratio for dairy
      const usdaGrain = 30; // USDA suggested ratio for grains

      const usdaTotal = usdaProtein + usdaVegetable + usdaFruit + usdaDairy + usdaGrain;

      const usdaProteinAngle = (usdaProtein / usdaTotal) * 360;
      const usdaVegetableAngle = (usdaVegetable / usdaTotal) * 360;
      const usdaFruitAngle = (usdaFruit / usdaTotal) * 360;
      const usdaDairyAngle = (usdaDairy / usdaTotal) * 360;
      const usdaGrainAngle = (usdaGrain / usdaTotal) * 360;

      const usdaChart = document.getElementById('usdaChart');

      usdaChart.innerHTML = '';

      drawSegment(usdaChart, 150, 150, 100, 0, usdaProteinAngle, '#FFC3BD');
      drawSegment(usdaChart, 150, 150, 100, usdaProteinAngle, usdaProteinAngle + usdaVegetableAngle, '#C1E1C1');
      drawSegment(usdaChart, 150, 150, 100, usdaProteinAngle + usdaVegetableAngle, usdaProteinAngle + usdaVegetableAngle + usdaFruitAngle, '#ADD8E6');
      drawSegment(usdaChart, 150, 150, 100, usdaProteinAngle + usdaVegetableAngle + usdaFruitAngle, usdaProteinAngle + usdaVegetableAngle + usdaFruitAngle + usdaDairyAngle, '#FFD700');
      drawSegment(usdaChart, 150, 150, 100, usdaProteinAngle + usdaVegetableAngle + usdaFruitAngle + usdaDairyAngle, 360, '#E6A8D7');

      updateLegend();
      updateBinaryDisplay();
    }

    function drawSegment(svg, x, y, radius, startAngle, endAngle, color) {
      const startRadians = (startAngle - 90) * Math.PI / 180;
      const endRadians = (endAngle - 90) * Math.PI / 180;
      const x1 = x + radius * Math.cos(startRadians);
      const y1 = y + radius * Math.sin(startRadians);
      const x2 = x + radius * Math.cos(endRadians);
      const y2 = y + radius * Math.sin(endRadians);
      const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
      const pathData = [
        `M ${x},${y}`,
        `L ${x1},${y1}`,
        `A ${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2}`,
        'Z'
      ].join(' ');
      const segment = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      segment.setAttribute('d', pathData);
      segment.setAttribute('fill', color);
      svg.appendChild(segment);
    }

    function updateLegend() {
      const legend = document.getElementById('legend');
      legend.innerHTML = '';
      legend.innerHTML += '<div><span style="display:inline-block;width:20px;height:20px;background-color:#FFC3BD;"></span> Protein</div>';
      legend.innerHTML += '<div><span style="display:inline-block;width:20px;height:20px;background-color:#C1E1C1;"></span> Vegetable</div>';
      legend.innerHTML += '<div><span style="display:inline-block;width:20px;height:20px;background-color:#ADD8E6;"></span> Fruit</div>';
      legend.innerHTML += '<div><span style="display:inline-block;width:20px;height:20px;background-color:#FFD700;"></span> Dairy</div>';
      legend.innerHTML += '<div><span style="display:inline-block;width:20px;height:20px;background-color:#E6A8D7;"></span> Grain</div>';
    }
     
    function updateBinaryDisplay() {
      const protein = parseFloat(document.getElementById('proteinRatio').value);
      const vegetable = parseFloat(document.getElementById('vegetableRatio').value);
      const fruit = parseFloat(document.getElementById('fruitRatio').value);
      const dairy = parseFloat(document.getElementById('dairyRatio').value);
      const grain = parseFloat(document.getElementById('grainRatio').value);

      const binaryProtein = protein.toString(2);
      const binaryVegetable = vegetable.toString(2);
      const binaryFruit = fruit.toString(2);
      const binaryDairy = dairy.toString(2);
      const binaryGrain = grain.toString(2);

      const totalIntake = protein + vegetable + fruit + dairy + grain;
      const binaryTotalIntake = totalIntake.toString(2);
      
      const foodBinaryDisplay = document.getElementById('foodBinaryDisplay');

      foodBinaryDisplay.innerHTML = `
        <p>Protein in Binary: ${binaryProtein}</p>
        <p>Vegetable in Binary: ${binaryVegetable}</p>
        <p>Fruit in Binary: ${binaryFruit}</p>
        <p>Dairy in Binary: ${binaryDairy}</p>
        <p>Grain in Binary: ${binaryGrain}</p>
        <p>Total Food Intake in Binary: ${binaryTotalIntake}</p>
      `;
    }

    // Call necessary functions
    createPieChart(); // Or createUSDAChart() based on the initial action
  </script>
</body>
</html>
