$(document).ready(function () {

    let audio = {};

    $('#hru').on('click', function () {

        $(this).attr('disabled', 'disabled');

        let arr = ["Если Вы проявите инициативу, всё накроется медным тазом ибо вы рукожоп.", "Ваши надежды и планы лишь глупый вымысел вашей некчемной жизни.", "Готовьтесь к  приключениям.", "В этом месяце ночная жизнь для вас.", "Вам пора отдохнуть.", "Вам предлагается мечта всей жизни. Скажите да!", "Вас ждет приятный сюрприз.", "Ваши надежды и планы сбудутся сверх всяких ожиданий.", "Время – ваш союзник, лучше отложить принятие важного решения хотя бы на день.", "Время и терпение,  вас ждут много сюрпризов!", "Время осушит все слезы и исцелит все раны."];

        let hruTitle = $('.hru-title p');

        let currentext = hruTitle.text();

        let rand = Math.floor(Math.random() * arr.length),
            randText = $(hruTitle).text(arr[rand]);

        if (currentext === randText) {
            $(hruTitle).text(arr[rand] + Math.random());

            console.log(rand);
            console.log(currentext);

        } else {
            $(hruTitle).text(arr[rand]);
        }

        setTimeout(function () {
            $('#hru').removeAttr('disabled', 'disabled');
        }, 500);

        if("pause" in audio) audio.pause();

        audio = new Audio('../sounds/pig.mp3');

        audio.play();

    });

});
