$(document).ready(function() {



    //页面切换ivr
    $('#tabModalBtn').click(function(){
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
                       showtoast('请先阅读IVR协议');
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



   
    $('.tabModalBtn-2').click(function(){
        var id = $(this).attr('data-id');
        var spotindex = 0;
        var res = true;
        $('.sopt-2').each(function () {
            if(spotindex==id){
                $(this).addClass('s-active');
            }
            spotindex++;
        });
        if(res==true){
            var contentindex = 0;
            $('.contentModal-2').each(function () {
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

    var type = $(this).attr('data-type');
    $('#mobilebox-'+type).fadeOut();
    $('#show-bg').fadeOut();
});

function showBox(type){
    $('#mobilebox-'+type).fadeIn();
    $('#show-bg').fadeIn();
}

function modalAction(index){
    $('.spot').each(function () {
        $(this).removeClass('s-active');
    });
    $('.spot').each(function () {
        if($(this).attr('data-action')<=index)
            $(this).addClass('s-active');
    });
    $('.contentModal').each(function () {
        if($(this).attr('data-action')==index)
            $(this).show();
        else
            $(this).hide();
    });
}

$('.tabModalBtn').click(function(){
    var id = $(this).attr('data-id');
    var isfun = $(this).attr('data-fun');
    if(isfun!=undefined){
        if(eval($(this).attr('data-fun'))==true)
            modalAction(id);
        return ;
    }
    modalAction(id);
});

function tabModalBtn(id,fun){
    if(fun!=undefined){
        if(eval(fun)==true)
            modalAction(id);
        return ;
    }
    modalAction(id);
}


