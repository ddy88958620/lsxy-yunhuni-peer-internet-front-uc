
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












$('#passwordeidt').click(function () {
    bootbox.setLocale("zh_CN");
    /*bootbox.dialog({
     message: "I am a custom confirm",
     title: "Confirm title",
     buttons: {
     Cancel: {
     label: "Cancel",
     className: "btn-default",
     callback: function () {
     alert("Cancel");
     }
     }
     , OK: {
     label: "OK",
     className: "btn-primary",
     callback: function () {
     alert("OK");
     }
     }
     }
     })*/
    var message = '<section id="password-modal" >' +
        '<form action="" method="post" class="form-horizontal" id="password-form" > ' +
        '<div class="form-group"> ' +
        '<div class="col-md-3 text-right">新密码 : </div>' +
        ' <div class="col-md-6"> <input type="password" value="" name="newpassword" class="form-control"  /> </div>' +
        ' </div> ' +
        '<div class="form-group"> ' +
        '<div class="col-md-3 text-right">重复密码 : </div>' +
        ' <div class="col-md-6"> <input type="password" value="" name="newrepassword"  class="form-control" /> </div> ' +
        '</div> ' +
        '</form> ' +
        '<div class="text-center" id="modal-tips" style="display: none;"><img src="images/index/errer.png"><span id="modal-tips-msg"></span></div>' +
        '</section>';

    bootbox.confirm({
        title: '修改登录密码',
        message: message,
        callback: function (result) {
            if (result) {
                //逻辑验证
                var pas = $('input[name="newpassword"]').val();
                var repas = $('input[name="newrepassword"]').val();
                if(pas.length<=6 || pas.length>=18){
                    moadlTips('密码必须大于6，小于18个字符');return false;
                }
                if (pas != repas) {
                    moadlTips('两次密码出入不一致');return false;
                }
                $('#password-form').submit();
            }
        }
    })
});

function moadlTips(msg) {
    $('#modal-tips-msg').html(msg);
    $('#modal-tips').show();
}



