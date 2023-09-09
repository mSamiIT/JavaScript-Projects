'use script';
let weightVal, feetVal, inchesVal, height, finalBMI;

let weightVar = document.querySelector('.weight');
let feetsVar = document.querySelector('.feets');
let inchesVar = document.querySelector('.inches');

let submitVar = document.querySelector('.btnSubmit');
let clearVar = document.querySelector('.btnClear');

let bmi = document.querySelector('.calculatedBMI');
let suggest = document.querySelector('.suggestion');

// functions
function calcBMI() {
  let BMI;
  BMI = (weightVal / (height * height)) * 703;
  return BMI;
}

function suggestFunc() {
  if (finalBMI < 18.5) {
    suggest.innerHTML = `You are under weight`;
  } else if (finalBMI >= 18.5 && finalBMI <= 24.9) {
    suggest.innerHTML = `You are Normal`;
  } else if (finalBMI >= 25 && finalBMI <= 29.9) {
    suggest.innerHTML = `You are over weight`;
  } else if (finalBMI >= 30 && finalBMI <= 34.9) {
    suggest.innerHTML = `You are obese`;
  } else if (finalBMI >= 35) {
    suggest.innerHTML = `You are extremely obese`;
  }
  suggest.style.visibility = "visible";
}

function clearVal() {
  weightVar.value = '';
  feetsVar.value = '';
  inchesVar.value = '';
}

// clear Values
clearVar.addEventListener('click', function (event) {
  clearVal();
  bmi.style.visibility = 'hidden';
  suggest.style.visibility = 'hidden';
  event.preventDefault();
});

// calculate's bmi
submitVar.addEventListener('click', function (event) {
  weightVal = Number(weightVar.value);
  feetVal = Number(feetsVar.value);
  inchesVal = Number(inchesVar.value);
  height = feetVal * 12 + inchesVal;

  if (weightVal != '' && feetVal != '' && inchesVal != '') {
    finalBMI = calcBMI();
    bmi.innerHTML = `Your BMI is: ${finalBMI}`;
    bmi.style.visibility = 'visible';

    suggestFunc();
    clearVal();
  } else {
    bmi.innerHTML = 'Plese fill all the fields';
    bmi.style.visibility = 'visible';
    suggest.style.visibility = 'hidden';
  }
  event.preventDefault();
});
