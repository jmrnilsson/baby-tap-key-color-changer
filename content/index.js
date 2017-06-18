(function(document) {
    'use strict';

    function randomColor() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    }

    function setContent(event) {
        var e = event || window.event;
        var charCode = e.which || e.keyCode;
        var char = String.fromCharCode(charCode);
        var color = randomColor();
        var background = randomColor();
        var el = document.querySelector('h1');
        var content = el.textContent;
        if (content.length > 5) {
            content = content.slice(1, content.length - 5);
            content += char;
        }
        else {
            content += char;
        }
        el.textContent = content;
        el.style.color = color;
        document.body.style.background = background;
        document.querySelector('#color').textContent = color;
        document.querySelector('#background').textContent = background;
    }

    document.onkeypress = setContent;
}(document));