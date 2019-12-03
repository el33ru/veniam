var toggleStatus = document.querySelector('.toggle-status');
var pageHeader = document.querySelector('.page-header');

toggleStatus.classList.remove('toggle-status--nojs');
pageHeader.classList.remove('page-header--nojs');

$(function() {
    $(".js-about-us__button").click(function (opentext) {
        opentext.preventDefault();
        $(".text__button").toggle(300);
        $(".js-about-us__button").hide();
    });
});

$(function() {
    $(".page-header__toggle").click(function (openmenu) {
        openmenu.preventDefault();
        $(".site-nav__wrapper").toggle(300);
    });
});

$(function() {
    $(".js-catalog__button").click(function (opencatalog) {
        opencatalog.preventDefault();
        $(".catalog__navigation").toggle(300);
    });
});

$(function() {
    $(".js-goods__button").click(function (opengoods) {
        opengoods.preventDefault();
        $(".goods").toggle(300);
    });
});

$(function() {
    $(".main-slider").owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        autoplay: true,
        onInitialized: counter,
        onTranslated : counter,
    });
    function counter(event) {
        var element   = event.target;
        var items     = event.item.count;
        var item      = event.item.index + 1;

        if(item > items) {
            item = item - items
        }
        $('.counter').text(+item+"/"+items)
    }
    $(".slider-hits").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        responsive:{
            320:{
                items:1
            },
            659:{
                items:1
            },
            660:{
                items:2
            },
            1000:{
                items:3
            },
            1650:{
                items:3
            },
            1651:{
                items:5
            }
        }
    });
});

$(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    $('.slider__button--left').click(function() {
        owl.trigger('next.owl.carousel', [300]);
    });

    $('.slider__button--right').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });
});






