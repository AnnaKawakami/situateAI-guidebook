/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
   /*
    function changeImage() {
        var image = document.getElementById('image');
        image.src = 'assets/img/anna_nyc2.jpg'; // Change this to the new image source
    }

    // Function to restore the original image source on mouseout
    function restoreImage() {
        var image = document.getElementById('image');
        image.src = 'assets/img/anna_nyc_HCI.jpg'; // Change this back to the original image source
    }
    */
    (function ($) {
        "use strict"; // Start of use strict
            
            /* places default landing page on mobile screens 
            var href = window.location.href.split("/")
            var html_location = href[href.length-1]
            
            if (window.innerWidth >= 768 && html_location !== "home.html") {
                window.location = "home.html";
            }
            
            if (window.innerWidth < 768 && html_location !== "tbd.html") {
                window.location = "tbd.html";
            }
            */
        
    
          
          function observerCallback(entries, observer) {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                // fade in observed elements that are in view
                entry.target.classList.replace('fadeOut', 'fadeIn');
              } else {
                // fade out observed elements that are not in view
                entry.target.classList.replace('fadeIn', 'fadeOut');
              }
            });
          }
          
          const observer = new IntersectionObserver(observerCallback, observerOptions);
          
          const fadeElms = document.querySelectorAll('.fade');
          fadeElms.forEach(el => observer.observe(el));
    
        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (
                location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top - 70,
                        },
                        1000,
                        "easeInOutExpo"
                    );
                    return false;
                }
            }
        });
    
        // Closes responsive menu when a scroll trigger link is clicked
        $(".js-scroll-trigger").click(function () {
            $(".navbar-collapse").collapse("hide");
        });
    
        // Activate scrollspy to add active class to navbar items on scroll
        $("body").scrollspy({
            target: "#mainNav",
            offset: 100,
        });
    
        // Collapse Navbar
        var navbarCollapse = function () {
            if ($("#mainNav").offset().top > 100) {
                $("#mainNav").addClass("navbar-shrink");
            } else {
                $("#mainNav").removeClass("navbar-shrink");
            }
        };
        // Collapse now if page is not at top
        navbarCollapse();
        // Collapse the navbar when page is scrolled
        $(window).scroll(navbarCollapse);
    
        // Research page, collapse down when clicked
        $(document).on('click', '.panel-heading button', function(e) {
            var $this = $(this);
            var icon = $this.find('i');
            if (icon.hasClass('glyphicon-plus')) {
              $this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
            } else {
              $this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
            }
          });
    
        
    
    })(jQuery); // End of use strict
    