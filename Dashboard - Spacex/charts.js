var progressData = {
  labels: ["1 ", "2", "3", "4", "5", "6", "7"],
  datasets: [
    {
      label: "Planned",
      data: [57, 114, 171, 228, 285, 342, 400],
      backgroundColor: [
        "rgba(167,169,172, 0.2)",
        "rgba(167,169,172, 0.2)",
        "rgba(167,169,172, 0.2)",
        "rgba(167,169,172, 0.2)",
        "rgba(167,169,172, 0.2)",
        "rgba(167,169,172, 0.2)",
        "rgba(167,169,172, 0.2)",
        "rgba(167,169,172, 0.2)",
      ],
      borderColor: [
        "rgba(30, 139, 195, 1)",
        "rgba(30, 139, 195, 1)",
        "rgba(30, 139, 195, 1)",
        "rgba(30, 139, 195, 1)",
        "rgba(30, 139, 195, 1)",
        "rgba(30, 139, 195, 1)",
        "rgba(30, 139, 195, 1)",
        "rgba(30, 139, 195, 1)",
      ],
      borderWidth: 1,
    },
    {
      label: "Traveled",
      data: [50, 140, 170, 210, 300],
      backgroundColor: [
        "rgba(33, 189, 163, 0.6)",
        "rgba(33, 189, 163, 0.6)",
        "rgba(33, 189, 163, 0.6)",
        "rgba(33, 189, 163, 0.6)",
        "rgba(33, 189, 163, 0.6)",
        "rgba(33, 189, 163, 1)",
      ],
      borderColor: [
        "rgba(33, 189, 163, 1)",
        "rgba(33, 189, 163, 1)",
        "rgba(33, 189, 163, 1)",
        "rgba(33, 189, 163, 1)",
        "rgba(33, 189, 163, 1)",
        "rgba(33, 189, 163, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

var speedPastData = {
  labels: ["1 ", "2", "3", "4", "5"],
  datasets: [
    {
      label: "Speed so far",
      data: [111, 100, 109, 102, 120],
      backgroundColor: [
        "rgba(33, 189, 163, 0.6)",
        "rgba(33, 189, 163, 0.6)",
        "rgba(33, 189, 163, 0.6)",
        "rgba(33, 189, 163, 0.6)",
        "rgba(33, 189, 163, 0.6)",
        "rgba(33, 189, 163, 1)",
      ],
      borderColor: [
        "rgba(33, 189, 163, 1)",
        "rgba(33, 189, 163, 1)",
        "rgba(33, 189, 163, 1)",
        "rgba(33, 189, 163, 1)",
        "rgba(33, 189, 163, 1)",
        "rgba(33, 189, 163, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

var distanceData = {
  labels: ["Rocket 1", "Rocket 2", "Rocket 3", "Rocket 4"],
  datasets: [
    {
      label: "Power",
      barPercentage: 0.5,
      barThickness: 6,
      maxBarThickness: 8,
      minBarLength: 2,
      data: [12, 10, 26, 20, 10],
      backgroundColor: [
        "rgba(33, 189, 163, 1)",
        "rgba(33, 189, 163, 1)",
        "rgba(33, 189, 163, 1)",
        "rgba(33, 189, 163, 1)",
      ],
    },
    {
      label: "Usage",
      barPercentage: 0.5,
      barThickness: 6,
      maxBarThickness: 8,
      minBarLength: 2,
      data: [7, 13, 4, 9, 11],
      backgroundColor: [
        "rgba(102, 102, 102, 0.4)",
        "rgba(102, 102, 102, 0.4)",
        "rgba(102, 102, 102, 0.4)",
        "rgba(102, 102, 102, 0.4)",
      ],
    },
  ],
};

var waterData = {
  datasets: [
    {
      data: [15, 20, 12],
      backgroundColor: [
        "rgba(102, 102, 102, 0.4)",
        "rgba(33, 189, 163, 1)",
        "rgba(30, 139, 195, 1)",
      ],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Used", "Available", "Backup"],
};

var thermoData = {
  datasets: [
    /* Outer doughnut data starts*/
    {
      data: [10, 20, 30],
      backgroundColor: [
        "rgba(102, 102, 102, 0.4)",
        "rgba(33, 189, 163, 1)",
        "rgba(30, 139, 195, 1)",
      ],
      label: "Doughnut 1",
    },
    /* Outer doughnut data ends*/
    /* Inner doughnut data starts*/
    {
      data: [45, 25, 11],
      backgroundColor: [
        "rgba(102, 102, 102, 0.4)",
        "rgba(33, 189, 163, 1)",
        "rgba(30, 139, 195, 1)",
      ],
      label: "Doughnut 2",
    },
    /* Inner doughnut data ends*/
  ],
  labels: ["Too cold", "Normal", "Overheat"],
};

var oxygenData = {
  labels: ["Success", "Warning", "Warning", "Error"],
  datasets: [
    {
      data: [0, 1, 2, 4],
      value: 4,
      backgroundColor: [        
      "rgba(102, 102, 102, 0.4)",
      "rgba(33, 189, 163, 1)",
      "rgba(30, 139, 195, 1)",],
      borderWidth: 2,
    },
  ],
};

var sleepData = {
  labels: ["Sarah", "John", "Nathan", "System"],
  datasets: [
    {
      label: "Hours",
      data: [15, 10, 12, 2],
      
    },
  ],
};

var foodData = {
  labels: ["one", "two", "three", "four"],
  datasets: [
    {
      label: "one",
      barPercentage: 0.5,
      barThickness: 6,
      maxBarThickness: 8,
      minBarLength: 2,
      data: [8, 12, 20, 26],
    },
    {
      label: "two",
      barPercentage: 0.5,
      barThickness: 6,
      maxBarThickness: 8,
      minBarLength: 2,
      data: [10, 12, 17, 23],
    },
  ],
};

var speedData = {
  labels: ["Success", "Warning", "Warning", "Error"],
  datasets: [
    {
      data: [0, 1, 2, 4],
      value: 4,
      backgroundColor: [        
      "rgba(102, 102, 102, 0.4)",
      "rgba(33, 189, 163, 1)",
      "rgba(30, 139, 195, 1)",],
      borderWidth: 2,
    },
  ],
};

var progressOptions = {
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Maand",
        },
      },
    ],

    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Miljoen",
        },
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

var speedPastOptions = {};
var waterOptions = {};
var distanceOptions = {};
var foodOptions = {};
var thermoOptions = {};
var sleepOptions = {};
var speedOptions = {};
var oxygenOptions = {};

function createNewChart(ctx, type, data, options = {}) {
  var chartData = {
    type: type,
    data: data,
    options: options,
  };

  return new Chart(ctx, chartData);
}

createNewChart("progressChart", "line", progressData, progressOptions);
createNewChart("speedpastChart", "line", speedPastData, speedPastOptions);
createNewChart("waterChart", "pie", waterData, waterOptions);
createNewChart("distanceChart", "bar", distanceData, distanceOptions);
createNewChart("foodChart", "bar", foodData, foodOptions);
createNewChart("thermoChart", "pie", thermoData, thermoOptions);
createNewChart("sleepChart", "radar", sleepData, sleepOptions);
createNewChart("speedChart", "gauge", speedData, speedOptions);
createNewChart("oxygenChart", "gauge", oxygenData, oxygenOptions);
