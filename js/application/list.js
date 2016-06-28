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
        $('.tabModalBtn').each(function () {
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
        $('#mobilebox').fadeOut();
        $('#show-bg').fadeOut();
    });

    function showBox(){
        $('#mobilebox').fadeIn();
        $('#show-bg').fadeIn();
    }
    
});
