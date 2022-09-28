const audio = new Audio();
const audioControl = function (command, src) {
    switch (command) {
        case 'play':
            audio.src = src
            audio.pause()
            audio.play()
            break
        case 'stop':
            audio.pause()
            break
        default:
            alert('Something is wrong, review de code!')
    }
}

window.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.button')
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            audioControl('play', `assets/sounds/${this.getAttribute('data-src')}.wav`)
        })
    }
})