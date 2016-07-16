$(function(){
    $('#personalAuthForm').bootstrapValidator({
        message: '',
        // feedbackIcons: {
        //     valid: 'glyphicon glyphicon-ok',
        //     invalid: 'glyphicon glyphicon-remove',
        //     validating: 'glyphicon glyphicon-refresh'
        // },
        submitHandler: function(){
        },
        fields: {
            notEmpty: {
                selector: '.notEmpty',
                validators: {
                    notEmpty: {
                        message: '不能为空',
                    }
                }
            },
            limit15: {
                selector: '.limit15',
                validators: {
                    notEmpty: {
                        message: '不能为空'
                    },
                    stringLength: {
                        min: 15,
                        max: 15,
                        message: '需要15位数字'
                    }
                }
            },
            password: {
                selector: '.password',
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    identical: {
                        field: 'confirmPassword',
                        message: '两次密码不一致'
                    },
                    stringLength: {
                        min: 6,
                        max: 18,
                        message: '密码长度为6-18位'
                    }
                }
            },
            newpassword: {
                selector: '.newpassword',
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 18,
                        message: '密码长度为6-18位'
                    },
                    identical: {
                        field: 'repassword',
                        message: '两次密码不一致'
                    },
                    different: {
                        field: 'password',
                        message:'新密码不能与原密码相同'
                    }
                }
            },
            repassword: {
                selector: '.repassword',
                validators: {
                    notEmpty: {
                        message: '确认密码不能为空'
                    },
                    identical: {
                        field: 'newpassword',
                        message: '两次密码不一致'
                    },

                }
            }
        }
    });



})
