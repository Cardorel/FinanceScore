let getCurrentClass = "";
let getcurrentFeedBack = "";
let getCurrentIcon = "";
let getCurrentColor = "";

export const checkCurrentData = (data) => {
  if (data.otsinka < 5) {
    getCurrentClass = "feedback-error-otsinka";
    getcurrentFeedBack = "Негативна оцінка";
    getCurrentIcon = "fa-arrow-down";
    getCurrentColor = "negatvna-otsinka";
  } else if (data.otsinka >= 5 && data.otsinka < 10) {
    getCurrentClass = "feedback-acceptable-otsinka";
    getcurrentFeedBack = "Прийнятна оцінка";
    getCurrentIcon = "fa-arrows-alt-h";
    getCurrentColor = "acceptable-otsinka";
  } else {
    getCurrentClass = "feedback-success-otsinka";
    getcurrentFeedBack = "Позитивна оцінка";
    getCurrentIcon = "fa-arrow-up";
    getCurrentColor = "opstvn-otsinka";
  }

  return {
    getCurrentClass,
    getcurrentFeedBack,
    getCurrentIcon,
    getCurrentColor,
  };
};
