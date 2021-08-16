import { checkCurrentData } from "./checkCurrentData.js";
import { getAllData } from "./fetch.js";

export const printEachTypeDataFromJson = (currentDoc, type, multipleIndex) => {
  getAllData()
    .filter((val) => val.type === type)
    .map((data, index) => {
      const setcreateUnikID = index + 1 * multipleIndex;
      const {
        getCurrentClass,
        getCurrentColor,
        getCurrentIcon,
        getcurrentFeedBack,
      } = checkCurrentData(data);
      return (currentDoc.innerHTML += `
        <div class="detail-category-graphic-content">
        <div class="category-container">
        <p class="category-paragraph">${data.category}</p>
        </div>
        <div id="graphic-container">
        <canvas id='mychart-${setcreateUnikID}'></canvas>
        </div>
        <div class="detail-znachymist-otsinka-container">
        <div class='detail-znachymist-otsinka-content ${getCurrentClass}'>
          <i class='fas ${getCurrentIcon}'></i>
          <span class="otsonka">${getcurrentFeedBack}</span>
        </div>
        <p class="detail-znachymist-otsinka-description">
          Спостерігається стабільне зниження виручки, що є негативним
          сигналом про скорочення бізнесу
        </p>
        <div class="znachymist-otsinka-znachena-container">
          <div class="znachymist-content">
            <span class="znachymist-text">Значимість: </span>
            <span class="znachymist-value">${data.znachymist}</span>
          </div>
          |
          <div class="otsinka-content">
            <span class="otsinka-text">Оцінка: </span>
            <span class=${getCurrentColor}>${data.otsinka || 0}</span>
          </div>
          |
          <div class="znachena-content">
            <span class="znachena-text">Значення: </span>
            <span class=${getCurrentColor}>${data.pidsumkoveZnachennya}</span>
          </div>
        </div>
        </div>
        </div>
        <div class="detail-bar-separator"></div>
        `);
    });
};
