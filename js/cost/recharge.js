$(document).ready(function () {
    $('#costDefulat').bootstrapValidator({
        message: '',
        feedbackIcons: {},
        submitHandler: function () {
        },
        fields: {
            radiovalid: {
                selector: '.radiovalid',
                message: '请选择支付方式',
                validators: {
                    notEmpty: {
                        message: '请选择支付方式'
                    }
                }
            },
            price: {
                selector: '.costprice',
                message: '请输入正确的金额',
                validators: {
                    notEmpty: {
                        message: '充值金额不能为空'
                    },
                    regexp: {
                        //regexp: /^[0-9]+([.]{1}[0-9]+){0,1}$/,
                        regexp: /^([1-9]\d*(\.\d[1-9]{0,1})?)|(0\.\d[1-9]{0,1})$/,
                        message: '请输入正确的金额'
                    }
                }
            }

        }
    });

    
});




