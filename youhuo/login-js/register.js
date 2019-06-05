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

    //获取当前选择国家的区号,在手机号前添加
    $(".region").click(function(){
        for(var i = 0; i < $(".region").length; i++){
            $(this).click(function(){
                var val = $(this).val();
                //console.log(val);
                $(".country-code").html(val);
                $(".err-tip").show();
            })
        }
    }) 

    var phoneflag = false;//手机号为false表示注册不通过 
    function checkphone(){
            var sval = $(".phone-num").val();
            if(!sval){
                $(".err-tip > span").html("请输入手机号码");
                $(".err-tip").show();
                return false;
            }
            var reg = /^1[3-9]\d{9}$/;
            if(!reg.test(sval)){
                $(".err-tip > span").html("手机号码格式不正确,请重新输入")
                $(".err-tip").show();
                return false;
            }
            return true;
        }
    //console.log(phoneflag)

    //鼠标失去焦点，验证手机号不能为空并提示
    $(".phone-num").blur(function(){
        //console.log(phoneflag)
        $(".err-tip > span").html("请输入手机号码");
        $(".err-tip").show();
        var sval = $(".phone-num").val();
        $.ajax({
            type:"get",
            url:"../login-php/yanzheng.php",
            data:{"phone":sval},
            dataType:"json",
            success:function(res){
                if(res.code == 200){
                    $(".err-tip > span").html("该手机号码已注册");
                    $(".err-tip").show();
                    return false;
                }
                return true;
            }
        })
        
    })
        
    //输入框获取焦点时，提升隐藏
    $(".phone-num").focus(function(){
        $(".err-tip").hide();
    })



    //点击获取验证码
    var flag = true;
    $(".send-captcha").click(function(){
        if(flag){
            flag = false;
            var i = 60;
            var timer = setInterval(function(){
                i--;
                if(i < 0){
                    flag = true;
                    clearInterval(timer);
                    setTimeout(function(){
                        $(".send-captcha").removeClass("disable").val("获取短信验证码");
                    },200)
                    $(".msg-tip").hide();
                    return;
                }
                    $(".msg-tip").show();
                    $(".send-captcha").addClass("disable").val(i+"秒后可重新发送");
                    $(".send-captcha").css("disabled","disabled");
            },1000)
            
        }
        
    })



    //密码强度验证
    $(".pwd").blur(function(){
        var pval = $(".pwd").val();
        $(".pwd-tips").hide();
        if(checkpwd()){
            pwdflag = true;
        }else{
            phoneflag = false;
        }
        if(!pval){
            $(".err-pwd>span").html("请输入密码");
            $(".err-pwd").show();
            $('.pwd').css("border-color","red");
            $(".di").css({"background-color":"#e8e8e8","color":"#b9b9b9"});
            return;
        }else{
            //$(".err-pwd>span").html("请输入密码");
            $(".err-pwd").hide();
            $('.pwd').css("border-color","#dbdbdb");
        }
        
    })

    function checkpwd(){
        var pwdReg = /[a-z0-9A-Z]/;
        var pval = $(".pwd").val();
        //console.log(pval)
        if(pwdReg.test(pval)){
            return true;
        }else{
            return false;
        }
    }

    $(".pwd").focus(function(){
        $(".pwd-tips").show();
    })
    //长度<6，包含大小写数字，强度低
    //长度>=6，且包含大小写数字，强度中
    //长度>=10，且包含大小写数字，强度高  
    $('.pwd').keyup(function(){
        var pval = $(".pwd").val();
        var pwd1 = /[A-Z]/;
        var pwd2 = /[0-9]/;
        var pwd3 = /[a-z]/;
        var pwdreg = /[a-z0-9A-Z]/;
        
        if(pval.length < 6 && (pwd1.test(pval) || pwd2.test(pval) || pwd3.test(pval))){
            $(".err-pwd>span").html("密码只支持6-20位字符");
            $(".err-pwd").show();
            $(".di").css({"background-color":"red","color":"#fff"});
            $(".default1").addClass('red');
            $(".default1").removeClass('no');
            $(".zho").css({"background-color":"#e8e8e8","color":"#b9b9b9"});
        }else{
            $(".default1").addClass('no');
            $(".err-pwd>span").html("密码须字母和数字组合");
            $(".err-pwd").show();
            $(".di").css({"background-color":"red","color":"#fff"});
            if(pval.length >= 6 && ( pwd1.test(pval) && pwd2.test(pval) ) || (pwd2.test(pval) && pwd3.test(pval)) || (pwd3.test(pval) && pwd1.test(pval))){
                $(".pwd-intensity-container").css("color","red");
                $(".err-pwd").hide();
                $(".di").css({"background-color":"red","color":"#fff"});
                $(".di").css({"background-color":"yellow","color":"#fff"});
                $(".zho").css({"background-color":"yellow","color":"#fff"});
                $(".gao").css({"background-color":"#e8e8e8","color":"#f6da1e"});
                if(pval.length >= 12 && (pwd1.test(pval) && pwd2.test(pval) && pwd3.test(pval)) || (pwd2.test(pval) && pwd3.test(pval) && pwd1.test(pval)) || (pwd3.test(pval) && pwd1.test(pval) && pwd2.test(pval))){
                    $(".di").css({"background-color":"#3ee392","color":"#fff"});
                    $(".zho").css({"background-color":"#3ee392","color":"#fff"});
                    $(".gao").css({"background-color":"#3ee392","color":"#fff"});
                }else {
                    $(".gao").css({"background-color":"#e8e8e8","color":"#fff"});
                } 
                
            }else{
                $(".zho").css({"background-color":"#e8e8e8","color":"#b9b9b9"});
                $(".gao").css({"background-color":"#e8e8e8","color":"#b9b9b9"});
                
            }
            if(!pval){
                $(".default1").removeClass('no');
                $(".default1").removeClass('red');
                $(".err-pwd>span").html("请输入密码");
                $(".err-pwd").show();
                $('.pwd').css("border-color","#dbdbdb");
                $(".di").css({"background-color":"#e8e8e8","color":"#b9b9b9"});
                $(".zho").css({"background-color":"#e8e8e8","color":"#b9b9b9"});
                $(".gao").css({"background-color":"#e8e8e8","color":"#b9b9b9"});
            }
            if(!pwdreg.test(pval)){
                $(".pwd").val("");
                $(".err-pwd>span").html("密码须字母和数字组合");
                $(".err-pwd").show();
            }
        }
    })



    //点击注册按钮提交用户名和密码
    $(".button").click(function(){
        var sval = $(".phone-num").val();
        var pval = $(".pwd").val();
        console.log(sval,pval,flag)

        if(sval && pval && flag){
            $.ajax({
                type:"post",
                url:"../login-php/register.php",
                data:{"phone":sval,"pwd":pval},
                dataType:"json",
                success:function(res){
                    if(res.code == 200){
                        location.href = "./login.html";
                    }else{
                        alert(res.message)
                        location.reload();
                    }
                }
            })
            return;
        }
        
        
    })

    //鼠标滑过显示下载地址
    $(".qrcode-hover-reg").hover(function(){
        $(".download-app-box").toggle();
    })