// Navbar scroll animations
$(function navbarAnimations() {
  var controller = new ScrollMagic.Controller();

  var pageTwo = new TimelineLite();
  pageTwo.to('.navbar', .2, {backgroundColor: 'rgba(255,255,255,0.6)', overwrite: false})
  .to('.navbar a', .2, {color: '#7f7f7f', overwrite: false, immediateRender: false}, "-=.2")
  .to('#nav button', .2, {color: '#7f7f7f', backgroundColor: 'rgba(0,0,0,0)', overwrite: false, immediateRender: false}, "-=.2")
  .fromTo('#portfolio-btn', .2, {backgroundColor: 'none'}, {backgroundColor: '#cdcdcd', overwrite: false, immediateRender: false}, "-=.2")
  ;

  var pageTwoScene = new ScrollMagic.Scene({
    triggerElement: '#page2',
    offset: -56
  }).setTween(pageTwo)
  .triggerHook("onLeave")
  .addTo(controller)
  ;

  var pageThree = new TimelineLite();
  pageThree.to('#nav button', .2, {backgroundColor: 'none', overwrite: false, immediateRender: false})
  .fromTo('#bio-btn', .2, {backgroundColor: 'none'}, {backgroundColor: '#cdcdcd', overwrite: false, immediateRender: false}, "-=.2")
  ;

  var pageThreeScene = new ScrollMagic.Scene({
    triggerElement: '#page3',
    offset: -56
  }).setTween(pageThree)
  .triggerHook("onLeave")
  .addTo(controller)
  ;

  var pageFour = new TimelineLite();
  pageFour.to('.navbar', .2, {backgroundColor: 'rgba(0,0,0,0.3)', overwrite: false, immediateRender: false})
  .to('.navbar a', .2, {color: 'white', overwrite: false, immediateRender: false}, "-=.2")
  .to('#nav button', .2, {color: "white", backgroundColor: 'rgba(205,205,205,0)', overwrite: false, immediateRender: false}, "-=.2")
  .fromTo('#contact-btn', .2, {backgroundColor: 'none'}, {backgroundColor: 'rgba(0,0,0,0.4)', overwrite: false, immediateRender: false}, "-=.2")
  ;

  var pageFourScene = new ScrollMagic.Scene({
    triggerElement: '#page4',
    offset: -56
  }).setTween(pageFour)
  .triggerHook("onLeave")
  .addTo(controller)
  ;
});

// Scroll to
$(function scrollTo() {
  $("#home-btn").click(function() {
    TweenLite.to(".parallax", 1, {scrollTo: {y: "#page1"}});
  });

  $(".home-page-btn").click(function() {
    TweenLite.to(".parallax", 1.5, {scrollTo: {y: "#page2"}});
  });

  $("#portfolio-btn").click(function() {
    TweenLite.to(".parallax", 1, {scrollTo: {y: "#page2"}});
  });

  $("#bio-btn").click(function() {
    TweenLite.to(".parallax", 1, {scrollTo: {y: "#page3"}});
  });

  $("#contact-btn").click(function() {
    TweenLite.to(".parallax", 1, {scrollTo: {y: "#page4"}});
  });
});

// Collapse button animations
$(function collapse() {
  var tlCollapse = new TimelineLite( {
    paused: true,
    reversed: true
  });

  tlCollapse.to("#middle-line", .4, {autoAlpha: 0})
  .to("#top-line", .4, {y: 6, rotation: "+45"}, "-=.4")
  .to("#bottom-line", .4, {y: -6, rotation: "-45"}, "-=.4")
  .to(".collapse-btn", .4, {borderRadius: 20, height: 40, width: 40, x: -3}, "-=.4")
  .to(".navbar", .48, {height: 280}, "-=0.4")
  .staggerTo("#nav button", .48, {y: 8, x: 8, autoAlpha: 1, display: "block"}, .12, "-=.48")
  ;

  $(".collapse-btn").click(function() {
    tlCollapse.reversed() ? tlCollapse.play() : tlCollapse.reverse();
  });

  if ($(window).width() <= 768) {
    $("#nav button").click(function() {
      tlCollapse.reversed() ? tlCollapse.play() : tlCollapse.reverse();
    });
  }
});

