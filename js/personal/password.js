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
                        field: 'password',
                        message: '两次密码不一致'
                    },

                }
            },
            file: {
                selector: '.limitImageFile',
                validators: {
                    notEmpty: {
                        message: '请上传文件'
                    },
                    file: {
                        extension: 'jpg,jpeg,png,bmp,gif',
                        type: 'image/jpeg,image/png,image/gif,image/x-ms-bmp',
                        maxSize: 2*1024*1024,   // 5 MB,
                        message: '文件大小或者格式不正确'
                    },
                }
            }
        }
    });



})
