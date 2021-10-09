var $navs = $('li.nav:has("a")'),
$sections = $('section'),
$window = $(window),
navLength = $navs.length - 1;

$navs.eq(0).addClass('active');

$window.on('scroll', function() {
    var scrollTop = $window.scrollTop(),
    len = navLength;
    
    for (; len > -1; len--) {
    var that = $sections.eq(len);
        if (scrollTop + 2 >= that.offset().top) {
            $navs.removeClass('active').eq(len).addClass('active');
            break;
        }
    }
});
