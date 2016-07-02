var countdown = 60;

function settime(val) {
    if (countdown == 0) {
        val.removeAttr("disabled");
        val.html('发送验证码');
        countdown = 60;
        return;
    } else {
        val.attr('disabled',"true");
        val.html("重新发送(" + countdown + ")");
        countdown--;
    }
    setTimeout(function() {
        settime(val)
    },1000)
}
function showmsg(tips,cls){
    $("."+cls).html(tips).show();
}

$('#send-code').click(function(){
    sendCode();
    settime($(this));
});



$('.modalCancel').click(function(){
    $('#mobilebox').fadeOut();
    $('#show-bg').fadeOut();
});
$('.showMobilebox').click(function(){

    var id = $(this).attr('data-id');
    var moible = $('#voild-'+id).val();
    $('#modalmobile').html(moible);

    $('#modalmobile').attr('data-id',id);

    $('.moadltips').html('');
    $('#mobilebox').fadeIn();
    $('#show-bg').fadeIn();
});
$('input').keyup(function(){
    $('.tips-error').hide();
});

//验证手机格式

function regMobile(){
    var mobile = $('#modalmobile').html();
    reg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/;
    if(!reg.test(mobile)){
        return false;
    }
    return true;
}


