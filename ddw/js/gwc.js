$(() => {
    getCarData();
    getCartGoodsNumber();
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
    function cartRenderUI(_data){
        console.log(_data);
        let html = _data.map(ele => {
            let tpl = ele.liebiao.map(ele =>{
                return `
                <div class="shopping_list" data-shopids="22115">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody data-stock="101" data-offline="false" data-productid="1486978259"
                            data-timestamp="1579443704000" data-orderforspupormo="0">
                            <tr id="tr_868033236" class="${ele.id}">
                                <td class="row1"> <input class="auto_bo" id="autologi"
                                name="autologin" type="checkbox" tabindex="7"> </td>
                                <td class="row_img"> <a href="http://product.dangdang.com/1486978259.html"
                                        target="_blank" dd_name="查看详情"> <img onmouseout="$(this).parent().next().hide()"
                                            onmouseover="$(this).parent().next().show()"
                                            src="${ele.src}" width="80"
                                            height="80"> </a>
                                    
                                </td>
                                <td class="row_name">
                                    <div class="name"> <a href="http://product.dangdang.com/1486978259.html"
                                            title="大希地 水晶虾饺皇虾饺300g*4盒港式早茶点心虾球虾仁饺子速冻冷冻" target="_blank" dd_name="查看详情"
                                            style="word-break:break-all;  word-wrap:break-word;">${ele.name}</a></div>
                                </td>
                                <td class="row3"><span>¥${ele.price}</span></td>
                                <td data-minbuy="0" class="fn-count-tip row3 "><span class="amount fn-updatecount "
                                        data-value="1"><a dd_name="减少数量" class="shao">-</a><div
                                             class="jiage" style="width:38px;height:28px;float:left;">${ele.num}</div><a dd_name="增加数量"
                                            class="duo">+</a></span></td>
                                <td class="row4"><span class="red rees">¥${ele.price}</span></td>
                                <td class="row5 "><span><a href="javascript:void(0)" data-cartitemid="868033236"
                                            data-productid="1486978259" data-mainproductid="0"
                                            data-productname="大希地 水晶虾饺皇虾饺300g*4盒港式早茶点心虾球虾仁饺子速冻冷冻" data-saleprice="99.90"
                                            data-categorypath="58.32.26.27.00.00"
                                            data-item-detail="{&quot;cartItemId&quot;:868033236,&quot;productId&quot;:1486978259}"
                                            class="fn-add-wish" dd_name="加入收藏按钮">移入收藏</a></span><span><a
                                             data-item="868033236" class="fn-remove-product"
                                            dd_name="删除普通品">删除</a></span></td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>`
            }).join("");

            return `
            <div class="fn-shop" data-shopids="22115">
                <table border="0" cellspacing="0" cellpadding="0" class="shop_title">
                    <tbody>
                        <tr>
                            <td><input class="auto_box" id="autologin"
                            name="autologin" type="checkbox" tabindex="7"></td>
                            <td><span class="shop_icon store_o"></span></td>
                            <td><a href="http://shop.dangdang.com/22115" target="_blank">${ele.link}</a></td>
                            <td class="coupon_title_td">
                                <div class="coupon_choose" id="coupon_title_22115"><a
                                        class="coupon_choose_pointer">优惠券</a></div>
                                <div id="coupon_pop_container" style="position: relative;z-index:99;">
                                    <div id="coupon_pop" class="coupon_pop" data-shopids="22115">
                                        <ul>
                                            <li data-serial-num="1578996138512" data-everyone-rec-num="3">
                                                <div class="coupon_num">¥20.00</div>
                                                <p>满150.00元可用<span class="gray">2020-01-15至2020-01-20</span></p><a
                                                    class="show_prodimg"><label
                                                        class="show_prodimg_label">购物车内可用此券商品</label><em
                                                        class="show_prodimg_em"></em></a><a class="btn"
                                                    data-coupon-activity="1578996138512|shoppingcart|||init-no-load">领取</a>
                                                <div class="coupon_show">
                                                    <div class="title">已选 1 件，小计 99.90 元，还差<span class="red"> 50.10
                                                        </span>元可用</div><a class="coupon_arrow"
                                                        style="display:none;"></a><a class="coupon_arrow right"
                                                        style="display:none;"></a>
                                                    <div class="coupon_show_list">
                                                        <ul class="coupon_show_list_ul" data-current-start-num="1">
                                                            <li id="img_seq_1"><span class="item"><img
                                                                        src="http://img3x9.ddimg.cn/41/22/1486978259-1_m_2.jpg"><a
                                                                        href="javascript:void(0)" data-item="868033236"
                                                                        data-current_groupinfo="22115"
                                                                        data-shopid="22115" data-groupinfo="22115"
                                                                        data-coupon_serial_num="1578996138512"
                                                                        class="fn-product-check-for-coupon checknow check_on">选中</a></span><span>¥99.90</span><span>x1</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-serial-num="1578996193809" data-everyone-rec-num="3">
                                                <div class="coupon_num">¥50.00</div>
                                                <p>满300.00元可用<span class="gray">2020-01-15至2020-01-20</span></p><a
                                                    class="show_prodimg"><label
                                                        class="show_prodimg_label">购物车内可用此券商品</label><em
                                                        class="show_prodimg_em"></em></a><a class="btn"
                                                    data-coupon-activity="1578996193809|shoppingcart|||init-no-load">领取</a>
                                                <div class="coupon_show">
                                                    <div class="title">已选 1 件，小计 99.90 元，还差<span class="red"> 200.10
                                                        </span>元可用</div><a class="coupon_arrow"
                                                        style="display:none;"></a><a class="coupon_arrow right"
                                                        style="display:none;"></a>
                                                    <div class="coupon_show_list">
                                                        <ul class="coupon_show_list_ul" data-current-start-num="1">
                                                            <li id="img_seq_1"><span class="item"><img
                                                                        src="http://img3x9.ddimg.cn/41/22/1486978259-1_m_2.jpg"><a
                                                                        href="javascript:void(0)" data-item="868033236"
                                                                        data-current_groupinfo="22115"
                                                                        data-shopid="22115" data-groupinfo="22115"
                                                                        data-coupon_serial_num="1578996193809"
                                                                        class="fn-product-check-for-coupon checknow check_on">选中</a></span><span>¥99.90</span><span>x1</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                            <td><a data-item="22115" href="javascript:;" class="cim_entry cse fn-imip"
                                    data-shopid="22115" data-ddshopid="0" data-sourcepage="shop"></a></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                ${tpl}
            </div>`
        }).join("");
        $("#J_cartContent").html(html);
    }

    function getCarData(){
        $.ajax({
            type: "get",
            url: "./php/gwc.php",
            data: `type=get&user_id=${user_id}`,
            dataType: "json",
            success: function (data) {
                console.log(123);
                
                let storeNames = [];
                let storeData = [];
                data.forEach(ele => {
                    if (!storeNames.includes(ele.link)) storeNames.push(ele.link);
                });
                storeNames.forEach(ele => {
                    storeData.push({"link":ele,"liebiao":[]})
                });
                data.forEach(ele => {
                    let currentStoreName = ele.link;
                    storeData.forEach(item =>{
                        if(item.link == currentStoreName){
                            item.liebiao.push(ele);
                        }
                    })
                });
                console.log(storeData);
                
                cartRenderUI(storeData);
            }
        });
    }

    // 删除
    // fn-remove-product
    
    $("#J_cartContent").on("click",".fn-remove-product",function(){
        let id =$(this).parents("#tr_868033236").attr("class");
        
        $.ajax({
            type: "get",
            url: "./php/gwc.php",
            data: `type=delete&user_id=${user_id}&id=${id}`,
            dataType: "json",
            success: function (data) {
                if(data.status == "success")
                {
                    getCarData();
                    getCartGoodsNumber();
                }
                
            }
        });
    })


    // 更新数量
    $("#J_cartContent").on("click",".shao",function(){
        // let num = $(this).next().prop("class")*1;
        let num = $(this).siblings(".jiage").text()*1;
        updaeData(this,num - 1);
    })

    $("#J_cartContent").on("click",".duo",function(){
        // let num = $(this).next().prop("class")*1;
        let num = $(this).siblings(".jiage").text()*1;
        updaeData(this,num + 1);
    })

    function updaeData(ele,count){
        let id = $(ele).parents(".shopping_list").find("#tr_868033236").attr("class");
        
        $.ajax({
            type: "get",
            url: "./php/gwc.php",
            data: `type=update&user_id=${user_id}&id=${id}&count=${count}`,
            dataType: "json",
            success: function (data) {
                if (data.status == "success") {
                    // $(ele).parent().children(".jiage").text(count);
                    // $(ele).parent().find(".jiage").text(count);

                    $(ele).parent().children("div").text(count);
                    // $(ele).parent().next().text(count);
                    getCartGoodsNumber();
                    computedTotalCountAndTotalPrice();
                }
            }
        });
    }


// 勾选商品
    $("#J_cartContent").on("click",".auto_box",function(){
       let all = $(this).parents(".fn-shop").find(".shopping_list").find("input[class='auto_bo']");
       let isCheck = $(this).is(":checked");
    //    console.log(isCheck);
       all.prop("checked",isCheck);
       computedTotalCountAndTotalPrice();
    })

    // 全选
    $(".auto_box1").click(function(){
        let isCheck = $(this).is(":checked");
        $("#J_cartContent").find("input[type='checkbox']").prop("checked",isCheck);
        $(".shopping_total").find("input[type='checkbox']").prop("checked",isCheck);
        $(".shopping_title").find("input[type='checkbox']").prop("checked",isCheck);
        computedTotalCountAndTotalPrice();
    })

    // 被选
    $("body").on("click",".auto_bo",function(){
       let all = $(this).parents(".fn-shop").find(".auto_bo");
       let alls = $(this).parents(".fn-shops").find(".auto_bo");

      let flag = all.toArray().every(function(ele){
           return $(ele).is(":checked") == true;
       });
       let flags = alls.toArray().every(function(ele){
        return $(ele).is(":checked") == true;
    });
    //    console.log(all.length,flag);
    $(this).parents(".fn-shop").find(".auto_box").prop("checked",flag);
    $(this).parents("body").find(".auto_box1").prop("checked",flags);
    computedTotalCountAndTotalPrice();

    });
    $("body").on("click",".auto_box",function(){
        let all = $(this).parents(".fn-shops").find(".auto_box");
 
       let flag = all.toArray().every(function(ele){
            return $(ele).is(":checked") == true;
        });
     //    console.log(all.length,flag);
    //  $(this).parents(".fn-shop").find(".auto_box").prop("checked",flag);
     $(this).parents("body").find(".auto_box1").prop("checked",flag);
     computedTotalCountAndTotalPrice();

     });


    //  封装（计算总数量和价格）
    function computedTotalCountAndTotalPrice() {
        let totalCount = 0;
        let totalPrice = 0;
        $("#J_cartContent").find(".shopping_list").each(function(){
           let isCheck = $(this).find("input[type='checkbox']").is(":checked");
           if (isCheck){
               let currentNum = $(this).find(".jiage").text()*1;
               let currentPrice = $(this).find(".rees").text().slice(1)*1;
               totalCount += currentNum;
               totalPrice += currentNum * currentPrice;
           }
        })
        $("#totalCount").text(totalCount);
        $("#payAmount").text("￥" + totalPrice);
    }
})