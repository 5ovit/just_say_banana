
$(window).ready(function () {
    $('#book').turn({
        display: 'single',
        acceleration: true,
        duration: 4000,
        gradients: true,
        when: {
            turned: function (e, page,) {
                // console.log(e)
            }
        }
    });
    $('#book').turn('peel', 'br');
});


window.addEventListener('keydown', function (e) {

    if (e.keyCode == 37)
        $('#book').turn('previous');
    else if (e.keyCode == 39)
        $('#book').turn('next');

});

let prevX = 0
let prevY = 0

window.addEventListener('pointerdown', function (e) {
    prevX = e.clientX;
    prevY = e.clientY;
    // console.log(e)
})

window.addEventListener('pointerup', function (e) {

    // console.log(e);
    let w = window.innerWidth;
    let h = window.innerHeight;
    let y = e.clientY;
    let x = e.clientX;

    if (y < prevY)
        $('#book').turn('next');
    else if (y > prevY)
        $('#book').turn('previous');
    else if (x > w / 2)
        $('#book').turn('next');
    else
        $('#book').turn('previous');

});

var lastCall = 0;
const delay = 800;
window.addEventListener('wheel', function (e) {
    const now = Date.now();
    if (now - lastCall >= delay) {
        if (e.deltaY > 0)
            $('#book').turn('next');
        else
            $('#book').turn('previous');
        lastCall = now
    }
})
