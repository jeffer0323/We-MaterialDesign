// pages/horizontalprogressbar/horizontalprogressbar.js

var ctx = null;
var offsetX=0;
var offsetY = 0;
var startX = 20;
var startY = 0;
var fcp1X = 30;
var fcp1Y = 10 ;
var fcp2X = 30;
var fcp2Y = 40 ;
var scp1X = 80 ;
var scp1Y = 60;
var scp2X = 120 ;
var scp2Y = 100;

var endX = 200;
var endY = 100;

var waveH = 100;
var waveW = 50;
var reverse = false;
var timer1=null;
var timer2=null;

Page({
  data:{},
  onLoad:function(options){
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
      title: options.title,
      success: function(res) {
        // success
      }
    })
 ctx = wx.createCanvasContext("myCanvas1")
  timer1 = setInterval(function(){
    ctx.clearRect(0, 0, endX, endY);
    
    if(offsetY==10){
      reverse=true
    }else if(offsetY==-10){
      reverse = false
    }
    if(reverse){
      offsetY-=0.5
    }else{
      offsetY+=0.5
    }
    
      that.render();
  },10)
     
   that.render();
   timer2 = setInterval(function(){
     offsetX+=0.2;
      that.render();
   },50)

  },




  render:function(){
   
    ctx.save();
    ctx.setFillStyle('deepskyblue')
    ctx.setLineWidth(1)
    ctx.setLineJoin('round')
    ctx.beginPath()
   if(offsetX>20){
     if(offsetX>=40){
         ctx.bezierCurveTo(0, offsetX,0, offsetX, 0, offsetX)
       ctx.bezierCurveTo(0, offsetX, scp2X-offsetX-offsetY, scp2Y, endX, endY)
         
     }else{
       ctx.bezierCurveTo(0, offsetX-20-offsetY, fcp2X-offsetX, fcp2Y, waveW-offsetX, waveH/2)
       ctx.bezierCurveTo(scp1X-offsetX,scp1Y, scp2X-offsetX-offsetY, scp2Y, endX, endY)
     }
      
      ctx.lineTo(0,100)
      ctx.lineTo(0,offsetX)
      if(offsetX>130){
          clearInterval(timer1)
          clearInterval(timer2)
      }
   }else{
     ctx.moveTo(startX-offsetX, 0)
         ctx.bezierCurveTo(fcp1X-offsetX, fcp1Y, fcp2X-offsetX, fcp2Y, waveW-offsetX, waveH/2)
        ctx.bezierCurveTo(scp1X-offsetX,scp1Y, scp2X-offsetX-offsetY, scp2Y, endX, endY)
        
      ctx.lineTo(0,100)
    ctx.lineTo(0,0)
    ctx.lineTo(20,0)
   }
         

    
   
    ctx.fill()
    ctx.draw()
    ctx.restore()
  },

  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})