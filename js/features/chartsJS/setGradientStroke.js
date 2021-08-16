const setGradientStroke = (ctx, color1, color2) => {
  const gradientStroke = ctx.createLinearGradient(0, 50, 0, 100);
  gradientStroke.addColorStop(0, color1);
  gradientStroke.addColorStop(1, color2);

  return gradientStroke;
};

export const gradientStrokeError = (ctx) =>
  setGradientStroke(ctx, "rgba(255, 132, 139, 0.4)", "rgba(255, 132, 139, 0");
export const gradientStrokeSuccess = (ctx) =>
  setGradientStroke(ctx, "rgba(4, 245, 181, 0.22)", "rgba(4, 245, 181, 0)");
export const gradientStrokeAttention = (ctx) =>
  setGradientStroke(ctx, "rgba(255, 158, 91, 0.3)", "rgba(255, 158, 91, 0)");
