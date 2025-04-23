const secondContainer1 = document.getElementById("sectionColor1");
const secondContainer2 = document.getElementById("sectionColor2");
const secondContainer3 = document.getElementById("sectionColor3");
const cardContainer = document.getElementById("cardContainer");
const mainContainer = document.getElementById("main-container");

const main1 = document.getElementById("main1");
const main2 = document.getElementById("main2");
const main3 = document.getElementById("main3");
const radioBtn1 = document.getElementById("radioBtn1");
const radioBtn2 = document.getElementById("radioBtn2");
const radioBtn3 = document.getElementById("radioBtn3");
secondContainer1.style.display = "none";
secondContainer2.style.display = "block";
secondContainer3.style.display = "none";

const clickRadio = (event) => {
  if (radioBtn1.checked) {
    main1.style.border = "2px solid B3D8A8";
    secondContainer1.style.display = "block";
    secondContainer2.style.display = "none";
    secondContainer3.style.display = "none";
  }
};

const clickRadio2 = (event) => {
  if (radioBtn2.checked) {
    main2.style.border = "2px solid B3D8A8";
    secondContainer2.style.display = "block";
    secondContainer1.style.display = "none";
    secondContainer3.style.display = "none";
  }
};
const clickRadio3 = (event) => {
  if (radioBtn3.checked) {
    main3.style.border = "2px solid B3D8A8";
    secondContainer2.style.display = "none";
    secondContainer1.style.display = "none";
    secondContainer3.style.display = "block";
  }
};
radioBtn1.addEventListener("click", clickRadio);
radioBtn2.addEventListener("click", clickRadio2);

radioBtn3.addEventListener("click", clickRadio3);
