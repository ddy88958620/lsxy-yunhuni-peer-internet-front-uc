$(document).ready(function() {
    //页面切换
    $('.tabModalBtn').click(function(){
        var id = $(this).attr('data-id');
        var spotindex = 0;
        var res = true;
        $('.spot').each(function () {
            if(spotindex==id){
               if(id==1){
                   creatIVR();
               }
               if(id==3){
                   var result = readbook();
                   if(result==false){
                       res = false; return;
                   }
                   //监听支付状态
                   var result = syncpay();
                   if(result==false){
                       res = false; return;
                   }
               }
                $(this).addClass('s-active');
            }
            spotindex++;
        });
        if(res==true){
            var contentindex = 0;
            $('.contentModal').each(function () {
                if(contentindex==id)
                    $(this).show();
                else
                    $(this).hide();
                contentindex++;
            });
        }
    });
});


//初始化modal 数据
function cleanModal(){
    $('#modal-appid').val('');
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


$('.modalCancel').click(function(){
    $('#mobilebox').fadeOut();
    $('#show-bg').fadeOut();
});

function showBox(){
    $('#mobilebox').fadeIn();
    $('#show-bg').fadeIn();
}

function readbook(){
    if(!$('#readbook').is(':checked')) {
        return false;
    }
    return true;
}