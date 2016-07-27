$(function(){



    $('#invoiceForm').bootstrapValidator({
        message: '',
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
                        message: '手机号不能为空'
                    },
                    regexp: {
                        regexp: /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/,
                        message: '请输入正确的手机格式'
                    }
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
                        type: 'image/jpeg,image/png,image/gif,image/bmp,image/x-ms-bmp',
                        maxSize: 2*1024*1024,   // 5 MB,
                        message: '文件大小或者格式不正确'
                    },
                }
            },
        }
    });





    $('#validateBtn').click(function(){
        var form = $(this).parents("form");
        form.bootstrapValidator('validate');
        var v = form.data('bootstrapValidator').isValid();
        var bf = bfSubmit();
        // 用户是否存在
        if(v==true && bf)
            form.get(0).submit();
    });

    $('.invoice_radio').on('click',function(){
        var v = $(this).attr('data-val');
        showTab(v)
    })

    function showTab(v){
        $('.invoice-type').each(function(){
            var e = $(this).attr('data-val');
            if(v==e)
                $(this).show().find("input").addClass("notEmpty");
            else
                $(this).hide().find("input").removeClass("notEmpty").val("");
        });

    }

    function getSelectRadio(){
        return $(":radio.invoice_radio:checked").val();
    }

    showTab(getSelectRadio());


    function getObjectURL(file) {
        var url = null ;
        if (window.createObjectURL!=undefined) { // basic
            url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
    }

    $('#uploadfile').change(function() {
        var eImg = $('#imgPre');
        eImg.attr('src', getObjectURL($(this)[0].files[0]));
    });
})


