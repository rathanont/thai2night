$(function () {
    // bs-custom-file-input
    bsCustomFileInput.init();

    // Navbar Toggler
    $(".navbar-toggler").click(function () {
        $(this).toggleClass("active");
    });

    //   Banner
    $('.banner-slide').slick({
        dots: true,
        arrows: false
    });

    // Card menu
    $('.card-menu .card-body').slimScroll({
        height: '300px',
        color: '#14ACE9',
        size: '1rem',
        alwaysVisible: true
    });

    // Place images slide
    $('.place-images-slide').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        dots: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                infinite: true,
                arrows: false,
            }
        }]
    });

    // Talk
    $(".btn-talk-toggler").click(function () {
        $(".card").removeClass("show");
        $(".list-talk").toggleClass("show");
    });
    $("#btnTalkMessenger").click(function () {
        $(".card").removeClass("show");
        $(".card-messeger").toggleClass("show");
    });
    $("#btnTalkLine").click(function () {
        $(".card").removeClass("show");
        $(".card-line").toggleClass("show");
    });
    $("#btnTalkChat").click(function () {
        $(".card").removeClass("show");
        $(".card-chat").toggleClass("show");
    });

    // Drapdown menu
    // $('.selectpicker').selectpicker();
    $('.dropdown-menu[aria-labelledby="navbarDropdownSearch"]').on('click', function (event) {
        event.stopPropagation();
    });
    // $('.bootstrap-select').on('click', function () {
    //     $(this).parents(".dropdown-menu").toggleClass('55');
    // })

    // Popover
    $('[data-toggle="popover"]').popover();
    var listShare = "<ul class='list-share'>" +
        "<li><a href='#'><img src='./dist/images/icon-facebook.png' alt='icon-facebook' class='img-link'></a></li>" +
        "<li><a href='#'><img src='./dist/images/icon-twitter.png' alt='icon-twitter' class='img-link'></a></li>" +
        "<li><a href='#'><img src='./dist/images/icon-google-plus.png' alt='icon-google-plus' class='img-link'></a></li>" +
        "</ul>";
    $('.popover-share').popover({
        placement: "bottom",
        content: listShare,
        html: true,
        trigger: "focus"
    });

    // cardGallery
    $("[data-toggle='lightbox']").on('click', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            leftArrow: "<span><img src='./dist/images/arrow-left.png' alt='arrow-left'></span>",
            rightArrow: "<span><img src='./dist/images/arrow-right.png' alt='arrow-right'></span>"
        });
    });

    var $grid = $('.grid').imagesLoaded(function () {
        $grid.masonry({
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: '.grid-item'
        });
    });
});