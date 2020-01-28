$(()=>{
    let captcha = new CaptchaMini({lineNum: 10});
    captcha.draw(document.querySelector('#captcha'),r =>{
        imgCodeTarget = r;
        console.log(r,'验证码1');
        // 当点击图形变换验证码的时候需要重新校验
        $("#txt_vcode").trigger("blur");
    });

    $("#txt_vcode").blur(function(){
        let val = $.trim($(this).val());
        if(imgCodeTarget == val){
            $("#J_tipVcode").text("");
        }else{
            $("#J_tipVcode").text("验证码不正确!").addClass("mcolor");
        }
        
    })

    // 点击登录按钮
    $("#submitLoginBtn").click(function(){
        let username = $.trim($("#txtUsername").val());
        let password = $.trim($("#txtPassword").val());
        if($(".mcolor").length !== 0){
            return;
        }
        if(username.length == 0){
            alert("请输入手机号码/邮箱或者用户名");
            return;
        }
        if(password.length == 0){
            alert("请输入密码");
            return;
        }
        if(!$("#autologin").is(":checked")){
            alert("请阅读并同意协议");
            return;
        }

        let data ={
            username,
            password:md5(password).substr(0,10)
        }

        $.ajax({
            type: "post",
            url: "./php/denlu.php",
            data,
            dataType: "json",
            success: function (response) {
                if(response.status == "success"){
                    Cookie.setItem("user_name",$("#txtUsername").val());
                    Cookie.setItem("user_id",response.id);
                    window.location.href = "./shouye.html";
                }else{
                    alert(response.msg);
                }
                
            }
        });
    })
})