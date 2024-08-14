
// 設備借用週統計
new Chart(document.getElementById("chartWeek"), {
  type: "line",
  data: {
    labels: ["週一", "週二", "週三", "週四", "週五", "週六", "週日"],
    datasets: [
      {
        data: [30, 45, 60, 15, 18, 20, 15 ],
        label: "借閱數量(台）",
        borderColor: "#ba6000",
        backgroundColor: "#ba6000",
        pointRadius: 4,
        pointHoverRadius: 4,
        fill: false,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    elements: {
      line: {
        tension: 0,
      },
    },
    label: {},
    legend: {
      display: true,
      position: "bottom",
      labels: {
        // boxWidth: 50,
        fontSize: 16,
        fontColor: "#534741",
        fontStyle: "normal",
        padding: 16,
      },
    },
    tooltips: {
      mode: "point",
      backgroundColor: "#534741",
      fontColor: "#222222",
      yPadding: 10,
      xPadding: 10,
      titleAlign: "center",
      bodyAlign: "center",
      displayColors: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontSize: 14,
            fontColor: "#534741",
          },
          gridLines: {
            color: "#a3948b",
            zeroLineColor: "#a3948b",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontSize: 14,
            fontColor: "#534741",
          },
          gridLines: {
            color: "#a3948b",
            zeroLineColor: "#a3948b",
          },
        },
      ],
    },
  },
});


var ctx = document.getElementById('chartUser1').getContext('2d');

var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [11.2, 12.8],
      backgroundColor: ['#ffaf00', '#ba6000'],
      borderWidth: [0, 0],
      hoverBackgroundColor: ['#ffaf00', '#ba6000'],
      hoverBorderColor: ['#ffaf00', '#ba6000'],
      hoverBorderWidth: [0, 0, 0]
    }],
    labels: [
      '女性', '男性'
    ]
  },
  options: {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    animation: {
      animateRotate: true,
      animateScale: true
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontSize: 16,
        fontColor: "#534741",
        fontStyle: "normal",
        padding: 16,
      },
    },
    tooltips: {
      enabled: false
    },
    plugins: {
      labels: {
        fontSize: 16,
        precision: 1,
        fontColor: ['black', 'black',],
        position: 'border'
      }
    }
  }
})

// 設備借用週統計
new Chart(document.getElementById("chartUser2"), {
  type: "line",
  data: {
    labels: ["0歲", "10歲", "20歲", "30歲", "40歲", "50歲", "60歲", "70歲", "80歲", "90歲"],
    datasets: [
      {
        data: [30, 45, 60, 15, 18, 20, 15, 18, 20, 15 ],
        label: "借閱數量(台）",
        borderColor: "#ba6000",
        backgroundColor: "#ba6000",
        pointRadius: 4,
        pointHoverRadius: 4,
        fill: false,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    elements: {
      line: {
        tension: 0,
      },
    },
    label: {},
    legend: {
      display: true,
      position: "bottom",
      labels: {
        // boxWidth: 50,
        fontSize: 16,
        fontColor: "#534741",
        fontStyle: "normal",
        padding: 16,
      },
    },
    tooltips: {
      mode: "point",
      backgroundColor: "#534741",
      fontColor: "#222222",
      yPadding: 10,
      xPadding: 10,
      titleAlign: "center",
      bodyAlign: "center",
      displayColors: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontSize: 14,
            fontColor: "#534741",
          },
          gridLines: {
            color: "#a3948b",
            zeroLineColor: "#a3948b",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontSize: 14,
            fontColor: "#534741",
          },
          gridLines: {
            color: "#a3948b",
            zeroLineColor: "#a3948b",
          },
        },
      ],
    },
  },
});