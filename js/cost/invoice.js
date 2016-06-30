$(function(){


    $('#costInvoiceForm').bootstrapValidator({
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
            mobile:{
                selector : '.mobile',
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

    $('#validateBtnCompany, #validateBtnPersonal, #validateBtn').click(function(){

        var v = $('#costInvoiceForm').data('bootstrapValidator').isValid();
        // 用户是否存在
        if(v==true)
            document.getElementById('costInvoiceForm').submit();
        else
            $('#costInvoiceForm').bootstrapValidator('validate');

    });

    $('.invoice_radio').on('click',function(){
        var v = $(this).attr('data-val');
        $('.radiotap').each(function(){
            var e = $(this).attr('data-val');
            if(v==e)
                $(this).show();
            else
                $(this).hide()
        });

    })
})
