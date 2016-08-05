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
		max30:{
			selector: '.max30',
			validators: {
			notEmpty: {
				message: '不能为空',
			},
			stringLength: {
			  max: 30,
			  message: '最多输入30个字'
			}
		  }
		},
		max50:{
			selector: '.max50',
			validators: {
			notEmpty: {
				message: '不能为空',
			},
			stringLength: {
			  max: 50,
			  message: '最多输入50个字'
			}
		  }
		},
		max100:{
			selector: '.max100',
			validators: {
			notEmpty: {
				message: '不能为空',
			},
			stringLength: {
			  max: 100,
			  message: '最多输入100个字'
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
		limit18: {
          selector: '.limit18',
          validators: {
            notEmpty: {
                message: '不能为空'
            },
			regexp: {
                    regexp: /^([0-9,A-Z]){18}$/,
                    message: '18位数字或者大写英文字母'
			}
          }
        },
        username: {
            message: '用户名无效',
            validators: {
                notEmpty: {
                    message: '用户名不能为空'
                },
                stringLength: {
                    min: 2,
                    max: 5,
                    message: '用户名长度为2-5位'
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
        newphone: {
            validators: {
                notEmpty: {
                    message: '手机不能为空'
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
                  type: 'image/jpeg,image/png,image/gif,image/bmp,image/x-ms-bmp',
                  maxSize: 2*1024*1024,   // 5 MB,
                  message: '文件大小或者格式不正确'
            },
          }
        },
        tel:{
          selector: '.tel',
          validators: {
            notEmpty: {
              message: '不能为空'
            },
            regexp: {
              regexp: /^(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[3578]\d{9})$)$/,
              message: '请输入正确的手机号码或座机号码'
            }
          }
        }
    }
});



$('.auth_select').on('click',function(){
  var isPersonal = $(this).find("input[type='radio']")[0].checked

  if(isPersonal) {
    $('.personal').css('display', 'block')
    $('.company').css('display', 'none')
  }else {
    $('.company').css('display', 'block')
    $('.personal').css('display', 'none')
	$('.card_select_0').click();
  }
})


$('.card_select_0').on('click',function(){
	$('.card_type01').css('display', 'block')
	$('.card_type02').css('display', 'none')
	$('.card_type03').css('display', 'none')
})

$('.card_select_1').on('click',function(){
	$('.card_type01').css('display', 'none')
	$('.card_type02').css('display', 'block')
	$('.card_type03').css('display', 'none')
})

$('.card_select_2').on('click',function(){
	$('.card_type01').css('display', 'none')
	$('.card_type02').css('display', 'none')
	$('.card_type03').css('display', 'block')
})
})
