// ===================================
// COSMOS - JQUERY INTERACTIONS
// ===================================

$(document).ready(function() {


    // MOBILE NAVIGATION
    $("#menuToggle").click(function() {

        $(".nav-links").toggleClass("open");

    });


    // CLOSE MOBILE MENU AFTER CLICK
    $(".nav-links a").click(function() {

        $(".nav-links").removeClass("open");

    });


    // SMOOTH NAVIGATION
    $(".nav-links a, .hero-buttons a, .footer-links a, .logo").click(function(event) {

        const target = $(this).attr("href");

        if (target && target.startsWith("#")) {

            const section = $(target);

            if (section.length) {

                event.preventDefault();

                $("html, body").animate({

                    scrollTop: section.offset().top - 75

                }, 700);

            }

        }

    });


    // CARD HOVER EFFECT
    $(document).on("mouseenter", ".explore-card", function() {

        $(this).find(".card-image").stop().animate({

            opacity: 0.75

        }, 200);

    });


    $(document).on("mouseleave", ".explore-card", function() {

        $(this).find(".card-image").stop().animate({

            opacity: 1

        }, 200);

    });


    // INPUT FOCUS EFFECT
    $(".form-group input, .form-group select, .form-group textarea")
    .on("focus", function() {

        $(this).css("border-color", "#48d9ff");

    });


    $(".form-group input, .form-group select, .form-group textarea")
    .on("blur", function() {

        $(this).css("border-color", "rgba(255,255,255,0.1)");

    });


    // FADE IN SECTIONS
    $(window).on("scroll", function() {

        $(".section-heading").each(function() {

            const position = $(this).offset().top;

            const scrollPosition = $(window).scrollTop();

            const windowHeight = $(window).height();

            if (position < scrollPosition + windowHeight - 80) {

                $(this).addClass("visible");

            }

        });

    });


    // HIGHLIGHT ACTIVE NAVIGATION LINK
    $(window).on("scroll", function() {

        let currentSection = "";

        $("main section[id]").each(function() {

            const sectionTop = $(this).offset().top - 120;

            if ($(window).scrollTop() >= sectionTop) {

                currentSection = $(this).attr("id");

            }

        });

        $(".nav-links a").removeClass("active-link");

        $('.nav-links a[href="#' + currentSection + '"]')
        .addClass("active-link");

    });


});