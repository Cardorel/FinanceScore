import { config } from "./config.js";

export const myChart = (
  ctx,
  gradientStroke,
  labels,
  znachennya,
  borderCurrentColor
) => {
  let configuration = config(
    gradientStroke,
    labels,
    znachennya,
    borderCurrentColor
  );
  new Chart(ctx, configuration);
};
