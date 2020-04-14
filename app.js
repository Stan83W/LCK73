console.log("coucou");
new WOW().init();

var t1 = new TimelineMax({ paused: true });

TweenMax.from(".hero-logo", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1
});


var image = document.getElementsByClassName("hero-img-parallax");
new simpleParallax(image, {
  scale: 1.8
});


TweenMax.from(".menu-toggle", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1.2
});

TweenMax.from(".view-photos", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1.4
});

TweenMax.staggerFrom(
  ".media ul li",
  2,
  {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 1.6
  },
  0.1
);

t1.to(".overlay", 1, {
  opacity: 1,
  ease: Expo.easeInOut
});

t1.to(".view-photos, .media", 1, {
  opacity: 0,
  ease: Expo.easeInOut
});

t1.staggerFrom(
  ".menu ul li",
  1,
  { y: 100, opacity: 0, ease: Expo.easeOut },
  0.1
);

t1.reverse();

// Toggle Menu

var overlay = document.querySelector(".overlay");

$(document).on("click", ".menu-toggle", function() {
  t1.reversed(!t1.reversed());
  overlay.style.visibility = "visible";
});

$(document).on("click", ".close-btn", function() {
  t1.reversed(!t1.reversed());
  setTimeout(`overlay.style.visibility = "hidden";`, 2000);
});

t1.reverse();
$(document).on("click", "li", function() {
  t1.reversed(!t1.reversed());
  setTimeout(`overlay.style.visibility = "hidden";`, 1000);
});

// Hover Effect

$(document).ready(function() {
  TweenMax.set(".project-preview", { width: 0 });

  var tl = new TimelineLite();

  $(document)
    .on("mouseover", ".navigation-item", function(evt) {
      tl = new TimelineLite();
      tl.to($(".project-preview"), 1, {
        width: "600px",
        ease: Expo.easeInOut
      });
    })
    .on("mouseout", ".navigation-item", function(evt) {
      tl = new TimelineLite();
      tl.to($(".project-preview"), 0.4, {
        width: 0,
        ease: Expo.easeInOut
      });
    });
});

$(".navigation-link-1").hover(function() {
  $(".project-preview").css({ "background-image": "url(images/img-1.jpg)" });
});

$(".navigation-link-2").hover(function() {
  $(".project-preview").css({ "background-image": "url(images/img-2.jpg)" });
});

$(".navigation-link-3").hover(function() {
  $(".project-preview").css({ "background-image": "url(images/img-3.jpg)" });
});

$(".navigation-link-4").hover(function() {
  $(".project-preview").css({ "background-image": "url(images/img-4.jpg)" });
});

$(".navigation-link-5").hover(function() {
  $(".project-preview").css({ "background-image": "url(images/img-5.jpg)" });
});

$(".navigation-link-6").hover(function() {
  $(".project-preview").css({ "background-image": "url(images/img-6.jpg)" });
});

$(".navigation-link-7").hover(function() {
  $(".project-preview").css({ "background-image": "url(images/img-7.jpg)" });
});

$(".navigation-link-8").hover(function() {
  $(".project-preview").css({ "background-image": "url(images/img-8.jpg)" });
});

// Scrolling Nav

$(window).scroll(function(e){
    if ($(this).scrollTop() > 300) { // choose the value you want.
        $('#menu:hidden').slideDown();
    } else {
        $('#menu:visible').slideUp();
    }
});

// Scrolling anchor

      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
          // On-page links
          if (
            location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
          ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length
              ? target
              : $("[name=" + this.hash.slice(1) + "]");
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $("html, body").animate(
                {
                  scrollTop: target.offset().top
                },
                1000,
                function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) {
                    // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  }
                }
              );
            }
          }
        });

// Intro + Header

/*var textWrapper = document.querySelector(".intro-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
);

anime
    .timeline({ loop: false })
    .add({
        targets: ".intro-title .letter",
        translateX: [140, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function(el, i) {
            return 500 + 50 * i;
        }
    })
    .add({
        targets: ".intro-title .letter",
        translateX: [0, -140],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1200,
        delay: function(el, i) {
            return 700 + 50 * i;
        }
    });*/

TweenMax.to(".loader", 2.2, {
    delay: 5,
    top: "-120%",
    ease: Expo.easeInOut
});

TweenMax.from(".logo", 2, {
    delay: 6,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".lang", 2, {
    delay: 6.1,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".info-right", 2, {
    delay: 6.1,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".left-img-cap", 2, {
    delay: 6.2,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(
    ".social-media ul li",
    2,
    {
        delay: 6.3,
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut
    },
    0.1
);

TweenMax.from(".left-bottom-text", 2, {
    delay: 6.4,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".left-img-btn", 2, {
    delay: 6.4,
    scale: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".right-bottom-text", 2, {
    delay: 6.7,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
});

// Blotter intro

let Size = 0.001;

  function increaseSize() {
      var elem = document.getElementById("text");
      var textvh = $(window).innerWidth() * 0.15; // 5 vh
      var text = new Blotter.Text("LCK_73", {
          family: "NPB",
          weight: 100,
          size: textvh,
          fill: "white",
          needsUpdate: true
      });

      var material = new Blotter.RollingDistortMaterial();

      material.uniforms.uSineDistortAmplitude.value = 0.04;

      var blotter = new Blotter(material, {
          texts: text
      });

      var scope = blotter.forText(text);

      scope.appendTo(elem);

      Size += 0.001;
  }

  increaseSize();