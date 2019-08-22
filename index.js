'use strict';


function getDogImage(inputNo){
  fetch(`https://dog.ceo/api/breeds/image/random/${inputNo}`)
  .then(response => response.json())
   .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function getDogBreed(inputValue){
  fetch(`https://dog.ceo/api/breed/${inputValue}/images/random`)
   .then(response => response.json())
   .then(responseJson => displayBreed(responseJson));
}

function displayBreed(responseJson) {
  console.log(responseJson);
  if(responseJson.code === 404){
    $('.show').append('<h2>Breed does not exist</h2)');
  }
  else{
    $('.text').show();
    $('.show').append(
      `<img src="${responseJson.message}" class="show">`
    );
  }

}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.text').show();
  let imgAry = responseJson.message;
  imgAry.forEach(img => {
    $('.show').append(
      `<img src="${img}" class="show">`
    );
  });
}



function watchForm() {
  $('#getDogs').submit(event => {
    event.preventDefault();
    $('.show').html('');
    let inputNo = $('#numDogs').val();
    getDogImage(inputNo);
  });
}

function searchBreed(){
  $('#getBreed').submit(event => {
    event.preventDefault();
    $('.show').html('');
    let inputValue = $('#searchbreed').val();
    getDogBreed(inputValue);
  })
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  $('.text').hide();
  watchForm();
  searchBreed();
});