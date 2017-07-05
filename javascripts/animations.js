//Slideshow
$(document).ready(function() {
  var controllerSS = new ScrollMagic.Controller();
  var tlss = new TimelineMax({repeat: -1, repeatDelay: -4});

  tlss.to("#bckg1", 4, {force3D:true, autoAlpha: 1})
    .to("#bckg1", 15, {force3D:true, scale: 1.5}, "-=4")
    .to("#bckg1", 4, {force3D:true, autoAlpha: 0}, "-=2")
    .to("#bckg2", 4, {force3D:true, autoAlpha: 1}, "-=4")
    .to("#bckg2", 15, {force3D:true, scale: 1.5}, "-=4")
    .to("#bckg2", 4, {force3D:true, autoAlpha: 0}, "-=2")
    .to("#bckg3", 4, {force3D:true, autoAlpha: 1}, "-=4")
    .to("#bckg3", 40, {force3D:true, y: 1300}, "-=4")
    .to("#bckg3", 4, {force3D:true, autoAlpha: 0}, "-=2")
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

//Button
$(document).ready(function() {
  $(".visitBtn").each(function (index, element){
    var tlBtn = new TimelineLite({paused:true});

    tlBtn
      .fromTo(element, 0.4, {backgroundColor: "rgba(0,0,0,0)", borderColor: "#FFFFFF"}, {backgroundColor: "#1586D1", borderColor: "#1586D1", overwrite: false})
      .to(".buttonIcon", 0.3, {x: 35, autoAlpha:1, ease:Power4.easeInOut}, "-=0.3")
    ;

    element.animation = tlBtn;
  })

  $(".visitBtn").mouseenter(function(){
    this.animation.play();
  })

  $(".visitBtn").mouseleave(function(){
    this.animation.reverse();
  })
});

//Blur
$(document).ready(function() {
  $(".wrap").each(function (index, element){
    var imagen = $(this).find(".img");
    var blurElement = {a:0};
    var overlay = $(this).find(".overlay");
    var btn = $(this).find(".visitBtn");
    var tlImg = new TimelineLite({paused:true});

    tlImg.to(blurElement, 0.3, {a:4, onUpdate:applyBlur, force3D:true})
      .to(overlay, .3, { autoAlpha:1},"-=0.3")
      .to(btn, 0.5, {y:-20, autoAlpha:1}, "-=0.3")
    ;

    element.animation = tlImg;

    function applyBlur() {
      TweenLite.set([imagen], {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)", force3D:true});
    };
  })

  $(".wrap").mouseenter(function(){
    this.animation.play();
  })

  $(".wrap").mouseleave(function(){
    this.animation.reverse();
  })
});

//collapse
$(document).ready(function() {
  var tl = new TimelineLite( {
    paused: true,
    reversed: true
  });

  tl.to("#middle", 0.4, {autoAlpha:0})
    .to("#top", 0.4, {y: 6, rotation: "+45"}, "-=0.4")
    .to("#bottom", 0.4, {y: -6, rotation: "-45"}, "-=0.4")
    .to("#btn1", 0.4, {borderRadius: 20, height: 40, width: 40, x: -4}, "-=0.4")
    .to(".navbar", 0.48, {height: 280}, "-=0.4")
    .staggerTo("#nav button", 0.48, {y: 8, x: 8, autoAlpha: 1, display: "block"}, 0.12, "-=0.48")
  ;

  $("#btn1").click(function() {
    tl.reversed() ? tl.play():tl.reverse();
  });
});

//scrollto
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

//navbarfx
$(document).ready(function() {
  $(function() {
    var controller = new ScrollMagic.Controller();

    var page2 = new TimelineLite();
    page2.to('.navbar', .2, {backgroundColor: 'rgba(255,255,255,0.6)'})
      .to('.navbar a', .2, {color: '#7f7f7f'}, "-=.2")
      .to('#nav button', .2, {color: '#7f7f7f', backgroundColor: 'rgba(0,0,0,0)'}, "-=.2")
      .fromTo('#portfolio-btn', .2, {backgroundColor: 'none'}, {backgroundColor: '#cdcdcd', overwrite: false}, "-=.2")
    ;

    var containerScene = new ScrollMagic.Scene({
      triggerElement: '#page2',
      offset: -56,
    }).setTween(page2)
      .triggerHook("onLeave")
      .addTo(controller)
    ;

    var page3 = new TimelineLite();
    page3.to('#nav button', .2, {backgroundColor: 'none'})
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
    page4.to('.navbar', .2, {backgroundColor: 'rgba(0,0,0,0.3)'})
      .to('.navbar a', .2, {color: 'white'}, "-=.2")
      .to('#nav button', .2, {color: "white", backgroundColor: 'rgba(205,205,205,0)'}, "-=.2")
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
