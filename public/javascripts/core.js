var generatedNumbersOnPage = [];

if (!window.console) console = {log: function() {}};


//Generate a random image id from a given set of images, which between 1 and 19 right now.
function getRandomImageId(startNum, endNum) {
  return Math.floor(startNum+(Math.random()*(endNum-startNum)));
}

//Function to fetch the random image path depending on the randomImadeId generated, uses the above function.
function getRandomImagePath(startNum, endNum) {
  var number = getRandomImageId(startNum, endNum);

  //If function is called by the firstImage then the first random image is pushed.
  if(generatedNumbersOnPage.length == 0) {
    generatedNumbersOnPage.push(number);
  }

  //If there already exists one number in the generatedNumbersOnPage then generate another number till they both are different.
  else if(generatedNumbersOnPage.length == 1) {
    while(number == generatedNumbersOnPage[0]) {
      number = getRandomImageId(startNum, endNum);    
    }
    generatedNumbersOnPage.push(number);
  }

  //If there are two image numbers then initialize the array to have no variables and allocate the first index.
  else if(generatedNumbersOnPage.length == 2) {
    generatedNumbersOnPage = [];
    generatedNumbersOnPage.push(number);  
  }

  return getImagePath(number);
}

//returning the image numbers on page(array)
function getImageNumbersOnPage() {
  return generatedNumbersOnPage;
}

//Add the path of actual image to filename to get the whole path
function getImagePath(imageNum) {
  return "/images/"+imageNum+".jpg";  
}


function allGeneratedImageNumbers() {
  console.log(generatedNumbers);
  $.unique(generatedNumbers);
}

//Sorts the associated array and returns an array of sorted keys in desecnding order.
function getSortedKeysOfObject(obj) {
  return allKeys(obj).sort(function (a, b) {
    if (isNaN(a) && isNaN(b)) {
      return 0;
    } else if (isNaN(a) && !isNaN(b)) {
      return 1;
    } else if (!isNaN(a) && isNaN(b)) {
      return -1;
    } else {
      return b - a;
    }
  });
}

//Take an object and add the keys into an array
function allKeys(object) {
  var key, 
      keys = [];
  
  for (key in object) {
    if (object.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}


//compares the two given arrays and gives the difference, used to get the images that have not been used.
function diffArrays(firstArr, secondArr) {
  console.log(firstArr);
  console.log(secondArr);
  var strA = ":" + firstArr.join("::") + ":";
  var strB = ":" +  secondArr.join(":|:") + ":";
  
  var reg = new RegExp("(" + strB + ")","gi");
  var strDiff = strA.replace(reg,"").replace(/^:/,"").replace(/:$/,"");
  var arrDiff = strDiff.split("::");
  
  return arrDiff;
}