// Welcome text animations
$(function welcome() {
  var tlWelcome = new TimelineMax();

  tlWelcome.to("#homePageWelcome", 4, {autoAlpha: 1, display: "block"}, "+=1.5")
  .to("#homePageWelcome", 2, {autoAlpha: 0, display: "none"})
  .to(".home-page-text", 4, {autoAlpha: 1, display: "block"})
  .to(".home-page-btn", 3, {opacity: 1, y: 30}, "-=3")
  ;
});

// Home page slideshow
$(function slideshow() {
  var controllerSlideshow = new ScrollMagic.Controller();
      tlSlideshow = new TimelineMax({
        repeat: -1,
        repeatDelay: -4
      });

  tlSlideshow.to("#bckg1", 5, {autoAlpha: 1, force3D:true, overwrite: false})
  .to("#bckg1", 17, {scale: 1.6, force3D:true, overwrite: false, immediateRender: false}, "-=5")
  .to("#bckg1", 5, {autoAlpha: 0, force3D:true, overwrite: false, immediateRender: false}, "-=3")
  .to("#bckg2", 5, {autoAlpha: 1, force3D:true, overwrite: false, immediateRender: false}, "-=5")
  .from("#bckg2", 20, {scale: 2, force3D:true, overwrite: false, immediateRender: false}, "-=5")
  .to("#bckg2", 5, {autoAlpha: 0, force3D:true, overwrite: false, immediateRender: false}, "-=3")
  .to("#bckg3", 5, {autoAlpha: 1, force3D:true, overwrite: false, immediateRender: false}, "-=5")
  .to("#bckg3", 30, {y: 1800, force3D:true, ease: Power1.easeIn, overwrite: false, immediateRender: false}, "-=5")
  .to("#bckg3", 5, {autoAlpha: 0, force3D:true, overwrite: false, immediateRender: false}, "-=3")
  ;

  var slideshowScene = new ScrollMagic.Scene({
    triggerElement: '#page1',
    offset: -1,
    duration: 2
  }).setTween(tlSlideshow)
  .triggerHook("onLeave")
  .addTo(controllerSlideshow)
  ;
});

// CSS blur image animations
$(function blur() {
  if($(window).width() >= 768) {
    $(".portfolio-item").each(function (index, element) {
      var portfolioImage = $(this).find("img");
      var blurElement = {a: 0};
      var modalBtn = $(this).find(".modal-btn");
      var heading = $(this).find("h3");
      var tlBlur = new TimelineLite({
        paused:true
      });

      tlBlur.to(blurElement, .35, {a: 4, onUpdate: applyBlur, force3D: true})
      .to(modalBtn, .35, {y: -20, autoAlpha: 1, rotation: .01}, "-=.35")
      .to(heading, .35, {autoAlpha: 1}, "-=.35")
      ;

      element.animation = tlBlur;

      function applyBlur() {
        TweenLite.set([portfolioImage], {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)", force3D:true});
      };
    });

    $(".portfolio-item").mouseenter(function() {
      this.animation.play();
    });

    $(".portfolio-item").mouseleave(function() {
      this.animation.reverse();
    });
  }
});

// Modal button hover effects
$(function modalBtn() {
  $(".modal-btn").each(function (index, element) {
    var tlModalBtn = new TimelineLite({
      paused:true
    });

    tlModalBtn
    .fromTo(element, 0.4, {backgroundColor: "rgba(0,0,0,0)", borderColor: "#FFFFFF"}, {backgroundColor: "#1586D1", borderColor: "#1586D1", overwrite: false})
    ;

    element.animation = tlModalBtn;
  });

  $(".modal-btn").mouseenter(function() {
    this.animation.play();
  });

  $(".modal-btn").mouseleave(function() {
    this.animation.reverse();
  });
});

//Modal
$(function modal() {
  $('.modal-btn').click(function() {
    var btnVal = ($(this).data('modal'));
        modalId = "#modalCard" + btnVal;
        isTweening = false;
        tlModal = new TimelineLite({
          onReverseComplete: endAnimation
        });

    if(!isTweening) {
      isTweening = true;

      tlModal.to(".modal", .4, {autoAlpha: 1})
      .to(modalId, .4, {autoAlpha: 1}, "-=.4")
      ;

      tlModal.play();

      $(".modal").click(function() {
        tlModal.reverse();
      })
      .delegate('.modal-card', 'click', function(e) {
        e.stopImmediatePropagation();
      })
      ;
    }
  });

  function endAnimation() {
    isTweening = false;
  }
});
