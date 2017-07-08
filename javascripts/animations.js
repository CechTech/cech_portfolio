//Navbar fx
$(document).ready(function() {
  $(function() {
    var controller = new ScrollMagic.Controller();

    var page2 = new TimelineLite();
    page2.to('.navbar', .2, {backgroundColor: 'rgba(255,255,255,0.6)', overwrite: false})
    .to('.navbar a', .2, {color: '#7f7f7f', overwrite: false, immediateRender: false}, "-=.2")
    .to('#nav button', .2, {color: '#7f7f7f', backgroundColor: 'rgba(0,0,0,0)', overwrite: false, immediateRender: false}, "-=.2")
    .fromTo('#portfolio-btn', .2, {backgroundColor: 'none'}, {backgroundColor: '#cdcdcd', overwrite: false, immediateRender: false}, "-=.2")
    ;

    var containerScene = new ScrollMagic.Scene({
      triggerElement: '#page2',
      offset: -56,
    }).setTween(page2)
    .triggerHook("onLeave")
    .addTo(controller)
    ;

    var page3 = new TimelineLite();
    page3.to('#nav button', .2, {backgroundColor: 'none', overwrite: false, immediateRender: false})
    .fromTo('#bio-btn', .2, {backgroundColor: 'none'}, {backgroundColor: '#cdcdcd', overwrite: false, immediateRender: false}, "-=.2")
    ;

    var thirdscene = new ScrollMagic.Scene({
      triggerElement: '#page3',
      offset: -56
    }).setTween(page3)
    .triggerHook("onLeave")
    .addTo(controller)
    ;

    var page4 = new TimelineLite();
    page4.to('.navbar', .2, {backgroundColor: 'rgba(0,0,0,0.3)', overwrite: false, immediateRender: false})
    .to('.navbar a', .2, {color: 'white', overwrite: false, immediateRender: false}, "-=.2")
    .to('#nav button', .2, {color: "white", backgroundColor: 'rgba(205,205,205,0)', overwrite: false, immediateRender: false}, "-=.2")
    .fromTo('#contact-btn', .2, {backgroundColor: 'none'}, {backgroundColor: 'rgba(0,0,0,0.4)', overwrite: false, immediateRender: false}, "-=.2")
    ;

    var secondScene = new ScrollMagic.Scene({
      triggerElement: '#page4',
      offset: -56,
    }).setTween(page4)
    .triggerHook("onLeave")
    .addTo(controller)
    ;
  });
});

//Scroll To
$(document).ready(function() {
  $("#home-btn").click(function(){
    TweenLite.to(".parallax", 1, {scrollTo:{y:"#page1"}});
  });

  $(".home-page-btn").click(function(){
    TweenLite.to(".parallax", 1.5, {scrollTo:{y:"#page2"}});
  });

  $("#portfolio-btn").click(function(){
    TweenLite.to(".parallax", 1, {scrollTo:{y:"#page2"}});
  });

  $("#bio-btn").click(function(){
    TweenLite.to(".parallax", 1, {scrollTo:{y:"#page3"}});
  });

  $("#contact-btn").click(function(){
    TweenLite.to(".parallax", 1, {scrollTo:{y:"#page4"}});
  });
});

//Collapse
$(document).ready(function() {
  var tl = new TimelineLite( {
    paused: true,
    reversed: true
  });

  tl.to("#middle", 0.4, {autoAlpha:0})
    .to("#top", 0.4, {y: 6, rotation: "+45"}, "-=0.4")
    .to("#bottom", 0.4, {y: -6, rotation: "-45"}, "-=0.4")
    .to(".collapse-btn", 0.4, {borderRadius: 20, height: 40, width: 40, x: -4}, "-=0.4")
    .to(".navbar", 0.48, {height: 280}, "-=0.4")
    .staggerTo("#nav button", 0.48, {y: 8, x: 8, autoAlpha: 1, display: "block"}, 0.12, "-=0.48")
  ;

  $(".collapse-btn").click(function() {
    tl.reversed() ? tl.play():tl.reverse();
  });

  if ($(window).width() <= 768) {
    $("#nav button").click(function() {
      tl.reversed() ? tl.play():tl.reverse();
    });
  }
});

//Presentation
$(document).ready(function() {
  var tlPr = new TimelineMax();

  tlPr.to("#homePageWelcome", 4, {autoAlpha: 1, display: "block"}, "+=1.5")
  .to("#homePageWelcome", 2, {autoAlpha: 0, display: "none"})
  .to(".home-page-text", 4, {autoAlpha: 1, display: "block"})
  .to(".home-page-btn", 3, {opacity: 1, y: 30}, "-=3")
  ;
});

