$(document).ready(function() {





});


//初始化modal 数据
function cleanModal(type){
    $('#modal-appid').val('');
    hideSpot();
    hideModal(type);
}

function hideSpot(){
    $('.spot').each(function () {
         $(this).removeClass('s-active');
    });
}

function hideModal(type){
    var index = 0;
    $('#mobilebox-'+type+' .contentModal').each(function () {
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
    hideSpot();
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


