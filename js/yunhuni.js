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
var ajaxsubmit = function(url, param, fun ,type) {
  $.ajax({
    type: type,
    url: url,
    // timeout:2000,
    data: param,
    cache: false,
    dataType: "json",
    success: function(datas) {
      console.log(JSON.stringify(datas));
      if (datas != datas) {
        var _code = datas.code;
        //请求正常
        if(_code=='0010'){
          var _msg = datas.msg;
          var url = datas.data;
          showtoast(_msg,url);
        }
        //请求异常
        else if (_code =='1111'){
          var _msg = datas.msg;
          showtoast(_msg);
          fun(datas, 1111);
        }else if(_code !=null && _code.trim() != ""){
          fun(datas, 0000);
        }else{
          showtoast("网络异常");
        }

        //
      }
    },
    error: function() {
      showtoast("网络错误，请重试");
    }
  });
};


/**公用的异步 同步*/
var ajaxsync = function(url, param, fun ,type) {
  $.ajax({
    type: type,
    url: url,
    // timeout:2000,
    data: param,
    cache: false,
    dataType: "json",
    async:false,
    success: function(datas) {
      console.log(JSON.stringify(datas));

      if (datas != datas) {
        var _code = datas.code;
        //请求正常
        if(_code=='0010'){
          var _msg = datas.msg;
          var url = datas.data;
          showtoast(_msg,url);
        }
        //请求异常
        else if (_code =='1111'){
          var _msg = datas.msg;
          showtoast(_msg);
          fun(datas, 1111);
        }else if(_code !=null && _code.trim() != ""){
          fun(datas, 0000);
        }else{
          showtoast("网络异常");
        }

        //
      }
    },
    error: function() {
      showtoast("网络错误，请重试");
    }
  });
};


