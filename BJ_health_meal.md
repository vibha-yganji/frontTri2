---
layout: base
title: Food Tracker
permalink: "/food/"
search_exclude: false
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cups Converter</title>
</head>
<body>

<h2>Cups Converter</h2>
<div>
    <label for="weightInput">Enter Weight:</label>
    <input type="number" id="weightInput" onchange="convertToCups()">
    <select id="weightUnit" onchange="convertToCups()">
        <option value="grams">Grams</option>
        <option value="pounds">Pounds</option>
    </select>
</div>
<div>
    <label for="cupsOutput">Cups:</label>
    <span id="cupsOutput"></span>
</div>

<script>
function convertToCups() {
    const weightInput = parseFloat(document.getElementById('weightInput').value) || 0;
    const weightUnit = document.getElementById('weightUnit').value;

    let cupsOutput;
    if (weightUnit === 'grams') {
        // Standard density assumed for grams to cups conversion (approximate)
        const densityGramsToCups = 0.00422675; // 1 gram ≈ 0.00422675 cups
        cupsOutput = weightInput * densityGramsToCups;
    } else if (weightUnit === 'pounds') {
        // Standard density assumed for pounds to cups conversion (approximate)
        const densityPoundsToCups = 2.08635; // 1 pound ≈ 2.08635 cups
        cupsOutput = weightInput * densityPoundsToCups;
    }

    document.getElementById('cupsOutput').textContent = cupsOutput.toFixed(2);
}
</script>

</body>
</html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Food Group Pie Chart</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<style>
    canvas {
        display: block;
        margin: auto;
    }
</style>
</head>
<body>

<h2>Enter the quantities of food for each group:</h2>
<div>
    <label for="grains">Grains:</label>
    <input type="number" id="grains" name="grains" step="any">
</div>
<div>
    <label for="vegetables">Vegetables:</label>
    <input type="number" id="vegetables" name="vegetables" step="any">
</div>
<div>
    <label for="fruits">Fruits:</label>
    <input type="number" id="fruits" name="fruits" step="any">
</div>
<div>
    <label for="dairy">Dairy:</label>
    <input type="number" id="dairy" name="dairy" step="any">
</div>
<div>
    <label for="protein">Protein:</label>
    <input type="number" id="protein" name="protein" step="any">
</div>
<button onclick="generateCharts()">Generate Charts</button>
<p id="coinMessage"></p>

<div>
    <h2>Your Food Groups Distribution</h2>
    <canvas id="userPieChart" width="400" height="400"></canvas>
</div>

<div>
    <h2>USDA Recommended Food Group Ratios</h2>
    <canvas id="usdaPieChart" width="400" height="400"></canvas>
</div>

<script>
function generateCharts() {
    const userFoodGroups = ['Grains', 'Vegetables', 'Fruits', 'Dairy', 'Protein'];
    const userQuantities = [];
    const usdaRatios = [0.3, 0.4, 0.2, 0.1, 0.1];
    const similarityThreshold = 0.4; // Adjust the threshold as needed
    let similar = true;

    userFoodGroups.forEach(group => {
        const quantity = parseFloat(document.getElementById(group.toLowerCase()).value) || 0;
        userQuantities.push(quantity);
    });

    const userTotal = userQuantities.reduce((acc, val) => acc + val, 0);

    userFoodGroups.forEach((group, index) => {
        const userRatio = userQuantities[index] / userTotal;
        const usdaRatio = usdaRatios[index];
        if (Math.abs(userRatio - usdaRatio) > similarityThreshold) {
            similar = false;
            return;
        }
    });

    const userPieChartCanvas = document.getElementById('userPieChart');
    const userPieChartCtx = userPieChartCanvas.getContext('2d');
    const userPieChart = new Chart(userPieChartCtx, {
        type: 'pie',
        data: {
            labels: userFoodGroups,
            datasets: [{
                data: userQuantities,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)'
                ]
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Your Food Groups Distribution'
            }
        }
    });

    const usdaFoodGroups = ['Grains', 'Vegetables', 'Fruits', 'Dairy', 'Protein'];
    const usdaPieChartCanvas = document.getElementById('usdaPieChart');
    const usdaPieChartCtx = usdaPieChartCanvas.getContext('2d');
    const usdaPieChart = new Chart(usdaPieChartCtx, {
        type: 'pie',
        data: {
            labels: usdaFoodGroups,
            datasets: [{
                data: usdaRatios,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)'
                ]
            }]
        },
        options: {
            title: {
                display: true,
                text: 'USDA Recommended Food Group Ratios'
            }
        }
    });

    const coinMessage = document.getElementById('coinMessage');
    if (similar) {
        coinMessage.textContent = 'Congratulations! You earned a coin!';
    } else {
        coinMessage.textContent = '';
    }
}
</script>

</body>
</html>

