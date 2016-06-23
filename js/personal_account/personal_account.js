
$('#passwordForm').bootstrapValidator({
    message: '',
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    submitHandler: function(){
    },
    fields: {
        newpassword: {
            validators: {
                notEmpty: {
                    message: '密码不能位空'
                },
                stringLength: {
                    min: 6,
                    max: 18,
                    message: '密码必须大于6，小于18个字'
                }
            }
        },
        newrepassword: {
            validators: {
                notEmpty: {
                    message: '重复不能为空'
                },
                identical: {
                    field: 'password',
                    message: '两次密码不一致'
                }
            }
        }
    }
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
            validators: {
                notEmpty: {
                    message: '邮箱不能为空'
                },
                regexp: {
                    regexp: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
                    message: '请输入正确的邮箱格式'
                }
            }
        }
    }
});



function moadlTips(msg) {
    $('#modal-tips-msg').html(msg);
    $('#modal-tips').show();
}



