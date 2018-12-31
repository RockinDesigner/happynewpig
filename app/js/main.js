$(document).ready(function () {

    let audio = {};

    $('#hru').on('click', function () {

        $(this).attr('disabled', 'disabled');

        setTimeout(function () {
            $('#hru').removeAttr('disabled', 'disabled');
        }, 1000);

        if("pause" in audio) audio.pause();

        audio = new Audio('../sounds/pig.mp3');

        audio.play();

    });

});