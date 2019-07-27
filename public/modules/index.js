/**
 * Created by liushuang on 2016/11/15.
 */

define(['zepto'],function($){
    $('.header-left').on('click',function(){
        $('#c-menu--slide-left,#c-mask,nav').addClass('is-active')
    })
    $('#c-mask,.c-menu__close').on('click',function(e){
        e.stopPropagation();
        $('#c-menu--slide-left,#c-mask,nav').removeClass('is-active')
    })

    // var canvas = document.getElementById("canvas");
    // var ctx = canvas.getContext("2d");
    // var grd=ctx.createLinearGradient(0,0,300,300);
    // grd.addColorStop(0,"black");
    // grd.addColorStop("0.3","magenta");
    // grd.addColorStop("0.5","blue");
    // grd.addColorStop("0.6","green");
    // grd.addColorStop("0.8","yellow");
    // grd.addColorStop(1,"red");
    // //设置样式
    // ctx.lineWidth = 2;
    // ctx.strokeStyle = grd;
    // //设置对象起始点和终点
    // ctx.strokeRect(20,20,300,300);
    // //绘制
    // ctx.stroke();
    // ctx.lineWidth = 1;
    // ctx.strokeStyle = "blue";
    // ctx.strokeText("Hello World!",200,50);
    // ctx.strokeText("love you!",200,80);
    // ctx.save()
    // var grd=ctx.createLinearGradient(0,0,170,0);
    // grd.addColorStop(0,"black");
    // grd.addColorStop("0.3","magenta");
    // grd.addColorStop("0.5","blue");
    // grd.addColorStop("0.6","green");
    // grd.addColorStop("0.8","yellow");
    // grd.addColorStop(1,"red");
    // ctx.font="30px Arial";
    // ctx.fillStyle=grd;
    // ctx.fillText("Hello World",30,200);
    // ctx.stroke();
    // ctx.save();
    //
    // ctx.beginPath();
    // //ctx.fillStyle='red';
    // ctx.strokeStyle='black';
    // ctx.moveTo(75,40);
    // ctx.bezierCurveTo(75,37,70,25,50,25);
    // ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
    // ctx.bezierCurveTo(20,80,40,102,75,120);
    // ctx.bezierCurveTo(110,102,130,80,130,62.5);
    // ctx.bezierCurveTo(130,62.5,130,25,100,25);
    // ctx.bezierCurveTo(85,25,75,37,75,40);
    // var grd=ctx.createLinearGradient(0,0,130,0);
    // grd.addColorStop(0,"black");
    // grd.addColorStop("0.3","magenta");
    // grd.addColorStop("0.5","blue");
    // grd.addColorStop("0.6","green");
    // grd.addColorStop("0.8","yellow");
    // grd.addColorStop(1,"red");
    // ctx.fillStyle=grd;
    // ctx.fill();
    // ctx.stroke();
    // ctx.beginPath();
    // ctx.arc(200,75,50,0,Math.PI);
    // ctx.stroke();

    //ctx.fillStyle=grd;
    //ctx.fillRect(20,20,150,100);
})