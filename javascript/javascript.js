$(document).ready(function () {
    $('.form-container').removeClass('form-container-default').addClass('fadeX-anim');

    $(window).scroll( function(){
        if ($(window).scrollTop() == 400) {
            $('aside').removeClass('hiddenCards').addClass('fadeY-anim');
        }
    });
});
