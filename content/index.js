(function(document) {
    'use strict';

    function randomColor() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    }

    function setContent(key) {
        var color = randomColor();
        var background = randomColor();
        var char = String.fromCharCode(key.keyCode);
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

    document.onkeyup = setContent;
}(document));