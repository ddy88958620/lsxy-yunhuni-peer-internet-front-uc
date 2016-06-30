$(document).ready(function() {
    //或
    $('.tabtarget').click(function(){
        var id = $(this).attr('data-toggle');
        cleanModal();
        showBox();
    });

    //初始化modal 数据
    function cleanModal(){
        hideSpot();
        hideModal();
    }

    function hideSpot(){
        var index = 0;
        $('.spot').each(function () {
            if(index==0)
                $(this).addClass('s-active');
            else
                $(this).removeClass('s-active');
            index++;
        });
    }

    function hideModal(){
        var index = 0;
        $('.contentModal').each(function () {
            if(index==0)
                $(this).show();
            else
                $(this).hide();
            index++;
        });
    }


    //页面切换
    $('.tabModalBtn').click(function(){
        var id = $(this).attr('data-id');
        var spotindex = 0;
        $('.spot').each(function () {
            if(spotindex==id){
                $(this).addClass('s-active');
            }
            spotindex++;
        });
        var contentindex = 0;
        $('.contentModal').each(function () {
            if(contentindex==id)
                $(this).show();
            else
                $(this).hide();
            contentindex++;
        });
    });



    $('.modalCancel').click(function(){
        var id = $(this).attr('data-id');
        $('#modal'+id).fadeOut();
        $('#show-bg').fadeOut();
    });

    $('.modalShow').click(function(){
        var id = $(this).attr('data-id');
        
        $('#modal'+id).fadeIn();
        $('#show-bg').fadeIn();
    });

    $.fn.datepicker.defaults.autoclose = true;

    $('.datepicker').datepicker({
        language: "zh-CN",
        setDate: '10/2015',
        format: 'yyyy-mm-dd',
        viewMode: "days",
        minViewMode: "days",
        todayHighlight: true,
        todayBtn: true,
        autoclose: true //fail
    }).on('changeDate',function(e){
        $(this).datepicker('hide')
    });


    function hideModal(id){
        $('#modal'+id).fadeOut();
        $('#show-bg').fadeOut();
    }



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
