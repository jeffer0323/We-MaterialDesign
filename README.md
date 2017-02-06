# We-MaterialDesign
###1、微信小程序之MaterialDesign-- input组件

  主要通过input输入事件配合css的transform动态改变实现这种效果。
	实际调试过程中，input组件bindinput事件触发后回调的detail对象，
	在模拟器中含有cursor属性，在真机中（测过安卓，ios没测过）却没有该属性，最后选择detail对象中的value属性的值的长度来同步输入的位数。
	bindfocus事件最好不要添加改变css的代码 。
![Markdown](http://p1.bpimg.com/1949/a9f11eb8c3e9d6a1.gif)![Markdown](http://i1.piimg.com/1949/2e36795f7c36bb48.gif) 


###2、微信小程序之MaterialDesign-- ripple&reveal效果

ripple： 水涟漪效果       reveal： 揭露效果
ripple： 主要是两个view的叠加，设置最上层view的border-radius为100%，背景设置半透明。最下层view设置点击事件，并记录点击时的绝对坐标与相对坐标，坐标运算之后，同时动态改变最上层view的top与left，即可实现手指点击哪里，最上层view就会出现在那里。 最后实现涟漪，通过对上层view进行放大动画即可。
reveal：是ripple的变形，减慢动画执行时间，同时保持两层view的背景色动态保持一致即可。

![](http://p1.bpimg.com/567571/3ebc8791315b65b7.gif)


###3、微信小程序之MaterialDesign-- SnackBar    
  
  snackbar： 主要用于提醒用户或者轻量级交互，实现原理： 在需要使用snackbar的页面底部添加一个view，对view进行fixed定位且设置z-index为1000，动态show和hide即可  

![](http://i1.piimg.com/4851/b1a3ccce5780a8b5.gif)
####  使用：
  	1. 复制utils下snackbar文件夹到自己的项目指定目录下
	2. 在需要使用snackbar的页面的.wxml文件中导入snackbar模板
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
	
