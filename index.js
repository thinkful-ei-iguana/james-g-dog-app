function getDogImages(number) {
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(responseJson => displayImages(responseJson));
}

function handleImagesRequest() {
  $('form').on('submit', event => {
    event.preventDefault();
    $('.js-dogGallery').html('');
    const number = $('.numberOfDogs').val();
    console.log(`Number of images: ${number}`);
    if (number < 1 || number > 50) {
      alert('Enter a number between 1 and 50');
    } else {
      getDogImages(number);
    }
  });
}

function displayImages(jsonData) {
  jsonData.message.forEach(src => {
    console.log(src);
    $('.js-dogGallery').append(`<img src='${src}' alt='dog''>`);
  });
}


function main() {
  handleImagesRequest();
}

$(main);