
    //1.鼠标滑过二级菜单显示或隐藏
    $(".login-font").hover(function(){
        $(".login-font>ul").fadeToggle();
    })
    //鼠标滑过箭头图片切换
    $(".login-font").mouseover(function(){
        $(".login-nav>ul>.login-font>.shang").css("display","inline-block");
        $(".login-nav>ul>.login-font>.xia").css("display","none");
    })
    //>>>>>>>
    $(".login-font").mouseout(function(){
        $(".login-nav>ul>.login-font>.shang").css("display","none");
        $(".login-nav>ul>.login-font>.xia").css("display","inline-block");
    })
    //2.鼠标滑过二级菜单显示或隐藏
    $(".login-icon").hover(function(){
        $(".login-icon>ul").fadeToggle();
    })
    //鼠标滑过箭头图片切换
    $(".login-icon").mouseover(function(){
        $(".login-nav>ul>.login-icon>.shang").css("display","inline-block");
        $(".login-nav>ul>.login-icon>.xia").css("display","none");
    })
    //>>>>>>>
    $(".login-icon").mouseout(function(){
        $(".login-nav>ul>.login-icon>.shang").css("display","none");
        $(".login-nav>ul>.login-icon>.xia").css("display","inline-block");
    })
    
    //鼠标滑过二维码左移，图片显示
    $(".right-box-bottom-ma-img").mouseenter(function(){
        $(".right-box-bottom-ma-img>img").animate({
            left:'-65px'
        },500,function(){
            $(".right-box-bottom-ma-tu").show();
        })
        
    })
    $(".right-box-bottom-ma-img").mouseleave(function(){
        $(".right-box-bottom-ma-img>img").animate({
            left:'0'
        },)
        $(".right-box-bottom-ma-tu").hide();
    })

    
    //鼠标点击换登录页面
    $(".right-box-top-ma").click(function(){
        $(".right-box-bottom").toggle();
        $(".right-box-main").toggle();
    })


    //登录方式提示一次就隐藏
    $(".right-box-top-ma").one('click',function(){
        $(".right-box-top-list>.wenzi").hide();
    });
    $(".right-box-top-ma").one('click',function(){
        $(".right-box-top-list>.saoma").show();
        $(".right-box-top-ma").click(function(){
            $(".right-box-top-list").hide();
        })
    });
    //>>>>>>>>>>>

    //鼠标点击切换普通或手机验证登录方式
    $(".bar").click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $(".relative-clearfix").toggle();
        $(".relative-captcha").toggle();
        $(".relative-verification").toggle();
        $(".relative-three").toggle();
        $(".relative-four").toggle();
        $(".relative-five").toggle();
    })

    //鼠标点击区号栏下滑显示
    $(".relative-box").click(function(event){
        var e = e || event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
        $(".country-list").slideDown();
    })
    document.onclick = function(){
        $(".country-list").slideUp();
    }
    //鼠标点击区号，显示在框内
    $(".country-list>li").click(function(){
        var lval = $(this).html();
        $(".relative-box>span").html(lval);
    })

    //失去焦点，判断用户名不能为空
    $(".username").blur(function(){
        var uval = $(".username").val();
        if(!uval){
            $(".username").css("border-color",'red');
            $(".err-tip").show();
            return;
        }
    })
    $(".username").focus(function(){
        $(".username").css("border-color",'#dbdbdb');
            $(".err-tip").hide();
    })

    //失去焦点，判断密码不能为空
    $(".password").blur(function(){
        var pval = $(".password").val();
        if(!pval){
            $(".password").css("border-color",'red');
            $(".err-pwd").show();
            return;
        }
    })
    $(".password").focus(function(){
        $(".password").css("border-color",'#dbdbdb');
            $(".err-pwd").hide();
    })
    //点击按钮提交用户名和密码，验证是否正确
    $(".login-btn").on('click',function(){
        var uval = $(".username").val();
        var pval = $(".password").val();
        $.ajax({
            type:"post",
            url:"../login-php/login.php",
            data:{"username":uval,"password":pval},
            dataType:"json",
            success:function(res){
                    if(res.code == 200 && res.code == 200){
                        alert(res.message);
                        return;
                    }else{
                        $(".err-tip").show();
                        $(".err-tip>em").html(res.message);
                }
                
            }
        })
    })

    //记住密码
    $(".remember-me").click(function(){
        $(".remember-me>span>i").toggle();
    })
    
    //验证码区，定时器
    var flag = true;
    $(".change-captcha-sms").click(function(){
        //alert(1)
        if(flag){
            flag = false;
            var i = 6;
            var timer = setInterval(function(){
                i--;
                if(i < 0){
                    flag = true;
                    clearInterval(timer);
                    setTimeout(function(){
                        $(".change-captcha-sms").html("获取短信验证码");
                        $(".change-captcha-sms").css("background","#ff1901");
                    },200)
                    return;
                }
                    $(".change-captcha-sms").html(i+"秒后可重新发送");
                    $(".change-captcha-sms").css("background","#555");
            },1000)
        }
    })