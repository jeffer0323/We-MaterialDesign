//index.js
//获取应用实例
var app = getApp()
var that = null;
var mW = 0;
var mH  = 0;
var lineWidth = 1; 
var nowRange = 0;
var context = null;
//Sin 曲线属性
var sX = 0;
var sY = 0;
var axisLength = 0; //轴长
var waveWidth = 0.02 ; //波浪宽度,数越小越宽 
var waveHeight = 10; //波浪高度,数越大越高

var speed = 0.1; //波浪速度，数越大速度越快

var xOffset = 0; //波浪x偏移量
var timerIsClose = true;
var timer1 = null;
var timer2 = null;
var timeout = false; //启动及关闭按钮  
    

Page({
  data:{
      canvas_style:'height:100px',
      pause:false,
      reset:false,
      switch_direction:false
  },
  sliderChange:function(e){
    console.log(e.detail.value)
    nowRange = e.detail.value
  },

  start:function(e){
      this.data.pause = false;
      console.log('setFillStyle')
      clearInterval(timer1)
      clearInterval(timer2)
      this.render();
  },
  pause:function(e){
      this.data.pause = true;
      clearInterval(timer1)
      clearInterval(timer2)
      this.render();
  },
  reset:function(e){
      this.data.pause = false;
      clearInterval(timer1)
      clearInterval(timer2)
      nowRange = 0
      this.render();
  },
  switch_direction:function(e){

  },

  onUnload:function(){
      clearInterval(timer1)
      clearInterval(timer2)
  },

  

  onLoad:function(options){
  
      wx.setNavigationBarTitle({
          title: options.title,
          success: function(res) {
          // success
          }
      })
      mH = Number(this.data.canvas_style.substring(7,this.data.canvas_style.length-2))
      mW = mH+10
      sY = mH/2
      axisLength = mH;
      console.log(mH)
      that = this
      context = wx.createCanvasContext('myCanvas')

     
      
     
  },
 


  render:function(){

    timer1 = setInterval(function(){
         context.clearRect(0, 0, mW, mH);
         that.drawSin(context,xOffset);
         xOffset += speed; //形成动态效果
         console.log("speed")
      },20)
     timer2 =setInterval(function(){
       console.log("range")
        if(nowRange<=100){
              nowRange +=0.5;
         }else{
           nowRange = 0;
            clearInterval(timer1)
            clearInterval(timer2)
         }
      },120)
      if(this.data.pause){
          clearInterval(timer2)
          clearInterval(timer1)
      }
  },



//画sin 曲线函数
drawSin: function(ctx,xOffset){
    ctx.save();
     ctx.setFillStyle('deepskyblue')
      ctx.setLineWidth(lineWidth)
      ctx.setLineJoin('round')
    var points=[]; //用于存放绘制Sin曲线的点

    ctx.beginPath();
    //在整个轴长上取点
    for(var x = sX; x < sX + axisLength; x += 50 / axisLength){
      //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”

      var y = -Math.sin((sX + x) * waveWidth+ xOffset);
      var dY = mH * (1 - nowRange / 100 )-waveHeight;
      points.push([x, dY + y * waveHeight]);
      ctx.lineTo(x, dY + y * waveHeight);  
    }

    //封闭路径
    ctx.lineTo(axisLength, mH);
    ctx.lineTo(sX, mH);
    ctx.lineTo(points[0][0],points[0][1]);
    ctx.fill()
    ctx.draw()
    ctx.restore()
}




})
