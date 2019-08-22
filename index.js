'use strict';


function getDogImage(inputNo){
  fetch(`https://dog.ceo/api/breeds/image/random/${inputNo}`)
  .then(response => response.json())
   .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  let imgAry = responseJson.message;
  imgAry.forEach(img => {
    $('.show').append(
      `<img src="${img}" class="show">`
    );
  });
}



function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let inputNo = $('#numDogs').val();
    getDogImage(inputNo);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});