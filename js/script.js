let arr = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
let cityList = document.querySelector('.city-list')


function showListOnPage (arr, domElement) {

  arr.map(function (city) {
        domElement.innerHTML += `<li>${city}</li>`
        })
}

showListOnPage(arr, cityList);
