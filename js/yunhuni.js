// slimScrollDiv
function onResize() {
  var content = document.getElementById('content')
  var h = $(document.body).height() + 'px';
  content.style.height = h;
  //var slim = document.querySelector('.slimScrollDiv')
  //slim.style.height = (window.innerHeight - 80) + 'px'
}
onResize();

$(window).resize(function () {
  onResize();
})

// 一级导航 mini 化
$("#togglerMiniSidebar").on('click', function (event) {
  // $('#nav').toggleClass('aside-mini')
  var hasMini = $('#nav').hasClass('aside-mini');
  if (window.localStorage) {
    localStorage.setItem("hasMini", hasMini);
  }
  if (hasMini) {
    $('#nav').removeClass('aside-mini aside-transition')
    // tooltips destroy
    $('[data-toggle="tooltip"]').tooltip('destroy')
  } else {
    $('#nav').addClass('aside-mini aside-transition')
    // tooltips
    $('[data-toggle="tooltip"]').tooltip()

  }
  // 防止冒泡
  return false
})

//检查是否开启提示模式
function isHasMini() {
  var hasMini = true;
  if (window.localStorage) {
    var hasMini = localStorage.getItem("hasMini");
  }
  if (hasMini === 'false') {
    $('#nav').addClass('aside-mini')
    // tooltips
    $('[data-toggle="tooltip"]').tooltip()
  }
}

isHasMini();

// 二级导航 隐藏 显示
$('.list a.side-menu-link').on('click', function () {
  var ul = $(this).next()
  var display_text = ul.css('display')
  ul.toggleClass('hidden')
  $(this).find("i").toggleClass('active')
  return false
})

// restfult api 重新生成confirm
$('a.create_confirm').on('click', function (e) {
  bootbox.confirm("确定重新生成么", function (result) {
    if (result) {
      var url = $('a.create_confirm').attr('href')
      window.location.href = url
    }
  });
  return false
})

// 三级导航 相关
$(".head-box a[href='#subNav']").on('click', function () {
  var isActive = $(this).hasClass('active')
  if (isActive) {
    $(this).parent().css('left', '-15px')
  } else {
    $(this).parent().css('left', '0px')
  }
})


/**公用的异步*/
var ajaxsubmit = function (url, param, fun, type) {
  return $.ajax({
    type: isNullStr(type) ? "post" : type,
    url: url,
    timeout: 60 * 1000,
    data: param,
    cache: false,
    dataType: "json"
  }).done(function (datas) {
    if (datas) {
      //超时跳转登陆页
      if (datas.errorCode == '0010') {
        showtoast(datas.errorMsg, ctx + "/login");
      } else {
        fun(datas);
      }
    }
  }).fail(function (datas) {
    showtoast("网络错误，请重试");
  });
};

function isNullStr(data) {
  if (data == null || data.trim() == "" || data == undefined) {
    return true;
  } else {
    return false;
  }
}

/**公用的异步 同步*/
var ajaxsync = function (url, param, fun, type) {
  return $.ajax({
    type: isNullStr(type) ? "post" : type,
    url: url,
    timeout: 60 * 1000,
    data: param,
    cache: false,
    dataType: "json",
    async: false
  }).done(function (datas) {
    if (datas) {
      //超时跳转登陆页
      if (datas.errorCode == '0010') {
        showtoast(datas.errorMsg, ctx + "/login");
      } else {
        fun(datas);
      }
    }
  }).fail(function (datas) {
    showtoast("网络错误，请重试");
  });
};


