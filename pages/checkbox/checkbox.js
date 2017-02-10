// pages/checkbox/checkbox.js
Page({
  data:{
   style_cbt:'',
   isChecked:false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
      title: options.title,
      success: function(res) {
        // success
      }
    })
  },
  onClickCB:function(e){
      this.setChecked()
    
  },
  onClick1:function(e){
      this.setData({
            isChecked:false
        })
      this.setChecked()
  },

  onClick2:function(e){
      this.setData({
            isChecked:true
        })
      this.setChecked()

  },

  setChecked:function(){
       if(!this.data.isChecked){
        this.setData({
            style_cbt:'-webkit-transform: scale(0);transform: scale(0);',
            isChecked:true
        })
    }else{
        this.setData({
            style_cbt:'-webkit-transform: scale(1);transform: scale(1);',
            isChecked:false
        })

    } 

  }
})