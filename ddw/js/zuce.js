$(()=>{
    $("#txt_username").blur(function(){
        let val = $.trim($(this).val());
        if(/^1[3-9]\d{9}$/.test(val)){
            $("#J_tipUsername").text("");
            $(this).removeClass("nmcolor")
        }else{
            $("#J_tipUsername").text("手机号码不规范!").addClass("mcolor");
            $(this).addClass("nmcolor")
        }
        
    })

    // 密码
    $("#txt_password").blur(function(){
        let val = $.trim($(this).val());
        // console.log(val);
        
        if(/^[a-zA-Z0-9]{6,20}$/.test(val)){
            $("#J_tipPassword").text("");
            $(this).removeClass("nmcolor")
        }else{
            $("#J_tipPassword").text("密码不规范!").addClass("mcolor");
            $(this).addClass("nmcolor")
        }
        
    })

    // 确认密码
    $("#txt_repassword").blur(function(){
        let val = $.trim($(this).val());
        // console.log(val);
        
        if($.trim($("#txt_password").val()) == val){
            $("#J_tipSurePassword").text("");
            $(this).removeClass("nmcolor")
        }else{
            $("#J_tipSurePassword").text("两次密码不一致!").addClass("mcolor");
            $(this).addClass("nmcolor")
        }
        
    })

    // 图形验证码
    let imgCodeTarget;
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
            $(this).removeClass("nmcolor")
        }else{
            $("#J_tipVcode").text("验证码不正确!").addClass("mcolor");
            $(this).addClass("nmcolor")
        }
        
    })

    // 注册
    $("#J_submitRegister").click(function(){
        $("#txt_username,#txt_password,#txt_repassword,#txt_vcode").trigger("blur");
        if($(".nmcolor").length !== 0){
            return;
        }

        // 检查是否勾选协议
        if(!$("#chb_agreement").is(":checked")){
            alert("请阅读并同意协议！");
            return;
        }

        // 发送网络请求
        let data = {
            phone:$.trim($("#txt_username").val()),
            password:md5($.trim($("#txt_password").val())).substr(0,10)
        }
        $.ajax({
            data,
            type: "get",
            url: "./php/zuce.php",
            dataType: "json",
            success(response) {
                // console.log(response);
                if(response.status == "success"){
                    alert(response.msg);
                    window.location.href = "./denlu.html";
                } else {
                    alert(response.msg);
                }
            }
        });
    })
})