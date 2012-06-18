var roundNum = 5;
var scoreCard = {};

//When any image is clicked this function is called to get two random images
$(document).ready(function() {
  showRandomImages();
  

  //Keep looping through the sets till the last round is reached.....display the results page on the last round.
  $(".themeImage").click(function() {
    if(roundNum < 10) {
      trackImageScore(this);
      showRandomImages();
      incrementRoundString();
    }
    else {
      trackImageScore(this);
      $(".container").html(constructResultsPage());
    }
  });
});


//increment the round numbers after each image click
function incrementRoundString() {
  roundNum++;
  $("#round-start").html(roundNum);
}


//Show random images from the subset.
function showRandomImages() {
  $("#firstImage").attr("src", getRandomImagePath(10, 19));
  $("#secondImage").attr("src", getRandomImagePath(10, 19));
}


//gets the image score for both the generatedImadeIds on page and increments or decrements their counter
function trackImageScore(object) {
  imageIds = getImageNumbersOnPage();
  splitArr = $(object).attr("src").split("/")
    clickedImageName = splitArr[splitArr.length-1];
  clickedImageId = clickedImageName.split(".")[0];
  
  incrementCounter(clickedImageId);
  for (var i = 0; i < imageIds.length; i++) {
    if(clickedImageId.toString() != imageIds[i].toString()) {
      decrementCounter(imageIds[i]);
    }
  }
}

//If the scoreCard index for that object is undefined then assign it to 1, else add 1 to the existing value.
function incrementCounter(imageId) {
  if(scoreCard[imageId] === undefined) {
    scoreCard[imageId] = 1;
  }
  else {
    scoreCard[imageId] = scoreCard[imageId] + 1;
  }
}

//If the scoreCard index for that object is undefined then assign it to 1, else subtract 1 from the existing value.
function decrementCounter(imageId) {
  if(scoreCard[imageId] === undefined) {
    scoreCard[imageId] = -1;
  }
  else {
    scoreCard[imageId] = scoreCard[imageId] - 1;
  }
}

//This function is called when the last round image is clicked, it sorts the image object on the keys and displays the images.
function constructResultsPage() {
  var result = generateOutput();  
  var sortedKeys = getSortedKeysOfObject(result);
  str = '<div class="span8 offset2">';  

  //This loop is looping through the sorted array of numbers.
  for(var i in sortedKeys) {
    var key = sortedKeys[i];
    images = result[key];
    str += '<ul class="thumbnails">';
    str += '<li>'+key+'</li>';
    for(var i=0; i<images.length; i++) {
      str += '<li>';
      str += '<img src="'+images[i]+'" height="100" width="100" class="thumbnail"/>';
      str += '</li>';
    }
    str += '</ul>';
  }
  str += "</div>";
  return str;
}

//generates the output from the scoreCard object and assigns the images that have not been used to the key "n/a" 
function generateOutput() {
  var output = {},
      keys;
  
  // all image path for images that were used
  for(var imageId in scoreCard) {
    scoreCount = scoreCard[imageId].toString();
    if(output[scoreCount] === undefined) {
      output[scoreCount] = []
        output[scoreCount].push(getImagePath(imageId));  
    }
    else {
      output[scoreCount].push(getImagePath(imageId));  
    }
  }
  
  // all image path for images that were not used
  deltaKeys = diffArrays([10,11,12,13,14,15,16,17,18,19], allKeys(scoreCard));
  //console.log(deltaKeys);
  output['n/a'] = [];
  for(var i=0; i<deltaKeys.length; i++) {
    output['n/a'].push(getImagePath(deltaKeys[i]));  
  }
  
  return output;
}
