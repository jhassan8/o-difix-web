(function($) {
  var h = $('header').height();
  function hf(){
    if($('header').length ){
      $(window).scroll(function() {
        var s = $(window).scrollTop();
        if(s >= h)
          $("header").addClass("header_fix");
        else
          $("header").removeClass("header_fix");
      });
    };
  };
  hf();
  pvo();
})(jQuery)

// Play video outstanding section
function pvo() {
  setTimeout(function(){
    $('.outstanding_section .player').show();
    $('.outstanding_section .info .synopsis').hide();
    $('.outstanding_section .player video')[0].play();
  }, 10000);
  $('.outstanding_section .player video')[0].addEventListener('ended',function(e) {
    $('.outstanding_section .info .synopsis').show();
    $('.outstanding_section .player').hide();
  }, false);
}

// Play video from elements selected
function pve(c) {
  c.find('.player').show();
  c.find('.player').find('video')[0].play();
  c.find('.player').find('video')[0].addEventListener('ended',function(e) {
    c.find('.player').hide();
  }, false);
}

// Stop video from elements selected
function sve(c) {
  try {
    c.find('.player video')[0].currentTime = 0;
    c.find('.player video')[0].pause();
    c.find('.player').hide();
  } catch (e) { console.log('fail stop');}
}

$('.carousel-i').slick({
  dots: false,
  infinite: true,
  speed: 300,
  lazyLoad: 'ondemand',
  slidesToShow: 10,
  slidesToScroll: 10,
  dots: true,
  responsive: [
    {
      breakpoint: 1730,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 10,
      }
    },
    {
      breakpoint: 1530,
      settings: {
        slidesToShow: 9,
        slidesToScroll: 9,
      }
    },
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
      }
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
      }
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    }
  ]
});

$('.previous').click(function() {
  $("#carousel-i" + $(this).attr('carousel')).slick('slickPrev');
});

$('.next').click(function() {
  $("#carousel-i" + $(this).attr('carousel')).slick('slickNext');
});

$('section .row .details-select .close').click(function() {
  var details = $(this).parent();
  removeDetailsSelect(details);
  sve(details);
});

$(document).on('change', ".labels input", function() {
  var tabs = $(this).parent().parent().parent().find('.tabs-contents');
  var title = $(this).parent().parent().parent().find('.title');
  tabs.find('.tab-content').hide();
  switch ($(this).attr("id")) {
    case 'tab-0':
      tabs.find('.tab-content.info').show();
      title.removeClass('x10');
    break;
    case 'tab-1':
      tabs.find('.tab-content.episodes').show();
      title.addClass('x10');
      createCarouselEpisodes($(this).parent().parent().parent());
    break;
    case 'tab-2':
      tabs.find('.tab-content.details').show();
      title.addClass('x10');
    break;
  }
});

$(document).on('click', "a.info", function() {
  removeDetailsSelect($('.details-select-visible'));
  var details = $(this).parent().parent().parent().parent().parent().parent().find('.details-select');
  var category = details.parent().find('.row-elements').find('.category');
  details.addClass('details-select-visible');
  /* DOM */
  details.find('.image').html('<img src="img/back.jpg">');
  details.find('.player').html('<video><source src="img/video.mp4" type="video/mp4"></video>');
  details.find('.title').html('<img src="img/title.png">');
  details.find('.synopsis').text('Estuvo desaparecida durante siete años. Ahora está de vuelta, con misteriosos poderes, y recluta a cinco extraños para una misión secreta.');
  details.find('.tabs .labels').html('<input name="tabs" type="radio" id="tab-0" checked/><label for="tab-0">Description</label><input name="tabs" type="radio" id="tab-1"/><label for="tab-1">Episodes</label><!-- <input name="tabs" type="radio" id="tab-2"/><label for="tab-2">Details</label> -->');
  /* */
  $('html, body').animate({
    scrollTop: category.offset().top - $("header").height() - category.height() - 10
  }, {
    duration: 1000,
    complete: function() {
      pve(details);
    }
  });
});

$('.s-open').click(function() {
  $(this).parent().addClass('active');
  $(this).parent().find('input').focus();
  $('.nav .mobile').hide();
});

$('.s-close').click(function() {
  $(this).parent().addClass('width');
  $('.nav .mobile').show();
  setTimeout(function () {
    $(this).parent().removeClass('active');
    $(this).parent().removeClass('width');
  }, 300);
});

$('.search input').focusout(function() {
  $(this).parent().addClass('width');
  $('.nav .mobile').show();
  setTimeout(function () {
    $('.s-close').parent().removeClass('active');
    $('.s-close').parent().removeClass('width');
  }, 300);
});

function removeDetailsSelect(details) {
  sve(details);
  details.find('.info').show();
  details.find('.episodes').hide();
  details.find('.details').hide();
  details.find('.title').removeClass('x10');
  details.find('.episodes-row').html("");
  details.find('.image').html('');
  details.find('.player').html('');
  details.find('.title').html('');
  details.find('.synopsis').text('');
  details.find('.tabs .labels').html('');
  details.removeClass('details-select-visible');
}

function createCarouselEpisodes(details) {
  if(details.find('.carousel-e').length == 0) {
    var content = '<div class="carousel-e" id="carousel-e">';
    for(var i=1; i<=20; i++)
    content = content + '<div class="item"><a class="screenshot"><img src="https://via.placeholder.com/250x150/7c7c7c/fff?text='+i+'"></a><div class="details"><div class="name">Name episode '+i+'</div><div class="synopsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div></div></div>';
    details.find('.episodes-row').html(content + '</div>');
    $('.carousel-e').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 10,
      slidesToScroll: 10,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    });
  }
}
