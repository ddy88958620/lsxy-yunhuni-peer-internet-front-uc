$(function () {

    $('.currentDay ').datepicker({
        language: "zh-CN",
        format: 'yyyy-mm-dd',
        startView: "days",
        minViewMode: "days",
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

    $('.currentYear ').datepicker({
        language: "zh-CN",
        format: 'yyyy',
        startView: "years",
        minViewMode: "years",
        todayHighlight: true,
        todayBtn: true,
        autoclose: true //fail
    }).on('changeDate',function(e){
        $(this).datepicker('hide')
    });

    initchart();


});
