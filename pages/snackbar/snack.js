let app = getApp()
let SnackBar = require("../../utils/snackbar/snackbar.js")
Page({
  data:{
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    wx.setNavigationBarTitle({
      title: options.title,
      success: function(res) {
        // success
      }
    })
  },

  onUnload:function(){
    // 生命周期函数--监听页面卸载
    SnackBar.getInstance().hide()
  },

  onHide:function(){
    SnackBar.getInstance().hide()
  },

  onClick1:function(e){
    var that = this
        SnackBar.getInstance().make({
            snack_title:"I'm a tip",
            onActionClick: "onActionClick",
            duration:2000,
            style_snack_action:'display:none',
            style_snackbar:'background-color:black'
        })
        console.log(this.data)
  },

  onClick2:function(e){
       SnackBar.getInstance().make({
            snack_title:"I have message and action",
            snack_action: 'tap me',
            onActionClick: "onActionClick",
            duration:2000,
            style_snack_action:'display:block',
            style_snackbar:'background-color:black'
        })
  },

  onClick3:function(e){
      SnackBar.getInstance().make({
            snack_title:"I have message and action",
            snack_action: 'tap me',
            onActionClick: "onActionClick",
            duration:2000,
            style_snack_action:'display:block;',
            style_snackbar:'background-color:darkgrey;'
        })
  },

  onClick4:function(e){
      SnackBar.getInstance().make({
            snack_title:"I have message and action",
            snack_action: 'cancel',
            onActionClick: "onActionClick2",
            duration:2000,
            style_snack_action:'display:block;color:red;',
            style_snackbar:'background-color:deepskyblue;'
        })
  },

   onClick5:function(e){
      SnackBar.getInstance().make({
            snack_title:"A long show",
            duration:4000,
            style_snack_action:'display:none;',
            style_snackbar:'background-color:deepskyblue;'
        })
  },


  onActionClick:function(e){
    wx.navigateTo({
      url: '../input/input',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onActionClick2:function(e){
    SnackBar.getInstance().hide()
  }

})
