//index.js
//获取应用实例
var app = getApp()
var that = null;
var mW = 0;
    var mH  = 0;
    var lineWidth = 1; 
    var nowRange = 0;
    var context = null;
    var sX = 0;
    var sY = 0;
    var axisLength = 0; 
    var waveWidth = 0.02 ;
    var waveHeight = 10; 

    var speed = 0.1;

    var xOffset = 0; 
    var timerIsClose = true;
     var timer1 = null;
      var timer2 = null;
    

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
    
    context.setFillStyle('deepskyblue')
    context.setLineWidth(lineWidth)
    context.setLineJoin('round')
      
     
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



//画曲线函数
drawSin: function(ctx,xOffset){
    ctx.save();

    var points=[];

    ctx.beginPath();
    for(var x = sX; x < sX + axisLength; x += 50 / axisLength){

      var y = -Math.sin((sX + x) * waveWidth+ xOffset);
      var dY = mH * (1 - nowRange / 100 )-waveHeight/2;
      points.push([x, dY + y * waveHeight]);
      ctx.lineTo(x, dY + y * waveHeight);  
    }

    ctx.lineTo(axisLength, mH);
    ctx.lineTo(sX, mH);
    ctx.lineTo(points[0][0],points[0][1]);
    ctx.fill()
    ctx.draw()
    ctx.restore()
}




})
