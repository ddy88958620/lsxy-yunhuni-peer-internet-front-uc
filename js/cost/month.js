$(function () {
  $.fn.datepicker.defaults.autoclose = true;
    
  $('.datepicker').datepicker({
    language: "zh-CN",
    setDate: '10/2015',
    format: 'yyyy-mm',
    viewMode: "months",
    minViewMode: "months",
    todayHighlight: true,
    todayBtn: true,
    autoclose: true //fail
  }).on('changeDate',function(e){
    $(this).datepicker('hide')
  });
});
