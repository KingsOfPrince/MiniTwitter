let tweet = document.getElementById("tweet")
console.log(tweet.value);
let tweetbutton = document.getElementById("tweetbutton")

let request;

tweet = new XMLHttpRequest();
tweet.open("GET", "localhost:4200/tweets");
tweet.setRequestHeader("Content-Type", "application/json");
tweet.onreadystatechange = onReadyStateChange;
tweet.send();

function onReadyStateChange(event) {
	//Do nothing if the request has not yet received an answer.
	if (request.readyState < 4) {
		return;
	}

	//Reset the request variable.
	var finishedRequest = request;
	request = null;

	//Show the login overlay if the response code is 401.
	//Will also call the error callback.
	if (finishedRequest.status == 401) {
		if (loginOverlay.className.indexOf("visible") == -1) {
			loginOverlay.classList.add("visible");
		}
	}

	//Call the error callback if the response code is not 200 or 201.
	if (finishedRequest.status != 200 && finishedRequest.status != 201) {
		currentErrorCallback(finishedRequest);

		return;
	}

tweetbutton.addEventListener("click", onButtonClicked )

function onButtonClicked(){
    request = new XMLHttpRequest();
	request.open("POST", "localhost:4200/tweets");
	request.setRequestHeader("Content-Type", "application/json");
	request.onreadystatechange = onReadyChangeState;
	request.send();
}
function onReadyChangeState(event) {
	//Do nothing if the request has not yet received an answer.
	if (request.readyState < 4) {
		return;
	}

	//Reset the request variable.
	var finishedRequest = request;
	request = null;

	//Show the login overlay if the response code is 401.
	//Will also call the error callback.
	if (finishedRequest.status == 401) {
		if (loginOverlay.className.indexOf("visible") == -1) {
			loginOverlay.classList.add("visible");
		}
	}

	//Call the error callback if the response code is not 200 or 201.
	if (finishedRequest.status != 200 && finishedRequest.status != 201) {
		currentErrorCallback(finishedRequest);

		return;
    }}}