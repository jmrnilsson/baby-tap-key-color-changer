(function(document) {
    'use strict';

	var index = 0;
	var lights;
	var timeOffset = 0;
	
	fetch('/lights').then(function(res) {
		return res.json();
	}).then(function(result) {
		lights = result;
	});

	(function () {
		var timeOffsetStart = new Date().getTime();
		fetch('/time').then(function(res) {
			return res.json();
		}).then(function(result) {
			var timeOffsetEnd = new Date().getTime();
			var averageTime = Math.floor((timeOffsetStart + timeOffsetEnd) / 2);
			timeOffset = averageTime - result;
		});
		
	})();
	
	setInterval(function() {
		var time = new Date().getTime();
		time = time - timeOffset;
		time = Math.floor(time / 1000)

		console.log("trying to change color");
		
		if (lights == null) {
			console.log("lights data is empty");
			return;
		}

		if (timeOffset == null) {
			console.log("time offset is unknown");
			return;
		}

		for(var i = index; i < lights.length; i++) {
			var el = lights[i];
			if (el.time < time) {
				console.log(`time too low ${el.time} < ${time}`);
				continue;
			}

			if (index === i) {
				console.log("color and time already set to this");
				return;
			}

			try {
				console.log("changing");
				setContent(el.color);
			}
			finally {
				return;
			}
		}

	}, 250);

    function setContent(color) {
        var background = color;
        document.body.style.background = background;
        document.querySelector('#background').textContent = background;
    }

}(document));