$(function () {
  $('.lastMonth ').datepicker({
    language: "zh-CN",
    format: 'yyyy-mm',
    startView: "months",
    minViewMode: "months",
    todayHighlight: true,
    todayBtn: true,
    autoclose: true //fail
  }).on('changeDate',function(e){
    $(this).datepicker('hide')
  });

  $('.currentMonth ').datepicker({
    language: "zh-CN",
    format: 'yyyy-mm',
    startView: "months",
    minViewMode: "months",
    todayHighlight: true,
    todayBtn: true,
    autoclose: true //fail
  }).on('changeDate',function(e){
    $(this).datepicker('hide')
  });

  $('.current_month').on('click',function(e){
    var date = new Date()
    var str = date.getFullYear() +'-' + (date.getMonth() +1)
    $( ".currentMonth" ).datepicker( "setDate", str);
    $( ".lastMonth" ).datepicker( "setDate", str);
  })

  $('.last_month').on('click',function(e){
    var date = new Date()
    var str = date.getFullYear() +'-' + (date.getMonth())
    var secondMonth = date.getFullYear() +'-' + (date.getMonth() )
    $( ".currentMonth" ).datepicker( "setDate", str);
    $( ".lastMonth" ).datepicker( "setDate", secondMonth);
  })

  $('#findform').click(function(){
    $('.tips-error').html();
    var starttime = $('.currentMonth').val();
    var lastMonth = $('.lastMonth').val();
    var tips = '';
    tips = compareTime(starttime,lastMonth);
    if(tips){
      $('.tips-error').html(tips); return ;
    }
    document.getElementById('command').submit();
  });

});


function compareTime(starttime,endtime){
  if(!starttime){
    return '请填写开始时间';
  }
  if(!endtime){
    return '请填写结束时间';
  }
  var d1 = new Date(starttime.replace(/\-/g, "\/"));
  var d2 = new Date(endtime.replace(/\-/g, "\/"));
  if(d1>d2){
    return '时间范围填写有误';
  }
  return '';
}