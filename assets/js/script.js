


$('.hero-slider').slick({
    arrows:true,
    prevArrow: '<i class="fas fa-arrow-left prev-arrow"></i>',
    nextArrow:' <i class="fas fa-arrow-right next-arrow"></i>',
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.hero-bottom-slider').slick({
    arrows:true,
    prevArrow: '<i class="fas fa-arrow-left prev-arrow"></i>',
    nextArrow:' <i class="fas fa-arrow-right next-arrow"></i>',
    dots: false,
    infinite: true,
    autoplay:true,
    centerMode:true,
    centerPadding:"0",
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode:false
        }
      },
      {
        breakpoint: 576.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  new VenoBox({
    selector: '.my-video-links',
   });


   $('.players-slider').slick({
    arrows:true,
    prevArrow: '<i class="fas fa-arrow-left prev-arrow"></i>',
    nextArrow:' <i class="fas fa-arrow-right next-arrow"></i>',
    dots: false,
    autoplay:true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode:false
        }
      },
      {
        breakpoint: 576.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
   $('.games-slider').slick({
    arrows:true,
    prevArrow: '<i class="fas fa-arrow-left prev-arrow"></i>',
    nextArrow:' <i class="fas fa-arrow-right next-arrow"></i>',
    dots: false,
    autoplay:true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
   $('.player-member-slider').slick({
    arrows:true,
    prevArrow: '<i class="fas fa-chevron-left pev-arw"></i>',
    nextArrow:'<i class="fas fa-chevron-right nxt-arw"></i>',
    dots: false,
    autoplay:true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199.99,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });








$(window).scroll(function(){
  if($(window).scrollTop() > 200){
    $(".fixd-menu").addClass("fixd-menu-change")
  }else{
    $(".fixd-menu").removeClass("fixd-menu-change")
  }
  if($(window).scrollTop() > 1000){
    $(".backtotop").fadeIn()
  }else{
    $(".backtotop").fadeOut()
  }

  
})

$(".backtotop").click(function(){
  $("html,body").animate({
    scrollTop:0,
  },1000)
  
})


