
$(window).ready(function () {
    $('#book').turn({
        display: 'single',
        acceleration: true,
        duration: 4000,
        gradients: true,
        when: {
            turned: function (e, page,) {
                console.log(e)
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

