class Mangez{
    constructor(data){
        this.data = data;
        this.root = null;
        this.sbws = 383;
        this.sbwss = 1200;
        this.indexs = 0;
        this.indexss = 0;
        this.timers = null;
        this.timerss = null;
        this.sliderBoxs = null;
        this.sliderBoxss = null;
        this.lens = this.data.i4.length;
        this.lenss = this.data.i5.length;
    }
    init(){
        this.renderUI();
        this.eventHandler();
        this.autoPlayer();
    }
    renderUI(){
        this.root = document.querySelector(".box4");
        let index1 = this.data.i1.map((ele,index) => `
        <li class=${index==0?"avic":""}>${ele}</li>`).join("");
        let index2 = this.data.i2.map((ele,index) => `
        <li><a href="#">${ele}</a></li>`).join("");

        let tpl3 = this.data.i4.map((ele, index) => `
        <li class="slider-box-items"><img src=${ele}></li>`).join("");
        let html7 = `<ul class="slider-boxs">${tpl3}</ul>`;
        let html9 = `<div class="sliders">${html7}</div>`

        let index3 = this.data.i3.map((ele,index) => `
        <div class="bo-1"><img src="${ele}">${html9}</div>`).join("");
        
        let tpl1 = this.data.i5.map((ele, index) => `
        <li class="slider-box-itemss"><img src=${ele}></li>`).join("");
        let html2 = `<ul class="slider-boxss">${tpl1}</ul>`;
        let html5 = `<div class="sliderss">${html2}</div>`

        
        
        let index = `
        <div class="box4-1">
        <div class="head">
        <div class="head-l"><a href="#">服装</a></div>
        <ul>${index1}</ul>
        </div>
        <div class="b-1-1" style="background:url(./img/202001061929381654.hp8eRuu6)"><ul>${index2}</ul></div>
        ${index3}
        ${html5}
        </div>
        `
        this.root.innerHTML = `${index}`;
        this.sliderBoxs = this.root.querySelector(".slider-boxs");
        this.sliderBoxss = this.root.querySelector(".slider-boxss");
    }
    eventHandler(){
        $(".head").find("li").hover(
            function(){
                let index =$(this).index();
                $(this).addClass("avic").siblings().removeClass("avic");
                $(".bo-1").eq(index).css("display","block").siblings(".bo-1").css("display","none");
            },
            function(){

            }
        )
    }
    autoPlayer(){
        /* 核心：定时器 + 设置ul标签的样式(left) */
        this.timers = setInterval(() => this.nexts(),2000);
        this.timerss = setInterval(() => this.nextss(),4000);
    }
    nexts() {
        this.indexs++;
        if(this.indexs == this.lens){
            this.indexs = 0;
        }
        this.sliderBoxs.style.left = -this.indexs * this.sbws + "px";
 
    }
    nextss() {
        this.indexss++;
        if(this.indexss == this.lenss){
            this.indexss = 0;
        }
        this.sliderBoxss.style.left = -this.indexss * this.sbwss + "px";
 
    }
}