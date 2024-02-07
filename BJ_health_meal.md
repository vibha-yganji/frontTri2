---
layout: base
title: Food Tracker
permalink: "/food/"
search_exclude: false
---
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weight to Cups Converter</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 50px;
    }

    #converter {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h2>Cups Calculator</h2>

  <div>
    <label for="quantity">Quantity:</label>
    <input type="number" id="quantity" placeholder="Enter quantity" oninput="convertToCups()">
  </div>

  <div>
    <label for="unit">Select unit:</label>
    <select id="unit" onchange="convertToCups()">
      <option value="grams">Grams</option>
      <option value="ounces">Ounces</option>
      <option value="pounds">Pounds</option>
    </select>
  </div>

  <div id="converter">
    <p id="result">Cups: 0</p>
  </div>

  <script>
    function convertToCups() {
      // Get the value and unit from the input
      var quantity = parseFloat(document.getElementById('quantity').value);
      var unit = document.getElementById('unit').value;

      // Conversion factors
      var gramsToCups = 0.24;
      var ouncesToCups = 0.125;
      var poundsToCups = 2;

      // Perform the conversion
      var cups;
      switch (unit) {
        case 'grams':
          cups = quantity * gramsToCups;
          break;
        case 'ounces':
          cups = quantity * ouncesToCups;
          break;
        case 'pounds':
          cups = quantity * poundsToCups;
          break;
        default:
          cups = 0;
      }

      // Display the result
      document.getElementById('result').innerHTML = 'Cups: ' + cups.toFixed(2);
    }
  </script>
</body>
<html lang="en">
  <h2>Plate Distribution</h2>
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
  <h2>Suggestion</h2>
  <button class="btn" onclick="showDifferences()">Show Differences</button>
<div id="suggestion"></div>
  <div id="suggestion"></div>

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
  function showDifferences() {
    const proteinUser = parseFloat(document.getElementById('proteinRatio').value);
    const vegetableUser = parseFloat(document.getElementById('vegetableRatio').value);
    const fruitUser = parseFloat(document.getElementById('fruitRatio').value);
    const dairyUser = parseFloat(document.getElementById('dairyRatio').value);
    const grainUser = parseFloat(document.getElementById('grainRatio').value);

    const proteinUSDA = 20; // USDA suggested ratio for protein
    const vegetableUSDA = 30; // USDA suggested ratio for vegetables
    const fruitUSDA = 20; // USDA suggested ratio for fruits
    const dairyUSDA = 20; // USDA suggested ratio for dairy
    const grainUSDA = 30; // USDA suggested ratio for grains

    const diffProtein = proteinUser - proteinUSDA;
    const diffVegetable = vegetableUser - vegetableUSDA;
    const diffFruit = fruitUser - fruitUSDA;
    const diffDairy = dairyUser - dairyUSDA;
    const diffGrain = grainUser - grainUSDA;

    const suggestion = document.getElementById('suggestion');

    suggestion.innerHTML = `<p>Numerical Differences:</p>
                            <p>Protein: ${diffProtein.toFixed(2)} cups</p>
                            <p>Vegetable: ${diffVegetable.toFixed(2)} cups</p>
                            <p>Fruit: ${diffFruit.toFixed(2)} cups</p>
                            <p>Dairy: ${diffDairy.toFixed(2)} cups</p>
                            <p>Grain: ${diffGrain.toFixed(2)} cups</p>`;

    // Provide a suggestion based on differences
    if (diffProtein < 0 || diffVegetable < 0 || diffFruit < 0 || diffDairy < 0 || diffGrain < 0) {
      suggestion.innerHTML += "<p>Your ratios are lower than the USDA suggestions. Consider adjusting to meet nutritional recommendations.</p>";
    } else {
      suggestion.innerHTML += "<p>Your ratios are in line with or higher than the USDA suggestions. Great job!</p>";
    }
  }     
    showDifferences();
    // Call necessary functions
    createPieChart(); // Or createUSDAChart() based on the initial action
  </script>
</body>
</html>
