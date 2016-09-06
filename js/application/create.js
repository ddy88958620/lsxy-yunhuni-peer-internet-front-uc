$('#application_create').bootstrapValidator({
    fields: {
        notEmpty: {
          selector: '.notEmpty',
          validators: {
            notEmpty: {
              message: '不能为空',
            }
          }
        },
        limit20: {
          selector: '.limit20',
          validators: {
            notEmpty: {
              message: '不能为空',
            },
            stringLength: {
              min: 0,
              max: 20,
              message: '20字符以内'
            }
          }
        },
        limit300: {
          selector: '.limit300',
          validators: {
            stringLength: {
              min: 0,
              max: 300,
              message: '300字符以内'
            }
          }
        },
        url:{
          validators:{
            notEmpty: {
              message: '不能为空',
            },
          }
        }
      },


})


