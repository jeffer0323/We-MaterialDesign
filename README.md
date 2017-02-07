# We-MaterialDesign
###1、微信小程序之MaterialDesign-- input组件（已封装成模板）
####效果
#####1.Simple Float Label  
  
  ![](http://p1.bpimg.com/4851/5613c97d8ae9527a.gif)

#####2.Simple Max Charactors 
 
 ![](http://p1.bpimg.com/4851/ebd702e25f00658f.gif)
 
#####3.Range of Charactors And Error Information 
 
 ![](http://p1.bpimg.com/4851/59b92546b172d315.gif)
 
#####4.Keep the tip of input
 
 ![](http://p1.bpimg.com/4851/d7e89c9286fdecec.gif)
 
#####5.Input Tips And Error Information
 
 ![](http://p1.bpimg.com/4851/20b37c6cdc746aa4.gif)
 
#####6.Get the value 

 ![](http://p1.bpimg.com/4851/77c372f568c1cfbf.gif) 
 
 ####使用： 
  	1. 复制utils下mdinput文件夹到自己的项目指定目录下 
	
	2. 在需要使用mdinput的页面的.wxml文件中导入mdinput模板，并在页面的js文件中引入mdinput.js  
	
	3. 在app.wxss全局样式中导入的mdinput样式 
	
 	  在当前页面的page.data中配置mdinput组件样式以及初始数据，数据是以数组的形式存在，有多少个mdinput模板，数组的长度即是该值。 
	  如： 

 	data:{
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

	    }]
     }
   
   
####属性说明：
mdi_float_label:'Input Tips And Error Information',  // 浮动文字 

mdi_helper_text_error:'message of  error',  // 输入错误时消息 

mdi_helper_text_tip:'message of  tips',  //  输入时的帮助消息 

mdi_num_input:0,   //  初始化输入位数 

mdi_num_range:'10',   //  最大输入位数 

style_mdi_border_focus:'border-bottom:1px solid hotpink;',  //  mdinput 模板输入时下划线样式 

style_mdi_float_up:'color:hotpink;',   //  文字浮动时的颜色  不浮动时grey 

style_mdi_number_inputting:'color:hotpink;',  // 输入时位数颜色 

style_mdi_number_overflow:'color:red;',   // 输入时位数超过限制时颜色 

style_mdi_helper_shown:'color:grey;',     //  输入时的帮助消息颜色 

style_mdi_helper_error:'color:red;',    //  输入错误时消息颜色 

style_mdi_number_range:'color:hotpink;',     //  最大位数字体颜色 

isHelperShowBefore:true,   //   是否显示帮助信息和错误信息 

onMDInput:'onColumn2MDInput',   // input 组件输入时事件 

onMDIBlur:'onColumn2MDIBlur'     //  input 组件失去焦点时事件 




上面定义了4个mdinput模板
inputs： 即为页面中所有mdinput模板所需要的初始数据 
inputs[i].mdInput : 为每个模板所需要的数据
配置完以上数据，即可调用mdinput.js中的函数，如下：
 
 onLoad:function(options){
    // 生命周期函数--监听页面加载
       MDInput.putData(this.data.inputs)
  },
 
 在页面的onLoad函数中调用MDInput.putData(this.data.inputs)方法即可将数据传递给mdinput模板。
 
 具体demo可见 pages/input文件夹下
 
###2、微信小程序之MaterialDesign-- ripple&reveal效果（未封装）
ripple： 水涟漪效果       reveal： 揭露效果
ripple： 主要是两个view的叠加，设置最上层view的border-radius为100%，背景设置半透明。最下层view设置点击事件，并记录点击时的绝对坐标与相对坐标，坐标运算之后，同时动态改变最上层view的top与left，即可实现手指点击哪里，最上层view就会出现在那里。 最后实现涟漪，通过对上层view进行放大动画即可。
reveal：是ripple的变形，减慢动画执行时间，同时保持两层view的背景色动态保持一致即可。

![](http://p1.bpimg.com/567571/3ebc8791315b65b7.gif)


###3、微信小程序之MaterialDesign-- SnackBar（已封装成模板）    
  
  snackbar： 主要用于提醒用户或者轻量级交互，实现原理： 在需要使用snackbar的页面底部添加一个view，对view进行fixed定位且设置z-index为1000，动态show和hide即可  

![](http://i1.piimg.com/4851/b1a3ccce5780a8b5.gif)
####  使用：
  	1. 复制utils下snackbar文件夹到自己的项目指定目录下
	2. 在需要使用snackbar的页面的.wxml文件中导入snackbar模板，并在页面的js文件中引入mdinput.js 
	3. 在app.wxss全局样式中导入的snackbar样式
	配置完以上三步，即可开始调用snackbar，具体如下：
	SnackBar.getInstance().make({
            snack_title:"I have message and action",
            snack_action: 'cancel',
            onActionClick: "onActionClick",
            duration:2000,
            style_snack_action:'display:block;color:red;',
            style_snackbar:'background-color:deepskyblue;'
        })
	
<table >  
    <tr>  
        <td>方法</td>  
    <td>说明</td>  
    </tr>  
    <tr>  
        <td>getInstance</td>  
    <td>用于SnackBar单例，避免创建过多snackbar对象造成内存占用过大</td>  
    </tr>  
    <tr>  
        <td>show</td>  
    <td>用于snackbar显示</td>  
    </tr>  
    
    <tr>  
        <td>hide</td>  
    <td>隐藏snackbar， 同dismiss</td>  
    </tr>  
    
    <tr>  
        <td>make</td>  
    <td>snackbar对外提供的方法，内部维护了show和hide方法 </td>  
    </tr>  
</table>  

<table >  
    <tr>  
        <td>属性</td>  
    <td>说明</td>  
    </tr>  
    <tr>  
        <td>snack_title</td>  
    <td>snackbar的消息文本</td>  
    </tr>
    <tr>  
        <td>snack_action</td>  
    <td>snackbar的action文本</td>  
    </tr>  
    
    <tr>  
        <td>onActionClick</td>  
    <td>snackbar的action点击事件</td>
    </tr>  
    
    <tr>  
        <td>duration</td>  
    <td>snackbar的显示时长，若设置为负数或者0，内部自动调为2秒</td> 
    </tr>
    
      <tr>  
        <td>style_snack_action</td>  
    <td>snackbar的action的样式，可以设置文本颜色，字体等等</td> 
    </tr>
    
     <tr>  
        <td>style_snackbar</td>  
    <td>snackbar的样式，可以设置文本颜色，字体，背景色等等</td> 
    </tr>
    
    
</table>  
sample： 可详细参见pages/snackbar目录下demo  
	