//Slideshow
$(document).ready(function() {
  var controllerSS = new ScrollMagic.Controller();
  var tlss = new TimelineMax({repeat: -1, repeatDelay: -4});

  tlss.to("#bckg1", 5, {force3D:true, autoAlpha: 1, overwrite: false})
    .to("#bckg1", 17, {force3D:true, scale: 1.6, overwrite: false, immediateRender: false}, "-=5")
    .to("#bckg1", 5, {force3D:true, autoAlpha: 0, overwrite: false, immediateRender: false}, "-=3")
    .to("#bckg2", 5, {force3D:true, autoAlpha: 1, overwrite: false, immediateRender: false}, "-=5")
    .from("#bckg2", 20, {force3D:true, scale: 2, overwrite: false, immediateRender: false}, "-=5")
    .to("#bckg2", 5, {force3D:true, autoAlpha: 0, overwrite: false, immediateRender: false}, "-=3")
    .to("#bckg3", 5, {force3D:true, autoAlpha: 1, overwrite: false, immediateRender: false}, "-=5")
    .to("#bckg3", 30, {force3D:true, y: 1800, ease: Power1.easeIn, overwrite: false, immediateRender: false}, "-=5")
    .to("#bckg3", 5, {force3D:true, autoAlpha: 0, overwrite: false, immediateRender: false}, "-=3")
  ;

  var slideShow = new ScrollMagic.Scene({
    triggerElement: '#page1',
    offset: -1,
    duration: 2
  }).setTween(tlss)
    .triggerHook("onLeave")
    .addTo(controllerSS)
  ;
});

//Blur
$(document).ready(function() {
  if($(window).width() >= 768) {
    $(".portfolio-item").each(function (index, element){
      var imagen = $(this).find("img");
      var blurElement = {a:0};
      var btn = $(this).find(".modal-btn");
      var tlImg = new TimelineLite({paused:true});

      tlImg.to(blurElement, 0.35, {a:4, onUpdate:applyBlur, force3D:true})
        .to(imagen, 0.35, {scale: 1.03, force3D:true}, "-=0.35")
        .to(btn, 0.35, {y:-20, autoAlpha:1}, "-=0.35")
      ;

      element.animation = tlImg;

      function applyBlur() {
        TweenLite.set([imagen], {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)", force3D:true});
      };
    })

    $(".portfolio-item").mouseenter(function(){
      this.animation.play();
    })

    $(".portfolio-item").mouseleave(function(){
      this.animation.reverse();
    })
  };
});

//Button
$(document).ready(function() {
  $(".modal-btn").each(function (index, element){
    var tlBtn = new TimelineLite({paused:true});

    tlBtn
      .fromTo(element, 0.4, {backgroundColor: "rgba(0,0,0,0)", borderColor: "#FFFFFF"}, {backgroundColor: "#1586D1", borderColor: "#1586D1", overwrite: false})
    ;

    element.animation = tlBtn;
  })

  $(".modal-btn").mouseenter(function(){
    this.animation.play();
  })

  $(".modal-btn").mouseleave(function(){
    this.animation.reverse();
  })
});

//Modal
$(document).ready(function() {
  $('.modal-btn').click(function() {
    var btnVal = ($(this).data('modal'));
        modalId = "#modalCard" + btnVal;
        isTweening = false;
        tlModal = new TimelineLite( {
          onReverseComplete: endAnimation
        });

    if(!isTweening) {
      isTweening = true;

      tlModal.to(".modal", 0.4, {autoAlpha: 1})
      .to(modalId, 0.4, {autoAlpha: 1}, "-=0.4")
      ;

      tlModal.play();

      $(".modal").click(function() {
        tlModal.reverse();
      })
      .delegate('.modal-card', 'click', function(e){ e.stopImmediatePropagation(); })
      ;
    }
  })

  function endAnimation() {
    isTweening = false;
  }
});



//  $(document).ready(function() {
//
//   $(".work").each(function (index, element){
//
//     var overlay = $(this).find(".overlay");
//     var blurElement = {a:0};
//     var tl = new TimelineLite({paused:true});
//
//     tl.to(blurElement, .3, {a:4, onUpdate:applyBlur, force3D:true})
//     .to(element, .3, { scale: 1.01, transformOrigin: "50% 50%"}, "-=0.3")
//     .to(overlay, .3, { scale: 1.01, autoAlpha:1, ease:Power4.easeInOut}, "-=0.3")
//     ;
//
//     element.animation = tl;
//
//     function applyBlur() {
//
//   TweenLite.set(element, {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)", force3D:true});
//
//     };
//
//   })
//
//   $(".work").mouseenter(function(){
//
//     this.animation.play();
//
//   })
//
//   $(".work").mouseleave(function(){
//
//     this.animation.reverse();
//
//   })
//
// });
