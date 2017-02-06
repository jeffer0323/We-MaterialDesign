let app = getApp()
let MDInput = require("../../utils/mdinput/mdinput.js")
Page({
  data:{
     
  },



  onLoad:function(options){
    // 生命周期函数--监听页面加载
   new MDInput().putData({
      mdi_float_label:'用户名', 
      mdi_helper_text:'',
      mdi_num_input:0,
      mdi_num_range:20,
      style_mdi_main:'',
      style_mdi_border:'',
      style_mdi_float:'',
      style_mdi_helper:'',
      style_mdi_num_input:'color:deepskyblue;',
      style_mdi_num_range:'color:deepskyblue;',
      showHelperText:false
   })
  },
    // 用户名输入框输入时事件回调
  onMDInput(e){
     console.log(e.detail)
     new MDInput().handlerInput(e)
     console.log(this.data)
  },
  

  onMDIBlur:function(e){
    console.log(e.detail)
     this.setData({
      style_mdi_border:'border-bottom:1px solid grey'
    })
  }
  

 
  
})