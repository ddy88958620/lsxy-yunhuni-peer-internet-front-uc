var countdown = 60;

$('#modal-hidden').click(function(){
    $('#shadow-bg').fadeOut();
    $('#modal-phone').fadeOut();
});
/*显示modal*/
function showmodal() {
    var phone = $('input[name="phone"]').val();
    var spring =  phone.substring(0,4) + '****' + phone.substring(8,11) ;
    $('#phone_number').html(spring);
    $('#shadow-bg').fadeIn();
    $('#modal-phone').fadeIn();
}
/*获取验证码*/
$('#send-code').click(function(){
    send_phone_code();
    settime($(this));
});

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
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        submitHandler: function(){
        },
        fields: {
            username: {
                message: '用户名无效',
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '用户名必须大于6，小于30个字符'
                    }
                    /**
                     * 添加方法 异步验证用户名是否存在
                     remote: {
                            url: '#',
                            message: '用户名不可用'
                        },**/
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: '邮箱地址不能为空'
                    },
                    emailAddress: {
                        message: '请输入正确的邮箱地址格式'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: '手机不能为空'
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
        var login = $('#defaultForm').data('bootstrapValidator').isValid();
        if(login==true)
            showmodal();
        else
            $('#defaultForm').bootstrapValidator('validate');
    });

    $('#emailForm').bootstrapValidator({
        message: '',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
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
                    emailAddress: {
                        message: '请输入正确的邮箱地址格式'
                    }
                }
            }
        }
    });

    $('#phoneForm').bootstrapValidator({
        message: '',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        submitHandler: function(){
        },
        fields: {
            phone: {
                selector: '#phone',
                validators: {
                    notEmpty: {
                        message: '手机不能为空'
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
                        message: '请输入四位数的手机号码'
                    }
                }
            }

        }
    });


});