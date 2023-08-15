// $(function() {
//     "use strict";
//     var body = $("body"),
//         active = $(".slider ol li, .slider .controll"),
//         controll = $(".slider .controll"),
//         playpause = $(".playpause"),
//         sliderTime = 1,
//         sliderWait = 3000,
//         i = 999,
//         autoRun,
//         stop = false;
//     // Reset
//     $(".slider ul li:first").css("left", 0);
//     // Run Slider
//     function runSlider(what) {
//         what.addClass("active").siblings("li, span").removeClass("active");
//     }
//     // slider gsap
//     function gsapSlider(whose, left) {
//         i++;
//         if (whose.hasClass("active")) {
//             TweenMax.fromTo(
//                 ".slider ul li.active",
//                 sliderTime,
//                 { zIndex: i, left: left },
//                 { left: 0 }
//             );
//         }
//     }
//     // Active
//     active.on("click", function() {
//         runSlider($(this));
//     });
//     // Arrow left
//     controll.first().on("click", function() {
//         var slide = $(".slider ul li.active, .slider ol li.active").is(
//             ":first-of-type"
//         )
//             ? $(".slider ul li:last, .slider ol li:last")
//             : $(".slider ul li.active, .slider ol li.active").prev("li");
//         runSlider(slide);
//         gsapSlider(slide, "100%");
//     });
//     // Arrow right
//     controll.last().on("click", function() {
//         var slide = $(".slider ul li.active, .slider ol li.active").is(
//             ":last-of-type"
//         )
//             ? $(".slider ul li:first, .slider ol li:first")
//             : $(".slider ul li.active, .slider ol li.active").next("li");
//         runSlider(slide);
//         gsapSlider(slide, "-100%");
//     });
//     // Point
//     $(".slider ol li").on("click", function() {
//         var start = $(".slider ul li.active").index();
//         var slide = $(".slider ul li").eq($(this).index());
//         runSlider(slide);
//         var end = $(".slider ul li.active").index();
//         if (start > end) {
//             gsapSlider(slide, "100%");
//         }
//         if (start < end) {
//             gsapSlider(slide, "-100%");
//         }
//     });
//     // Auto run slider
//     function autoRunSlider() {
//         if (body.css("direction") === "ltr" && stop === false) {
//             autoRun = setInterval(function() {
//                 controll.last().click();
//             }, sliderWait);
//         } else if (body.css("direction") === "rtl" && stop === false) {
//             autoRun = setInterval(function() {
//                 controll.first().click();
//             }, sliderWait);
//         }
//     }
//     autoRunSlider();
//     // When hover
//     active.on("mouseenter", function() {
//         if (stop === false) {clearInterval(autoRun);}
//     });
//     active.on("mouseleave", function() {
//         if (stop === false) {autoRunSlider();}
//     });
//     // play pause click
//     playpause.on("click", function() {
//         $(this).toggleClass("fa-play-circle-o fa-pause-circle-o");
//         if (playpause.hasClass("fa-play-circle-o")) {
//             stop = true;
//             clearInterval(autoRun);
//             $(this).attr('title', 'play');
//         }
//         if (playpause.hasClass("fa-pause-circle-o")) {
//             stop = false;
//             autoRunSlider();
//             $(this).attr('title', 'pause');
//         }
//     });
// });




// // استدعاء الدالة عند تحميل الصفحة
// window.addEventListener('load', function() {
//     const nav = document.querySelector('.sticky-nav');
//     const navHeight = nav.offsetHeight;
//     const content = document.querySelector('.content');
//     content.style.marginTop = navHeight + 'px';
//   });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        455:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }

    }
})
center:true;
$('.loop').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:4
        }
    }
});
$('.nonloop').owlCarousel({
    center: true,
    items:2,
    loop:false,
    margin:10,
    responsive:{
        600:{
            items:4
        }
    }
});
