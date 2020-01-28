class Manager{
    constructor(data){
        this.data = data;
        this.root = null;
        this.sbw = 796;
        this.sbws = 796;
        this.sbwss = 200;
        this.index = 0;
        this.indexs = 0;
        this.indexss = 0;
        this.timer = null;
        this.timers = null;
        this.timerss = null;
        this.sliderBox = null;
        this.sliderBoxs = null;
        this.sliderBoxss = null;
        this.len = this.data.v1.length;
        this.lens = this.data.v3.length-6;
        this.lenss = this.data.T2.length;
    }
    init(){
        this.renderUI();
        this.eventHandler();
        this.autoPlayer();//autoPlayer 自动播放
        // this.autoPlayers();
        this.eventMouseHandler();
        this.eventClickHandler();
        this.eventClickWithSliderNav();
        this.dj();
    }
    renderUI(){
        this.root = document.querySelector(".box");
        
        let tpl1 = this.data.v1.map((ele, index) => `
        <li class="slider-box-item"><img src=${ele}></li>`).join("");
        let html3 = `<ul class="slider-box">${tpl1}</ul>`;
        let html4 = `<div class="slider-control"><span class="prev">&lt;</span> <span class="next">&gt;</span></div>`;//---->在页面写出左右箭头(div span)
        let tpl2 = this.data.v1.map((ele,index) => `
        <li class="slider-nav-item ${index == 0 ? "activeli" :""}">${index+1}</li>`).join("");//----->给ele数组中的图片的ol加入"active"样式
        let html5 = `<ol class="slider-nav">${tpl2}</ol>`;//----->在页面写入ol
        let html6 = `<div class="slider">${html3}${html4}${html5}</div>`

        let tpl3 = this.data.v3.map((ele, index) => `
        <li class="slider-box-items"><img src=${ele}></li>`).join("");
        let html7 = `<ul class="slider-boxs">${tpl3}</ul>`;
        let html9 = `<div class="sliders">${html7}}</div>`

        let ind1 = this.data.T3.map((item,index) => {
          return `<li class=${index==0?"current":""}>${item}</li>`}).join("");

        let ind2 = this.data.T4.map((item,index) => {
        return `<li>${item}</li>`}).join("");
        let ind3 = this.data.T5.map((item,index) => {
            return `<li>${item}</li>`}).join("");
        let ind4 = this.data.T2.map((ele, index) => `
        <li class="sl"><img src=${ele}></li>`).join("");
        let ind5 = `<ul class="slider-boxss">${ind4}</ul>`;
        // let ind6 = `<div class="sliders">${ind5}}</div>`;
        let ind =  `<div class="home_notice_r ">
            <div class="home_notice_r_pic "><a><img src=${this.data.T1}></a></div>
            <div class="home_notice_gg ">
            <div class="headgg"><ul class="headgg-u ">${ind1}</ul></div>
            <div class="headgg-d"><ul class="headgg-v act">${ind2}</ul><ul class="headgg-v">${ind3}</ul> </div>
            </div>
            <div class="sliderss">${ind5}}</div>
            </div>`;
        
        let index6 = this.data.v5.map((item,index)=>{
            return `
            <li class="tanchu">${item}</li>`
        }).join("")

        let index = this.data.v2.map((item,index) => {
            return `
            <li>
            <sapn class="jg">
            <a>${item.a1Text}</a>
            <a>${item.a2Text}</a>
            <a>${item.a3Text}</a>
            </sapn>
            </li>`
        }).join("")
        let html1 = `<ul class="u_nav">${index}</ul>`
        let html2 =  this.data.v2.map((item,index) => {
            return `
        <div class="lul-2"><sapn>图书馆 童书馆</span><ul class="de1">${index6}</ul></div>
        `
    }).join("")

    // let indexe = this.data.v4.map((item,index) => {
    //     return `
    //     <li>
    //     <a><span>${item}</span></a>
    //     </li>`
    // }).join("")


    let hhh = `
    <div class="fix_box reduce" id="navigation">
    <ul class="fix_screen_list">
        <li class=""><a class="f1" rel="component_3208542"><span>图书</span></a></li>
        <li class=""><a class="f13" rel="component_3201755"><span>服装</span></a></li>
        <li class=""><a class="f14" rel="component_4056726"><span>日用百货</span></a></li>
        
        <li class=""><a class="f15" rel="component_4226998"><span>猜你喜欢</span></a></li>
    </ul>
</div>`



    this.root.innerHTML = `<div class="lul">${html1}${html2}${html6}${html9}${ind}</div>${hhh}`;
        this.sliderBox = this.root.querySelector(".slider-box");
        this.sliderBoxs = this.root.querySelector(".slider-boxs");
        this.sliderBoxss = this.root.querySelector(".slider-boxss");
        this.sliderNav = this.root.querySelector(".slider-nav");
        // this.root.innerHTML = `<div class="lul">${html1}${html2}</div>`
        // document.body.append(this.root)
    }


    dj(){
        console.log(this.root);
        var tul = this.root.querySelector(".fix_screen_list").children;
        // var tbo = this.root.querySelectorAll(".box");
        for(var i= 0;i<tul.length;i++){
            tul[i].index =i;
            // tbo[i].style.height = window.innerHeight + 'px';
            // var ih = window.innerHeight;
            tul[i].onclick = function(){
                // console.log(this.index);
                
                window.scrollTo(0,660*(this.index+2));
                for(var j = 0; j< tul.length;j++){
                    tul[j].className = 'xx';
                }
                this.className = 'active1';
            }
        }
        // 滚动到某一楼层高亮
        window.onscroll = function(){
            // var  tbo= document.querySelectorAll(".hnh1")
            // var scrollTop = window.scrollY;
            let nav_top = $("#navigation").offset().top;
            for(var i = 2; i< 6;i++){
                let selftop = $(".hnh1").children().eq(i).offset().top;
                if(nav_top >= selftop){
                $("#navigation").find("li").eq(i-2).addClass('active1').siblings().removeClass('active1');
                        
                }
            }
        }

    }



    eventHandler(){
        /* 给分类添加鼠标移入事件，当事件触发的时候设置当前标签的选中状态 + 切换UL */
        $(".u_nav").find("li").hover(
            function(){
                // 当前事件的索引号
            let index =$(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(".lul-2").eq(index).css("display","block").siblings(".lul-2").css("display","none")
                
            },
            function(){
            $(this).removeClass("active");
            $(".lul-2").css("display","none")

            }
        )
        $(".u_nav").on("click",".active",function(){
            // let cont = $(this).find("span").attr("class");
            window.open(`http://127.0.0.1/ddw/liebiao.html`)
        })
        $(".slider").hover(
            function(){
                $(".prev,.next,.prevs,.nexts").css("display","block")
                // $(".next").css("display","block")
            },
            function(){
                $(".prev,.next,.prevs,.nexts").css("display","none")
                // $(".next").css("display","block")
            }
        )
        $(".headgg-u").find("li").hover(
            function(){
                let index =$(this).index();
                $(this).addClass("current").siblings().removeClass("current");
                $(".headgg-v").eq(index).addClass("act").siblings().removeClass("act");
            },
            function(){
                
            }
        )
        }

        autoPlayer(){
            /* 核心：定时器 + 设置ul标签的样式(left) */
            this.timer = setInterval(() => this.next(),2000);
            this.timers = setInterval(() => this.nexts(),2000);
            this.timerss = setInterval(() => this.nextss(),4000);

        }
        // autoPlayers(){
        //     /* 核心：定时器 + 设置ul标签的样式(left) */
        //     // this.timer = setInterval(() => this.next(),1000);
        //     this.timers = setInterval(() => this.nexts(),1000);

        // }
    
        eventMouseHandler(){
            /* 思路：获取标签，给标签添加鼠标移入事件，当鼠标移入的时候停止定时器，当鼠标离开的时候要重新恢复 */
            $(this.sliderBox,this.sliderBoxs).hover(
                () => {clearInterval(this.timer);
                    clearInterval(this.timers)},
                () => this.autoPlayer())
        }
        eventClickHandler(){
            // let sliderControl = this.root.querySelector(".slider-control");
            // sliderControl.onclick = (e) => {
            //     e = e || window.event;
            //     let target = e.target || e.srcElement;
            //     if (target.className == "prev"){
            //         this.prev();
            //     }else if (target.className == "next"){
            //         this.next();
            //     }
            // }//jq
            let self = this;
            $(".slider-control").find("span").click(function(){
                let index = $(this).index()
                index == 1? self.next():self.prev();
                index == 1? self.nexts():self.prevs();
            })
        }
        // // 下一张
        next() {
            this.index++;
            if(this.index == this.len){
                this.index = 0;
            }
            this.sliderBox.style.left = -this.index * this.sbw + "px";
            this.switchNavItem();
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
        // // 上一张
        prev(){
            this.index--;
            if(this.index == -1){
                this.index = this.len -1;
            }
            this.sliderBox.style.left = -this.index *this.sbw + "px";
            this.switchNavItem();
        }
        prevs(){
            this.indexs--;
            if(this.indexs == -1){
                this.indexs = this.lens -1;
            }
            this.sliderBoxs.style.left = -this.indexs *this.sbws + "px";
            
        }
        // prevss(){
        //     this.indexss--;
        //     if(this.indexss == -1){
        //         this.indexss = this.lenss -1;
        //     }
        //     this.sliderBoxss.style.left = -this.indexss *this.sbwss + "px";
      
        // }
        eventClickWithSliderNav(){
            /* 思路：先获取标签，添加点击事件，设置选中状态(排他) + 切换显示对应的滑块 */
            Array.from(this.sliderNav.children).forEach((ele, index) => {
                ele.onclick = () => {
                    /* 更新当前的索引 */
                    this.index =index;
                    /* 切换显示对应的滑块 */
                    this.sliderBox.style.left = -this.index * this.sbw +"px";
                    this.switchNavItem();
    
                }
            });
        }
        switchNavItem(){
            Array.from(this.sliderNav.children).forEach((ele => ele.classList.remove("activeli")));
            this.sliderNav.children[this.index].classList.add("activeli");
        }
    }
