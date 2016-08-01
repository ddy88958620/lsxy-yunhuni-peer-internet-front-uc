$(document).ready(function() {
    $('#form-password').keyup(function () {
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");
        if (false == enoughRegex.test($(this).val())) {
            $('#pw-strength').removeClass('pw-weak');
            $('#pw-strength').removeClass('pw-medium');
            $('#pw-strength').removeClass('pw-strong');
            $('#pw-strength').addClass(' pw-defule');
            //密码小于六位的时候，密码强度图片都为灰色
        }
        else if (strongRegex.test($(this).val())) {
            $('#pw-strength').removeClass('pw-weak');
            $('#pw-strength').removeClass('pw-medium');
            $('#pw-strength').removeClass('pw-strong');
            $('#pw-strength').addClass(' pw-strong');
            //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强
        }
        else if (mediumRegex.test($(this).val())) {
            $('#pw-strength').removeClass('pw-weak');
            $('#pw-strength').removeClass('pw-medium');
            $('#pw-strength').removeClass('pw-strong');
            $('#pw-strength').addClass(' pw-medium');
            //密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等
        }
        else {
            $('#pw-strength').removeClass('pw-weak');
            $('#pw-strength').removeClass('pw-medium');
            $('#pw-strength').removeClass('pw-strong');
            $('#pw-strength').addClass('pw-weak');
            //如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的
        }
        return true;
    });
    $('#defaultForm').bootstrapValidator({
        message: '',
        feedbackIcons: {
          /*  valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'*/
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
                        max: 25,
                        message: '用户名长度为6-25位'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 18,
                        message: '密码长度为6-18位'
                    },
                    different: {
                        field: 'username',
                        message: '用户名和密码不能相同'
                    }
                }
            },
            repassword: {
                validators: {
                    notEmpty: {
                        message: '确认密码不能为空'
                    },
                    identical: {
                        field: 'password',
                        message: '两次密码不一致'
                    }

                }
            }
        }
    });
    $('#resetBtn').click(function() {
        $('#defaultForm').data('bootstrapValidator').resetForm(true);
    });
});

$('input').keyup(function(){
    $('.tips-error').hide();
});