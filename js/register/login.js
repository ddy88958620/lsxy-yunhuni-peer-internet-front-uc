$(document).ready(function() {
    $('#defaultForm').bootstrapValidator({
        message: '',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: '用户名无效',
                validators: {
                    notEmpty: {
                        message: '用户名不能位空'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '用户名必须大于6，小于30个字'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '用户名只能由字母、数字、点和下划线组成'
                    },
                    different: {
                        field: 'password',
                        message: '用户名和密码不能相同'
                    }
                }
            },
            code: {
                validators: {
                    notEmpty: {
                        message: '验证码不能为空'
                    },
                    stringLength: {
                        min: 4,
                        max: 4,
                        message: '请输入4位数的验证码'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能位空'
                    },
                    identical: {
                        field: 'confirmPassword',
                        message: '两次密码不一致'
                    },
                    stringLength: {
                        min: 6,
                        max: 18,
                        message: '密码必须大于6，小于18个字'
                    },
                    different: {
                        field: 'username',
                        message: '用户名和密码不能相同'
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
    $('.tips').hide();
});