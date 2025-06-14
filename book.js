
$(window).ready(function () {
    $('#book').turn({
        display: 'single',
        acceleration: true,
        duration: 1000,
        gradients: true,
        when: {
            turned: function (e, page,) {
                // console.log(e)
            }
        },
        peel: 'br',
    });
    $('#book').turn('peel', 'br');
});

function nextPage() {
    $('#book').turn('next');
}

function prevPage() {
    $('#book').turn('previous');
}

window.addEventListener('keydown', function (e) {

    if (e.keyCode == 37)
        prevPage();
    else if (e.keyCode == 39)
        nextPage();

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
        nextPage();
    else if (y > prevY)
        prevPage();
    else if (x > w / 2)
        nextPage();
    else
        prevPage();

});

var lastCall = 0;
const delay = 800;
window.addEventListener('wheel', function (e) {
    const now = Date.now();
    if (now - lastCall >= delay) {
        if (e.deltaY > 0)
            nextPage();
        else
            prevPage();
        lastCall = now
    }
})
