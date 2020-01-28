class Mange{
    constructor(data){
        this.data = data;
        this.root = null;
        this.sbws = 200;
        this.indexs = 0;
        this.timers = null;
        this.sliderBoxs = null;
        this.lens = this.data.c2.length-6;
    }
    init(){
        this.renderUI();
        this.eventHandler();
        this.autoPlayer();
        this.eventHandler2()
    }
    renderUI(){
        this.root = document.querySelector(".box2");
        // this.root.className ="box2";
        
        let index = this.data.c1.map((item,index) => {
            return `
            
            <div class="ltt">
            <img src=${item.src}>
            <div class="name">${item.name}</div>
            <div class="price">${item.price}</div>
            </div>
            
            `
        }).join("")
        let index2 = `
        <div class="head">
        <div class="time-item">
        <img src="http://img62.ddimg.cn/upload_img/00782/home/home_miaosha_title-1561107108.png">
        <div class="tim">
        <strong id="hour_show">0</strong>
    
        <strong id="minute_show">0</strong>
    
        <strong id="second_show">0</strong>
        </div>
        
        </div>    
        <ul class="chang"><li dd_name="00:00场"><a dd_name="场次tab" href="http://miao.dangdang.com?activityId=6336058" target="_blank">00:00场</a></li><li dd_name="11:00场"><a dd_name="场次tab" href="http://miao.dangdang.com?activityId=6336059" target="_blank">11:00场</a></li><li dd_name="16:00场"><a dd_name="场次tab" href="http://miao.dangdang.com?activityId=6336060" class="now" target="_blank">16:00场</a></li></ul></div>`
        let index3 = this.data.c2.map((item,index) => {
        return `
        <div class="r-img"><img src="${item}"></div>
        `
    }).join("")
    let index4 = `
    <div class="s-img">${index3}</div>`
    let index5 = `
    <div class="head2"><ul><li class="first" type="bar"><a href="javascript:;"></a></li><li class="on" type="bar"><a href="javascript:;"></a></li></ul><h3><span>厂商周</span></h3></div>`
    this.root.innerHTML = `<div class="lyt">${index2}${index5}<div class="listt">${index}</div><div class="listt-r">${index4}</div></div>`;
    this.sliderBoxs = this.root.querySelector(".s-img");
        // document.body.appendChild(this.root);
    }
    eventHandler(){
        var intDiff = parseInt(21600);//倒计时总秒数量



function timer(intDiff){

	window.setInterval(function(){

	var day=0,

		hour=0,

		minute=0,

		second=0;//时间默认值		

	if(intDiff > 0){

		hour = Math.floor(intDiff / (60 * 60)) - (day * 24);

		minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);

		second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);

	}

	if (minute <= 9) minute = '0' + minute;

	if (second <= 9) second = '0' + second;

	$('#hour_show').html('<s id="h"></s>'+hour+'');

	$('#minute_show').html('<s></s>'+minute+'');

	$('#second_show').html('<s></s>'+second+'');

	intDiff--;

	}, 1000);

} 



$(function(){

	timer(intDiff);

});	

    }
    eventHandler2(){
        $(".head2").find("li").hover(
            function(){
                // 当前事件的索引号
            // let index =$(this).indexs();
            $(this).addClass("activeli").siblings().removeClass("activeli");
            },
            function(){
            // $(this).removeClass("active");

            }
        )
    }
    autoPlayer(){
        /* 核心：定时器 + 设置ul标签的样式(left) */
        this.timers = setInterval(() => this.nexts(),3000);

    }
    nexts() {
        this.indexs++;
        if(this.indexs == this.lens){
            this.indexs = 0;
        }
        this.sliderBoxs.style.left = -this.indexs * this.sbws + "px";
 
    }
}