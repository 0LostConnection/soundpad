window.addEventListener('DOMContentLoaded', function () {
    var audio = new Audio();
    var socket = io();

    socket.on('play-audio', function (src) {
        console.log("playing: " + src);
        audio.src = src;
        audio.pause();
        audio.play();
    });

    socket.on('stop-audio', function () {
        audio.pause();
    });

    document.getElementById('stop').addEventListener('click', function () {
        socket.emit('stop-audio');
    });

    var buttons = document.querySelectorAll('.button');
    for(var i = 0; i < buttons.length; i++) {
        console.log(buttons[i].getAttribute('data-src'));
        buttons[i].addEventListener('click', function () {
            socket.emit('play-audio', '/assets/sounds/' + this.getAttribute('data-src'));
        });
    }
});