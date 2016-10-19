$(function () {
  $('.monthstart ').datepicker({
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

  $('.sessionstart ').datepicker({
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


  $('.apistart ').datepicker({
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

  // initchart();
  // sessioncharts();
  // apicharts();


});
