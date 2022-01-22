var btm = document.querySelector("#btm");
var timer = document.querySelector("#timer");
var click = document.querySelector("#click");
var score = document.querySelector("#score");

var time = 60;
var randomNum = 0;

function initialize() {
	var temp = ``;

	for (var i = 0; i <= 97; i++) {
		temp += `<div class="bubble">
                ${Math.floor(Math.random() * 100)}
            </div>`;
	}
	btm.innerHTML = temp;
	getNewNumber();
}

function timerFunc() {
	var forClear = setInterval(function () {
		if (time < 0) {
			clearInterval(forClear);
			console.log(time);
			btm.textContent = "GAME OVER !";
		} else {
			timer.textContent = time;
			time--;
		}
	}, 1000);
}

function getNewNumber() {
	randomNum = Math.floor(Math.random() * 100);
	click.textContent = randomNum;
}

function btmListener() {
	btm.addEventListener("click", function (dets) {
		console.log(dets.target.classList);
		scoreUpdate(Number(dets.target.innerText));
	});
}

function scoreUpdate(val) {
	if (randomNum === val) {
		var newScore = Number(score.textContent);
		newScore += 10;
		score.textContent = newScore;
		initialize();
		getNewNumber();
	} else {
		initialize();
		getNewNumber();
	}
}

initialize();
timerFunc();
btmListener();
