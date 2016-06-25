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
function showmsg(tips){
    $('.tips-error').html(tips).show();
}
$('#send-code').click(function(){
    var mobile = $('.modalMobile').val();
    reg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/;
    if(!reg.test(mobile)){
        showmsg('请输入正确的手机格式');return false;
    }
    sendCode();
    settime($(this));
});

$('.modalCancel').click(function(){
    $('#mobilebox').fadeOut();
    $('#show-bg').fadeOut();
});

$('.showMobilebox').click(function(){
    $('#mobilebox').fadeIn();
    $('#show-bg').fadeIn();
});



$('input').keyup(function(){
    $('.tips-error').hide();
});