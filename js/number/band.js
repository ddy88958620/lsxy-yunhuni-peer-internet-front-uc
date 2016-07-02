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


    $('#mobilebox').fadeIn();
    $('#show-bg').fadeIn();
});
$('input').keyup(function(){
    $('.tips-error').hide();
});