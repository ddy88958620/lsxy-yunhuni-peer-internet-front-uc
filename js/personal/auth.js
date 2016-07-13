$(function(){
    $(".province").change(function(){
        // setTimeout('initCity()',100);
    });
    // $(".city").change(function(){
    //     setTimeout('initArea()',100);
    // });
    setTimeout('initPCAS()',100);
    function initCity()
    {
        var myselect = $(".city");
        myselect[0].selectedIndex = 0;
        myselect.selectmenu("refresh");
        // myselect = $(".area");
        // myselect[0].selectedIndex = 0;
        // myselect.selectmenu("refresh");
    }

    function initArea()
    {
        var myselect = $(".area");
        myselect[0].selectedIndex = 0;
        myselect.selectmenu("refresh");
    }

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
        username: {
            message: '用户名无效',
            validators: {
                notEmpty: {
                    message: '用户名不能位空'
                },
                stringLength: {
                    min: 2,
                    max: 5,
                    message: '用户名必须大于2，小于5个字符'
                }
                /**
                 * 添加方法 异步验证用户名是否存在
                 remote: {
                        url: '#',
                        message: '用户名不可用'
                    },**/
            }
        },
        idcard: {
          validators: {
            notEmpty: {
              message: '身份证不能为空'
            },
            stringLength: {
              min: 18,
              max: 18,
              message : '身份证号要求18位'
            }
          }
        },
        email: {
            validators: {
                notEmpty: {
                    message: '邮箱地址不能为空'
                },
                emailAddress: {
                    message: '请输入正确的邮箱地址格式'
                }
            }
        },
        phone: {
            validators: {
                notEmpty: {
                    message: '手机不能位空'
                },
                regexp: {
                    regexp: /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/,
                    message: '请输入正确的手机格式'
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

$('#validateBtn, #validateBtnPersonal').click(function(){
  var res = $('#personalAuthForm').data('bootstrapValidator').isValid();;
  if(res==true){
      document.getElementById('personalAuthForm').submit(); return ;
  }
  $('#personalAuthForm').bootstrapValidator('validate');
});

$('.auth_select').on('click',function(){
  var isPersonal = $(this).find("input[type='radio']")[0].checked

  if(isPersonal) {
    $('.personal').css('display', 'block')
    $('.company').css('display', 'none')
  }else {
    $('.company').css('display', 'block')
    $('.personal').css('display', 'none')
  }
})
})
