$(document).ready(function () {

    let audio = {};

    $('#hru').on('click', function () {

        $(this).attr('disabled', 'disabled');

        let arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

        let rand = Math.floor(Math.random() * arr.length);

        $('.hru-title p').text(arr[rand]);

        setTimeout(function () {
            $('#hru').removeAttr('disabled', 'disabled');
        }, 1000);

        if("pause" in audio) audio.pause();

        audio = new Audio('../sounds/pig.mp3');

        audio.play();

    });

});
