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
})

// slider
$(function() {
    var img_num = 0; // 이미지 번호
    var duration = 4000; // 인터벌 시간
    var sldier; // slider 실행 객체 변수

    // 초기화
    $('.slider > img').fadeOut();
    $('.slider > img').eq(img_num).fadeIn();

    function changeSlider() {
        // 전체 이미지 fadeOut
        $('.slider > img').fadeOut();
        // 현재 이미지 fadeIn
        $('.slider > img').eq(img_num).fadeIn();
        // pager UI 업데이트
        $('.pager > a').removeClass('active');
        $('.pager > a').eq(img_num).addClass('active');
    }

    // 슬라이더 재생
    function sliderStart() {
        slider = setInterval(function() {
            // 마지막 이미지 번호면 처음으로
            if(img_num >= 1) { img_num = 0 } else {
                // 다음 이미지 번호로
                img_num = img_num + 1;
            }
            changeSlider(img_num);
        }, duration);
    }

    // 슬라이더 정지
    function sliderStop() {
        clearInterval(slider);
        console.log('stop');
    }

    sliderStart();

    // 마우스가 올라가면 슬라이더 정지
    $('.slider').hover(
        function() {
            sliderStop();
        },
        function() {
            sliderStart();
            console.log('start');
        }
    )
})

// choice 슬라이더
$(function () {
    var left = 0;
    var duration = 4000;
    var slider;

    // 초기화
    $('#choice > .choice2').show();
    $('#choice > .choice2').eq(left).hide();

    $('.choice_pager > a').on('click', function() {
      clearInterval(slider);
      var index = $(this).index();
      $("#choice > .choice2").hide();
      $("#choice > .choice2").eq(index).show();
      $('.choice_pager > a').removeClass('choice_active');
      $(this).addClass('choice_active');
    //   sliderStart();
    })
    
    function sliderStart() {
      slider = setInterval(function () {
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
        clearInterval(slider);
      },
      function() {
        sliderStart();
        // console.log('start');
      }
    )
  
  }) //$end

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