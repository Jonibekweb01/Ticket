var elForms = document.querySelector(".js-form");
var elName = document.querySelector(".js-input");
var elMoney = document.querySelector(".js-input2");
var elResults = document.querySelector(".js-results");

var checkMoney = 2000;

elForms.addEventListener("submit", function(e) {
    e.preventDefault();

    var nameValue = elName.value;
    var moneyValue = elMoney.value;

    if (isNaN(moneyValue)) {
        elResults.textContent = `${nameValue} iltimos son kiritng!!!`;
    }
    if (moneyValue >= checkMoney) {
        elResults.textContent = `${nameValue} marhamat borishingiz mumkun`;
    }
    else {
        elResults.textContent = `${nameValue} pulingiz yetarli miqdorda emas!!`;
    }
});


// ----------------------------------------------------------- 2-VAZIFA -----------------------------------------------------------------------



var elForm = document.querySelector(".js-forms");
var elAge = document.querySelector(".js-age");
var elResult = document.querySelector(".js-result");

var unknow = 0;
var minAge = 7;
var middleAge = 20;
var maxAge = 60;

elForm.addEventListener("submit", function(e) {
    e.preventDefault();

    var ageValue = elAge.value;

    if (ageValue > maxAge) {
        elResult.textContent = `Qariyalar uchun chipta bepul😊`;
    }
    else if (ageValue >= unknow && ageValue < minAge) {
        elResult.textContent = `Sizga chipta bepul😊`;
    }
    else if (ageValue >= middleAge && ageValue < maxAge) {
        elResult.textContent = `Sizga chipta 1.600 so'm😃`;
    }
    else if (ageValue >= minAge && ageValue < middleAge) {
        elResult.textContent = `Sizga chipta 1.400 so'm`;
    }
    else {
        elResult.textContent = `Iltoms yoshingizni kiriting!!`;
    }
});


// ----------------------------------------------------------- 3-VAZIFA -----------------------------------------------------------------------


// var elForm = document.querySelector(".js-forms");
// var elAge = document.querySelector(".js-age");
// var elResult = document.querySelector(".js-result");

// var unknow = 0;
// var minAge = 7;
// var middleAge = 20;
// var maxAge = 60;

// elForm.addEventListener("submit", function(e) {
//     e.preventDefault();

//     var ageValue = elAge.value;

//     if (ageValue > maxAge) {
//         elResult.textContent = `Qariyalar uchun chipta bepul😊`;
//     }
//     else {
//         if (ageValue >= unknow && ageValue < minAge) {
//             elResult.textContent = `Sizga chipta bepul😊`;
//         }
//         else if (ageValue >= middleAge && ageValue < maxAge) {
//             elResult.textContent = `Sizga chipta 1.600 so'm😃`;
//         }
//         else if (ageValue >= minAge && ageValue < middleAge) {
//             elResult.textContent = `Sizga chipta 1.400 so'm`;
//         }
//         else {
//             elResult.textContent = `Iltoms yoshingizni kiriting!!`;
//         }
//     }
// });