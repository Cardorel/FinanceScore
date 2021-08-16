import { myChart } from "./chartsJS/action.js";
import {
  gradientStrokeAttention,
  gradientStrokeError,
  gradientStrokeSuccess,
} from "./chartsJS/setGradientStroke.js";

export const paintGraphic = (ctx, data) => {
  let context = ctx.getContext("2d");
  if (data.otsinka < 5) {
    myChart(
      context,
      gradientStrokeError(context),
      data.dynamika.map((dyn) => dyn.rik).sort((a, b) => a - b),
      data.dynamika.map((dyn) => dyn.znachennya || 0),
      "#FF848B"
    );
  } else if (data.otsinka >= 5 && data.otsinka < 10) {
    myChart(
      context,
      gradientStrokeAttention(context),
      data.dynamika.map((dyn) => dyn.rik).sort((a, b) => a - b),
      data.dynamika.map((dyn) => dyn.znachennya || 0),
      "#FF9E5B"
    );
  } else {
    myChart(
      context,
      gradientStrokeSuccess(context),
      data.dynamika.map((dyn) => dyn.rik).sort((a, b) => a - b),
      data.dynamika.map((dyn) => dyn.znachennya || 0),
      "#04F5B5"
    );
  }
};
