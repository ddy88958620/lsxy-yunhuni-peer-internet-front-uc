// slimScrollDiv
// function onResize() {
//   var slim = document.querySelector('.slimScrollDiv')
//   slim.style.height = (window.innerHeight - 80) + 'px'
// }
//
// $(window).resize(function(){
//   onResize()
// })
//


// 一级导航 mini 化
$("#togglerMiniSidebar").on('click',function(event){
  // $('#nav').toggleClass('aside-mini')

  var hasMini = $('#nav').hasClass('aside-mini')
  console.log(hasMini);

  if(hasMini){

    $('#nav').removeClass('aside-mini')
    // tooltips destroy
    $('[data-toggle="tooltip"]').tooltip('destroy')

  }else {

    $('#nav').addClass('aside-mini')
    // tooltips
    $('[data-toggle="tooltip"]').tooltip()

  }

  // 防止冒泡
  return false
})


// 二级导航 隐藏 显示
$('.list a.side-menu-link').on('click', function(){
  var ul = $(this).next()
  var display_text = ul.css('display')

  ul.toggleClass('hidden')

  $(this).find("i").toggleClass('active')

  return false
})

// restfult api 重新生成confirm
$('a.create_confirm').on('click',function(e){
  bootbox.confirm("确定重新生成么", function(result) {
    if(result){
      var url = $('a.create_confirm').attr('href')
      window.location.href = url
    }
  });
  return false
})

// 三级导航 相关
$(".head-box a[href='#subNav']").on('click', function () {
  var isActive = $(this).hasClass('active')
  if(isActive) {
    $(this).parent().css('left','-15px')
  }else {
    $(this).parent().css('left','0px')
  }
})


/**公用的异步*/
var _$= function(url, param, fun) {
  $.ajax({
    type: "post",
    url: url,
    // timeout:2000,
    data: param,
    cache: false,
    dataType: "json",
    success: function(data) {
      if (data != null) {
        var _state = data.state;
        //请求正常
        if (_state == '0') {
          fun(data, 200);
        }
        //请求异常
        else {
          var _error = data.error;
          showtoast(_error);
          fun(data, 500);
        }
      }
    },
    error: function() {
      showtoast("网络错误，请重试");
    }
  });
};



