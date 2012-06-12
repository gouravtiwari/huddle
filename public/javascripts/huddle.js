var roundNum = 1;
var scoreCard = {};

$(document).ready(function() {
	showRandomImages();

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

function incrementRoundString() {
	roundNum++;
	$("#round-start").html(roundNum);
}

function showRandomImages() {
	$("#firstImage").attr("src", getRandomImagePath(10, 19));
	$("#secondImage").attr("src", getRandomImagePath(10, 19));
}

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

function incrementCounter(imageId) {
	if(scoreCard[imageId] === undefined) {
		scoreCard[imageId] = 1;
	}
	else {
		scoreCard[imageId] = scoreCard[imageId] + 1;
	}
}

function decrementCounter(imageId) {
	if(scoreCard[imageId] === undefined) {
		scoreCard[imageId] = -1;
	}
	else {
		scoreCard[imageId] = scoreCard[imageId] - 1;
	}
}

function constructResultsPage() {
	var result = generateOutput();
	str = '<div class="span8 offset2">';
	for(var key in result) {
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

function generateOutput() {
	var output = {},
	keys;
	
	// get the sorted output by key
	scoreCard = sortObjectOnKeys(scoreCard);
	
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
	console.log(deltaKeys);
	output['n/a'] = [];
	for(var i=0; i<deltaKeys.length; i++) {
		output['n/a'].push(getImagePath(deltaKeys[i]));	
	}

	return output;
}