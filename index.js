'use strict';
let numOfDog;

function displayResults(responseJson) {
  console.log(responseJson.message);
}


function getDogImage() {
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDog}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    numOfDog = $('#number-input').val();
    getDogImage();
  });
}

$(watchForm);