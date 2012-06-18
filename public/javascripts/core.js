var generatedNumbersOnPage = [];

if (!window.console) console = {log: function() {}};

function getRandomImageId(startNum, endNum) {
  return Math.floor(startNum+(Math.random()*(endNum-startNum)));
}

function getRandomImagePath(startNum, endNum) {
  var number = getRandomImageId(startNum, endNum);
  
  if(generatedNumbersOnPage.length == 0) {
    generatedNumbersOnPage.push(number);
  }
  else if(generatedNumbersOnPage.length == 1) {
    while(number == generatedNumbersOnPage[0]) {
      number = getRandomImageId(startNum, endNum);    
    }
    generatedNumbersOnPage.push(number);
  }
  else if(generatedNumbersOnPage.length == 2) {
    generatedNumbersOnPage = [];
    generatedNumbersOnPage.push(number);  
  }
  
  return getImagePath(number);
}

function getImageNumbersOnPage() {
  return generatedNumbersOnPage;
}

function getImagePath(imageNum) {
  return "/images/"+imageNum+".jpg";  
}

function allGeneratedImageNumbers() {
  console.log(generatedNumbers);
  $.unique(generatedNumbers);
}

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