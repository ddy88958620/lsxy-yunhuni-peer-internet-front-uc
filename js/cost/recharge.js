$(document).ready(function() {
    $('#costDefulat').bootstrapValidator({
        message: '',
        feedbackIcons: {
        },
        submitHandler: function(){
            alert(2);return false;
        },
        fields: {
            price: {
                selector:'.costprice',
                message: '',
                validators: {
                    notEmpty: {
                        message: '请输入正确的金额'
                    },
                    regexp: {
                        regxp: /^[0-9]{1,20}$/,
                        message: '用户名必须大于6，小于25个字符'
                    }
                }
            },
            radiovalid:{
                selector:'.radiovalid',
                message:'请选择支付方式',
                validators: {
                    notEmpty: {
                        message: '请选择支付方式'
                    }
                }
            }
        }
    });
});

