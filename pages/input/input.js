//index.js
//获取应用实例
var app = getApp()
let SnackBar = require("../../utils/snackbar/snackbar.js")
Page({
  data: {
    v_username_border:'', //用户输入框底部border样式
    v_pwd_border:'',  // 密码输入框底部border样式
    v_float_username:'', // 浮动文字字transform 样式
    v_float_pwd:'',
    num_current_un:0,  // 当前输入的文本位数
    sp_num_current_un:'', // 当前输入文本位数超过限制时的样式
    isPwdError:false  // 提交时 密码输入错误时的文本提示
  },
  
  onLoad: function (options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title: options.title,
      success: function(res) {
        // success
      }
    })
  },
  // 用户名输入框获取焦点时事件回调
  usernameFocus:function(e){
    var that = this;
    console.log(e.detail)
  },
  // 用户名输入框输入时事件回调
  usernameInput:function(e){
    console.log(e.detail)
     this.setData({
      v_username_border:'border-bottom:1px solid red',
     num_current_un:e.detail.value.length
    })
    if(e.detail.value.length!=0){
       this.setData({
        v_float_username:'color:red ;transform: translateY(-18.5px)',
        
        sp_num_current_un:'color:lightseagreen;'
      })
      if(e.detail.value.length>20){
        
        this.setData({
          sp_num_current_un:'color:orangered;'
        })
        SnackBar.getInstance().make({
            snack_title:"username is allowed only 20 words",
            snack_action: 'I see!',
            onActionClick: "onActionClick",
            duration:2000,
            style_snack_action:'display:block;',
            style_snackbar:'background-color:darkgrey;'
        })
      }
      
    }else{
      this.setData({
        v_float_username:'transform: translateY(0px)',
      })
    }
  },
  // // 用户名输入框失去焦点时回调
  usernameBlur:function(e){
    console.log("onBlur")
     this.setData({
      v_username_border:'border-bottom:1px solid grey'
    })
  },

  onActionClick:function(e){
    SnackBar.getInstance().hide()
    setTimeout(()=>{
      this.test("test")
    },2000)
    
  },


  test:function(data){
    console.log(data)
  },

  pwdFocus:function(e){
    
    console.log('onFocus')

  },

  pwdInput:function(e){
    this.setData({
      v_pwd_border:'border-bottom:1px solid red',
      isPwdError:false
    })
    console.log(e.detail)
    if(e.detail.value.length!=0){
      this.setData({
        v_float_pwd:'color:red ; transform: translateY(-18.5px)',
      })
    }else{
      this.setData({
        v_float_pwd:'transform: translateY(0px)',
        
      })
    }
  },

   pwdBlur:function(e){
    console.log("onBlur")
     this.setData({
      v_pwd_border:'border-bottom:1px solid grey; '
     
    })
  },


// 登录按钮模拟表单提交  可用form组件代替
  onLogin:function(e){

    this.setData({
      isPwdError:true
    })
    console.log(e)


  }
})
