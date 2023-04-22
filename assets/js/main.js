
!(function($) {
    "use strict";

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
    $(window).on('load', function() {
        aos_init();
    });

})(jQuery);

// Smooth scroll for the navigation menu and links with .scrollto classes
var scrolltoOffset = $('#header').outerHeight() - 1;
$(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
            e.preventDefault();

            var scrollto = target.offset().top - scrolltoOffset;

            if ($(this).attr("href") == '#header') {
                scrollto = 0;
            }

            $('html, body').animate({
                scrollTop: scrollto
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.nav-menu, .mobile-nav').length) {
                $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                $(this).closest('li').addClass('active');
            }

            if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                $('.mobile-nav-overly').fadeOut();
            }
            return false;
        }
    }
});

// Mobile Navigation
if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
        class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="las la-bars"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                $('.mobile-nav-overly').fadeOut();
            }
        }
    });
} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
}
// Top Navigation
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#topbar').addClass('topbar-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
      $('#topbar').removeClass('topbar-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
    $('#topbar').addClass('topbar-scrolled');
  }


// // Navigation active state on scroll
// var nav_sections = $('section');
// var main_nav = $('.nav-menu, .mobile-nav');

// $(window).on('scroll', function() {
//     var cur_pos = $(this).scrollTop() + 200;

//     nav_sections.each(function() {
//         var top = $(this).offset().top,
//             bottom = top + $(this).outerHeight();

//         if (cur_pos >= top && cur_pos <= bottom) {
//             if (cur_pos <= bottom) {
//                 main_nav.find('li').removeClass('active');
//             }
//             main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
//         }
//         if (cur_pos < 300) {
//             $(".nav-menu ul:first li:first, .mobile-menu ul:first li:first").addClass('active');
//         }
//     });
// });
// Active Navigation

$(".nav-list").click(function () {
    //console.log("Clicked");
    $(".nav-list li.active").removeClass("active");
    $(this).addClass("active");
  });


///meet our team slider
var swiper = new Swiper('.team-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
    autoplay: {
        speeds: 2000,
        delay: 4000,
    },
    speed: 1000,
    breakpoints: {
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 1,
        },
    }
});

///meet our mangement slider
var swiper = new Swiper('.mangement-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.mangement-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
    autoplay: {
        speeds: 2000,
        delay: 4000,
    },
    speed: 1000,
    breakpoints: {
        1199: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
    }
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


(function($) {
    "user strict";

    // Preloader
    $(window).on('load', function() {
        if ($('#preloader').length) {
          $('#preloader').delay(100).fadeOut('slow', function() {
            $(this).remove();
          });
        }
      });
       // Preloader End

    $("select").niceSelect(),

        // aos
        AOS.init();


    $('.video').lightcase();

    $('.img-popup').lightcase();

    // scroll-to-top
    var ScrollTop = $(".scrollToTop");
    $(window).on('scroll', function() {
        if ($(this).scrollTop() < 100) {
            ScrollTop.removeClass("active");
        } else {
            ScrollTop.addClass("active");
        }
    });

    // scroll-to-top //

   
    //plan-tab-switcher
    $('.plan-tab-switcher').on('click', function() {
        $(this).toggleClass('active');

        $('.plan-area').toggleClass('change-subs-duration');
    });


    // slider
    var swiper = new Swiper('.banner-slider', {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 2,
            },
        }
    });


    var swiper = new Swiper('.project-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            1300: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            1199: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            991: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
                centeredSlides: false,
            },
        }
    });


    var swiper = new Swiper('.client-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.client-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            1199: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });


})(jQuery);



//// sliderhome
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//// sliderhome////

function myFunction() {
    document.getElementById("myDIV").style.animation = "mynewmove 4s 2";
  }



// //// sliderportfolio-describe
document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
}
  