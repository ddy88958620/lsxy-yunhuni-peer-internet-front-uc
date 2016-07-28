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
$('#send-code,#send-code-email').click(function(){
    var type = $(this).attr('data-type');
    if(type==2){
        if(!regMobile()){
            showmsg('请输入正确的手机格式','moadltips'+type); return false;
        }
    }else if(type==3){
        if(!regEmail){
            showmsg('请输入正确的邮箱格式','moadltips'+type); return false;
        }
    }
    var flag = sendCode();
    if(flag){
        settime($(this));
    }
});

function regMobile(){
    var mobile = $('.modalMobile').val();
    reg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/;
    if(!reg.test(mobile)){
        return false;
    }
    return true;
}

function regEmail(){
    var email = $('.modalEmail').val();
    reg = /^[a-zA-Z0-9._%+-]+@(?!.*\.\..*)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!reg.test(email)){
        return false;
    }
    return true;
}


$('.modalCancel').click(function(){
    countdown=0;
    $('.addmobile1').show();
    $('.addmobile2,.addmobile3').hide();
    $('#mobilebox').fadeOut();
    $('#show-bg').fadeOut();
});
$('.showMobilebox').click(function(){
    $('#mobilebox').fadeIn();
    $('#show-bg').fadeIn();
    var type = $(this).attr('data-type');
    $('#modaltype').val(type);

});
$('input').keyup(function(){
    $('.tips-error').hide();
});