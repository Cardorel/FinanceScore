import {
  dataChart
} from "./setup.js";

export const config = (
  gradientStroke,
  labels,
  znachennya,
  borderCurrentColor
) => {
  const myConfig = {
    type: "line",
    data: dataChart(gradientStroke, labels, znachennya, borderCurrentColor),
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      plugins: {
        title: {
          display: false,
          text: "Grid Line Settings",
        },
        legend: {
          position: "bottom",
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: true,
            drawBorder: true,
            drawOnChartArea: true,
            drawTicks: false,
            color: "#CCCCCC",
          },
          ticks: {
            color: "#fff",
            crossAlign: "far",
            padding: 13,
          },
        },
        y: {
          grid: {
            drawBorder: true,
            drawTicks: false,
            color: "#CCCCCC",
          },
          ticks: {
            display: false,
          },
        },
      },
    },
  };

  return myConfig;
};