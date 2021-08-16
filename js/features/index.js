import { getAllData } from "./fetch.js";
import { paintGraphic } from "./paintGraphic.js";
import { printEachTypeDataFromJson } from "./printDataFromJson.js";

window.onload = function () {
  const dilovaContainer = document.querySelector(
    ".dilova-akt-detail .detail-category-graphic-container"
  );
  const rentabilnistContainer = document.querySelector(
    ".rentabilnist-detail .detail-category-graphic-container"
  );
  const effektvnistContainer = document.querySelector(
    ".Efektyvnist-detail .detail-category-graphic-container"
  );
  const finZdorovyaContainer = document.querySelector(
    ".finZdorovya-detail .detail-category-graphic-container"
  );
  //print type dilovaAktyvnist
  printEachTypeDataFromJson(dilovaContainer, "dilovaAktyvnist", 1);
  //print type rentabilnist
  printEachTypeDataFromJson(rentabilnistContainer, "rentabelnist", 20);
  //print effektvnist
  printEachTypeDataFromJson(effektvnistContainer, "operEfektyvnist", 150);
  //finZdorovya-detail
  printEachTypeDataFromJson(finZdorovyaContainer, "finZdorovya", 250);

  //paint graphic for dilovaAktyvnist
  getAllData()
    .filter((val) => val.type === "dilovaAktyvnist")
    .forEach((data, index) => {
      const setcreateUnikID = index + 1 * 1;
      paintGraphic(document.getElementById(`mychart-${setcreateUnikID}`), data);
    });
  //paint graphic for rentabelnist
  getAllData()
    .filter((val) => val.type === "rentabelnist")
    .forEach((data, index) => {
      const setcreateUnikID = index + 1 * 20;
      paintGraphic(document.getElementById(`mychart-${setcreateUnikID}`), data);
    });
  //paint graphic for operEfektyvnist
  getAllData()
    .filter((val) => val.type === "operEfektyvnist")
    .forEach((data, index) => {
      const setcreateUnikID = index + 1 * 150;
      paintGraphic(document.getElementById(`mychart-${setcreateUnikID}`), data);
    });
  // paint graphic for finZdorovya
  getAllData()
    .filter((val) => val.type === "finZdorovya")
    .forEach((data, index) => {
      const setcreateUnikID = index + 1 * 250;
      paintGraphic(document.getElementById(`mychart-${setcreateUnikID}`), data);
    });
};
