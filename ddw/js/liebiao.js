$(() => {
    

    let type = "default";
    $.ajax({
        type: "get",
        url: "./php/fenye.php",
        dataType: "json",
        success: function (response) {
            // renderUI(response)
            // console.log(response);
            let count = response.count;
            let html = "";
            for(let i = 0;i<count;i++){
                html += `<a href="javascript:;">${i+1}</a>`
            }
            $("#page").html(html);
            
            getDataWithPage(1, type);
        }
    });

    // 页码点击
    $("#page").on("click","a",function(){
        let index = $(this).index();
        getDataWithPage(index+1,type);
        
    })

    // 排序
    $(".btn-class").on("click","span",function(){
        console.log(this);
        
        type = $(this).data("type");
        getDataWithPage(1,type);
    })

    function getDataWithPage(index,type){
        $.ajax({
            type: "get",
            url: "./php/liebiao.php",
            data:`page=${index}&type=${type}`,
            dataType: "json",
            success: function (response) {
                renderUI(response,index)
            }
        });
    }
    // 渲染
    function renderUI(_data,index){
       let html = _data.map((item) =>{
            return `
            <li class="item">
                <div class="item-box">
                <span class=${item.id}></span>
                    <img src=${item.src}>
                    <div class="price">￥${item.price}</div>
                    <div class="name">${item.name}</div>
                    <div class="search_hot">${item.search_hot}</div>
                    <div class="star">${item.star}</div>
                    <div class="link">${item.link}</div>
                </div>
                <div class="addCart">加入购物车</div>
                <div class="addsc">收藏</div>
            </li>`
        }).join("");
        $(".box-list").html(html);
console.log(index);

        // 处理页码选中状态
        $("#page").children("a").eq(index - 1).addClass("active").siblings().removeClass("active");

        $(".box ul").on("click",".item-box",function(){
            let cont = $(this).find("span").attr("class");
            window.open(`./fdj.html?id=${cont}`)
        })
        getCartGoodsNumber();
        $(".box ul").on("click",".addCart",function(){
            function prevent_reloading(){
                var pendingRequests = {};
                    jQuery.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
                        var key = options.url;
                        // console.log(key);
                        if (!pendingRequests[key]) {
                            pendingRequests[key] = jqXHR;
                        }else{
                            //jqXHR.abort();    //放弃后触发的提交
                            pendingRequests[key].abort();   // 放弃先触发的提交
                        }
                        var complete = options.complete;
                        options.complete = function(jqXHR, textStatus) {
                            pendingRequests[key] = null;
                            if (jQuery.isFunction(complete)) {
                            complete.apply(this, arguments);
                            }
                        };
                    });
                }
            prevent_reloading();
            let id =$(this).parents(".item").find("span").attr("class");

            $.ajax({
                type: "get",
                url: "./php/gwc.php",
                data: `type=add&id=${id}&user_id=${user_id}`,
                dataType: "json",
                success: function (response) {
                    if(response.status = "success")
                    {
                        alert("加入成功");
                        // getCarData();
                        getCartGoodsNumber();
                    }
                }
            });
            
        })
        function getCartGoodsNumber(){
        $.ajax({
            type: "get",
            url: "./php/gwc.php",
            data: `type=getCount&user_id=${user_id}`,
            dataType: "json",
            success: function (response) {
                if(response.status = "success")
                {
                    $("#cart_items_count_head").text(response.count);
                    $("#cart_items_count").text(response.count);
                }
            }
        });
    }

    }

    
    
})