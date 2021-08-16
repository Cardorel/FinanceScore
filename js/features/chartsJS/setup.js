export const dataChart = (
  gradientStroke,
  labels,
  znachennya,
  borderCurrentColor
) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Finance score",
        backgroundColor: gradientStroke,
        borderColor: borderCurrentColor,
        data: znachennya,
        fill: true,
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        pointBorderColor: "#ffffff",
        datalabels: {
          color: "#ffffff",
          anchor: "end",
          align: "top",
          offset: 2,
        },
      },
    ],
  };

  return data;
};
