var countdown = 60;

$('#modal-hidden').click(function(){
    $('#shadow-bg').fadeOut();
    $('#modal-mobile').fadeOut();
});
/*显示modal*/
function showmodal() {
    $('#showtips').hide();
    var mobile = $('input[name="mobile"]').val();
    var spring =  mobile.substring(0,4) + '****' + mobile.substring(8,11) ;
    $('#mobile_number').html(spring);
	if($('#second-codeblock').length>0){
	   $('#second-codeblock').html('');
	}
	if($('.tips-error').length>0){
	   $('.tips-error').html('');
	}
	$('#mobileCode').val("");
    $('#shadow-bg').fadeIn();
    $('#modal-mobile').fadeIn();
}
/*获取验证码*/
$('#send-code').click(function(){
	if(send_mobile_code()){
		settime($(this));
	}  
});

function tipsmsg(msg,id){
	id = ((id==null||id=="")?"showtips":id);
    $('#' + id).html(msg);
    $('#' + id).show();
}


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
$(document).ready(function() {
    $('#form-username').val('');
    $('#defaultForm').bootstrapValidator({
        message: '',
        feedbackIcons: {
           /* valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'*/
        },
        submitHandler: function(){
        },
        fields: {
            username: {
                icon:false,
                selector:'#form-username',
                message: '用户名无效',
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 25,
                        message: '用户名长度为6-25位'
                    }
                }
            },
            email: {
                selector:'#form-email',
                validators: {
                    notEmpty: {
                        message: '邮箱地址不能为空'
                    },
                    regexp:{
                        regexp : /^[a-zA-Z0-9._%+-]+@(?!.*\.\..*)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: '请输入正确的邮箱地址格式'
                    }
                }
            },
            mobile: {
                selector:'#form-mobile',
                validators: {
                    notEmpty: {
                        message: '手机号不能为空'
                    },
                    regexp: {
                        regexp: /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/,
                        message: '请输入正确的手机格式'
                    }
                }
            }
        }
    });

    $('#validateBtn').click(function(){
        $('#defaultForm').bootstrapValidator('validate');
        var login = $('#defaultForm').data('bootstrapValidator').isValid();
        // 用户是否存在
        if(login==true){
            var reg= reg_isexit();
            if(reg==false){
                return  false;
            }
            showmodal();
        }  
    });


    $('#emailForm').bootstrapValidator({
        message: '',
        feedbackIcons: {
            /*valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'*/
        },
        submitHandler: function(){
        },
        fields: {
            email: {
                selector:'#email',
                validators: {
                    notEmpty: {
                        message: '邮箱地址不能为空'
                    },
                    regexp:{
                        regexp : /^[a-zA-Z0-9._%+-]+@(?!.*\.\..*)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: '请输入正确的邮箱地址格式'
                    }
                }
            }
        }
    });

    $('#mobileForm').bootstrapValidator({
        message: '',
        feedbackIcons: {
         /*   valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'*/
        },
        fields: {
            mobile: {
                selector: '#mobile',
                validators: {
                    notEmpty: {
                        message: '手机号不能为空'
                    },
                    regexp: {
                        regexp: /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/,
                        message: '请输入正确的手机格式'
                    }
                }
            },
            code: {
                selector: '#code',
                validators: {
                    notEmpty: {
                        message: '验证码不能为空'
                    },
                    stringLength: {
                        min: 4,
                        max: 4,
                        message: '请输入四位数的手机验证码'
                    }
                }
            }
        }
    });

    $('#mobileBtn').click(function(){
        var login = $('#mobileForm').data('bootstrapValidator').isValid();
        // 手机验证码是否通过
        if(login==true){
            var reg= reg_code();
            if(reg==false){
                return  false;
            }
        }
        else
            $('#mobileForm').bootstrapValidator('validate');
    });


});

$('input').keyup(function(){
    $('.tips-error').hide();
});



function regMobile(mobile){
    reg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/;
    if(!reg.test(mobile)){
        return false;
    }
    return true;
}