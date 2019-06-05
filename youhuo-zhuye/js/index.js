/* 轮播图*/
var index=0;
var timer=setInterval(autoPlay,2000);
function autoPlay(){
    index++;
    $("#banner > li").eq(index).fadeIn(300).siblings().fadeOut(300);
    $("#minban > li").eq(index).addClass('focus').siblings().removeClass('focus');
    if(index==$("#banner > li").length-1){
        index=-1;
    }
}

$(".slide-container").mouseenter(function(){
    clearInterval(timer);
})
$(".slide-container").mouseleave(function(){
   
    autoPlay();
    timer=setInterval(autoPlay,2000);
})
$(".prev").click(function(){
    index--;
    $("#banner > li").eq(index).fadeIn(300).siblings().fadeOut(300);
    $("#minban > li").eq(index).addClass('focus').siblings().removeClass('focus');
    if(index==-1){
        index=$("#banner > li").length-1;
    }
})
$(".next").click(function(){
    index++;
    $("#banner > li").eq(index).fadeIn(300).siblings().fadeOut(300);
    $("#minban > li").eq(index).addClass('focus').siblings().removeClass('focus');
    
    if(index==$("#banner > li").length-1){
        index=-1;
    }
})

$("#minban > li").mouseenter(function(){
    index=$(this).index();
    $("#banner > li").eq(index).fadeIn(300).siblings().fadeOut(300);
    $("#minban > li").eq(index).addClass('focus').siblings().removeClass('focus');
})
/* 轮播图结束*/
var i=0;
var brandtimer=setInterval(autoleft,2000);
function autoleft(){
   if(i==2){
       i=1;
       $(".img-brand ul")[0].style.left=0;
   }else{
       i++;
   }
    $(".img-brand ul").animate({left:-i*1158},"slow");
 }

 $(".img-brand").mouseenter(function(){
    clearInterval(brandtimer);
 }).mouseleave(function(){
    autoleft();
    brandtimer=setInterval(autoleft,2000);
 })
 $(".nav-prev").click(function(){
     if(i==0){ 
        $(".img-brand ul")[0].style.left=-2316; 
         i=1;
     }else{
        i--;
    }
    // console.log(i);
    // console.log($(".img-brand ul")[0].style.left);
     $(".img-brand ul").animate({left:-i*1158},"slow");
 })
 $(".nav-next").click(function(){
    if(i==2){
        i=1;
        $(".img-brand ul")[0].style.left=0;
    }else{
        i++;
    }
    // console.log(i);
    // console.log($(".img-brand ul")[0].style.left);
    $(".img-brand ul").animate({left:-i*1158},"slow");
})
/*向左滑动end*/

