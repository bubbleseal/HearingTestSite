$(document).ready(function () {
    $('.form-container').removeClass('form-container-default').addClass('fadeX-anim');

    $(window).scroll(function () {
        if ($(window).width() >= 768 && $(window).scrollTop() == 400) {
            $('aside').removeClass('hiddenCards').addClass('fadeY-anim');
        } else if ($(window).width() < 768) {
            $('aside').removeClass('hiddenCards').addClass('fadeY-anim');
        }
    });

    // Form validation
    $('button').prop('disabled', true);
    $('input[name="age-selection"]').click(function () {
        $('button').prop('disabled', false);
    });

    $('button').click(function (ev) {
        ev.preventDefault();
        var num = 0;
        var runTime = 0;
        var interval = setInterval(function () {
                        $('.progress-text').text('Your Progress ' + num + '%');
                        $('.progress-bar').css('width', num +'%');
                        num += 10;
                        runTime++;

                        if (runTime === 11) {
                            clearInterval(interval);
                        }
                    }, 150);
    });


    //Scrolling effect
    $('a[href*="#"]').click(function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });
});
