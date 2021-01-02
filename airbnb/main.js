$(function() {
        var $win = $(window),
            $cloneNav = $('.nav-2').clone().addClass('clone-nav').appendTo('body'),
            showClass = 'is-show';

        $win.on('load scroll', function () {
            var value = $(this).scrollTop();
            if (value > 800) {
                $cloneNav.addClass(showClass);
            } else {
                $cloneNav.removeClass(showClass);
            }
        });
    });