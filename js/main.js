// main.js

// 2단계 메뉴
$(function() {
    $('.depth1 > li').hover(
        function() {
            $('.depth2').stop().slideDown(200);
        },
        function() {
            $('.depth2').stop().slideUp(200);
        }
    );
});

// 메인페이지 배너 bxslider 
$(document).ready(function(){

  $('#visual').imagesLoaded( function() {
    // images have loaded
    $('.slider').bxSlider({
      // 효과: horizontal', 'vertical', 'fade'
      mode: 'fade',
      // 인터벌 시간
      pause: 5000,
      // 자동재생: true | false
      auto: true
    });
  });

});

// choice 슬라이더
$(function () {
    var left = 0;
    var duration = 5000;
    var choiceSlider;

    // 초기화
    $('#choice > .choice2').hide();
    $('#choice > .choice2').eq(left).show();

    $('.choice_pager > a').on('click', function() {
      clearInterval(choiceSlider);
      var index = $(this).index();
      $("#choice > .choice2").hide();
      $("#choice > .choice2").eq(index).show();
      $('.choice_pager > a').removeClass('choice_active');
      $(this).addClass('choice_active');
    //   sliderStart();
    })
    
    function sliderStart() {
      choiceSlider = setInterval(function () {
        $("#choice > .choice2").hide();
        if(left >= 1) {
          left = 0;
        }
        else {
          left = left + 1;
        }
        $('.choice_pager > a').removeClass('choice_active');
        $('.choice_pager > a').eq(left).addClass('choice_active');
        $("#choice > .choice2").eq(left).show();
      }, duration);
    }
  
    sliderStart();
  
    // 마우스가 올라가면 슬라이더 정지
    $('.choice2, .choice_pager').hover(
      function() {
        clearInterval(choiceSlider);
      },
      function() {
        sliderStart();
        // console.log('start');
      }
    )
  
  }); //$end

// bxslider 
$(document).ready(function(){

  $('#content').imagesLoaded( function() {
    // images have loaded
    $('.sub2_1_slider').bxSlider({
      // 효과: horizontal', 'vertical', 'fade'
      mode: 'fade',
      // 인터벌 시간
      pause: 5000,
      // 자동재생: true | false
      auto: true
    });
  });

});