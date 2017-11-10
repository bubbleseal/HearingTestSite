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
    $('input[name="age-selection"]').click(function(){
         $('button').prop('disabled', false);
    });
       
    $('button').click(function(){
        alert('Form submitted.');
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
