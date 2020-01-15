(function(document) {
    'use strict';

	var index = 0;
	var lights;
	
	fetch('/lights').then(function(res) {
		var el = document.querySelector('h1');
		el.textContent = "fetched..";
		return res.json();
	}).then(function(result) {
		lights = result;
	}); 
    // function randomColor() {
    //     return '#'+Math.floor(Math.random()*16777215).toString(16);
	// }
	
	setInterval(function() {
		var time = Math.floor(new Date().getTime() / 1000);

		console.log("trying to change color");
		
		if (lights == null) {
			console.log("lights data is empty");
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
        // var e = event || window.event;
        // var charCode = e.which || e.keyCode;
        // var char = String.fromCharCode(charCode);
        //var color = randomColor();
        var background = color;
        // var el = document.querySelector('h1');
        // var content = el.textContent;
        // if (content.length > 5) {
        //     content = content.slice(1, content.length - 5);
        //     content += char;
        // }
        // else {
        //     content += char;
        // }
        // el.textContent = content;
        // el.style.color = color;
        document.body.style.background = background;
        //document.querySelector('#color').textContent = color;
        document.querySelector('#background').textContent = background;
    }

    //document.onkeypress = setContent;
}(document));