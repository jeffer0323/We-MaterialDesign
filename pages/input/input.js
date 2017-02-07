//index.js
//获取应用实例


let app = getApp()
let MDInput = require("../../utils/mdinput/mdinput.js")
Page({
  data:{
    mdinput:null,
    inputValue:[],
    inputs:[
      {
      mdInput:{
        mdi_num_range:'20',
        mdi_float_label:'Simple Float Label', 
        style_mdi_border_focus:'border-bottom:1px solid blue;',
        style_mdi_float_up:'color:blue;',
        hideFooter:'true',
        onMDInput:'onColumn0MDInput',
        onMDIBlur:'onColumn0MDIBlur'
      }
       
    }
      ,
       {
      mdInput:{
        mdi_num_input:0,
        mdi_num_range:'8',
        mdi_float_label:'Simple Max Charactors', 
        style_mdi_border_focus:'border-bottom:1px solid green;',
        style_mdi_float_up:'color:green;',
        style_mdi_number_inputting:'color:green;',
        style_mdi_number_overflow:'color:red;',
        style_mdi_number_range:'color:green;',
        hideHelper:'true',
        onMDInput:'onColumn1MDInput',
        onMDIBlur:'onColumn1MDIBlur'
      }
       
    }
    ,{
        mdInput:{
        mdi_float_label:'Range of Charactors And Error Information', 
        mdi_helper_text_tip:'',
        mdi_helper_text_error:'message of error',
        mdi_num_input:0,
        mdi_num_range:'6-16',
        style_mdi_border_focus:'border-bottom:1px solid deepskyblue;',
        style_mdi_float_up:'color:deepskyblue;',
        style_mdi_number_inputting:'color:deepskyblue;',
        style_mdi_number_overflow:'color:red;',
        style_mdi_helper_shown:'color:red;',
        style_mdi_number_range:'color:deepskyblue;',
        isHelperShowBefore:false,
        onMDInput:'onColumn3MDInput',
        onMDIBlur:'onColumn3MDIBlur'

      }
    }

    ,
    {
      mdInput:{
        mdi_float_label:'Keep the tip of input', 
        mdi_helper_text_error:'always show tips',
        mdi_helper_text_tip:'always show tips',
        mdi_num_input:0,
        mdi_num_range:'12',
        style_mdi_border_focus:'border-bottom:1px solid plum;',
        style_mdi_float_up:'color:plum;',
        style_mdi_number_inputting:'color:plum;',
        style_mdi_number_overflow:'color:red;',
        style_mdi_helper_shown:'color:grey;',
        style_mdi_helper_error:'color:grey;',
        style_mdi_number_range:'color:plum;',
        isHelperShowBefore:true,
        onMDInput:'onColumn4MDInput',
        onMDIBlur:'onColumn4MDIBlur'
      }
       
    }
      ,
      {
      mdInput:{
        mdi_float_label:'Input Tips And Error Information', 
        mdi_helper_text_error:'message of  error',
        mdi_helper_text_tip:'message of  tips',
        mdi_num_input:0,
        mdi_num_range:'10',
        style_mdi_border_focus:'border-bottom:1px solid hotpink;',
        style_mdi_float_up:'color:hotpink;',
        style_mdi_number_inputting:'color:hotpink;',
        style_mdi_number_overflow:'color:red;',
        style_mdi_helper_shown:'color:grey;',
        style_mdi_helper_error:'color:red;',
        style_mdi_number_range:'color:hotpink;',
        isHelperShowBefore:true,
        onMDInput:'onColumn2MDInput',
        onMDIBlur:'onColumn2MDIBlur'
      }
       
    }
    
       
   
   
    ]

     
  },



  onLoad:function(options){
    // 生命周期函数--监听页面加载
    wx.setNavigationBarTitle({
      title: options.title,
      success: function(res) {
        // success
      }
    })
       MDInput.putData(this.data.inputs)
     console.log(this.data)

  },
  
  onClickTest:function(e){
    let inputValue = MDInput.getValue()
      this.setData({
       inputValue:inputValue
    })
      
    
  }

 
  

 
  



})
