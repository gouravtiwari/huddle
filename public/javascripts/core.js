var generatedNumbersOnPage = [];

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

function sortObjectOnKeys(object) {
	var sortedObject = {},
	key, keys = [];

	
	keys = allKeys(object)
	keys.sort();

	for (key = 0; key < keys.length; key++) {
		sortedObject[keys[key]] = object[keys[key]];
	}
	return sortedObject;
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
console.log(firstArr)
console.log(secondArr)
  var strA = ":" + firstArr.join("::") + ":";
  var strB = ":" +  secondArr.join(":|:") + ":";

  var reg = new RegExp("(" + strB + ")","gi");
  var strDiff = strA.replace(reg,"").replace(/^:/,"").replace(/:$/,"");
  var arrDiff = strDiff.split("::");

  return arrDiff;
}