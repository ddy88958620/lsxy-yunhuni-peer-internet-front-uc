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
});
