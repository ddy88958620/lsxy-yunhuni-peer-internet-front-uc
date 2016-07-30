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
                    callback: {
                        //regexp: /^[0-9]+([.]{1}[0-9]+){0,1}$/,
                        // regexp: /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/,
                        message: '请输入正确的金额',
                        callback: function(value, validator) {
                        	//为了不触发多个提示，所以为空是返回true
                        	if(value == "")
                        		return true;
                        	var reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
                        	var r = value.match(reg);
                        	if(r == null){
                        		return false;
                        	}else{
                        		return Number(value) > 0;
                        	}
                           
                        }
                    }
                }
            }

        }
    });

    
});




