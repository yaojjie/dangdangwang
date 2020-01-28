class Manges{
    constructor(data){
        this.data = data;
        this.root = null;
    }
    init(){
        this.renderUI();
        this.eventHandler();
    }
    renderUI(){
        this.root = document.querySelector(".box3");
        let index1 = this.data.i1.map((ele,index) => `
        <a href="#">${ele}</a>`).join("");
        let index2 = this.data.i2.map((ele,index) => `
        <li class=${index==0?"avic":""}>${ele}</li>`).join("");
        let index3 = this.data.i3.map((ele,index) => `
        <li><a href="#">${ele}</a></li>`).join("");
        let index4 = this.data.i4.map((ele,index) => `
        <img src="${ele}">`).join("");
        let index6 = this.data.i5.map((ele,index) => `
        <li class=${index==0?"avic":""}>${ele}</li>`).join("");

        
            var tpl = this.data.i6.map(function(ele, i) {
                return `
                    <li class=${i==0?"currents":""}>
                      <p><span>${ele.index + 1}</span>${ele.name}</p>
                      <div class="ffs contents">
                        <img src=${ele.src}>
                        <p>${ele.name}</p>
                      </div>
                    </li>
                    `
            }).join("");
            var tpl2 = this.data.i7.map(function(ele, i) {
                return `
                    <li class=${i==0?"currents":""}>
                      <p><span>${ele.index + 1}</span>${ele.name}</p>
                      <div class="ffs contents">
                        <img src=${ele.src}>
                        <p>${ele.name}</p>
                      </div>
                    </li>
                    `
            }).join("");
           
        

        let index5 = this.data.w1.map((ele,index) => `
        <div class="b-img2">
        <img src="${ele.src}">
        <div class="name">${ele.name}</div>
        <div class="price">${ele.price}</div>
        </div>`).join("");
        let index7 = this.data.w2.map((ele,index) => `
        <div class="b-img2">
        <img src="${ele.src}">
        <div class="name">${ele.name}</div>
        <div class="price">${ele.price}</div>
        </div>`).join("");
        let index8 = this.data.w3.map((ele,index) => `
        <div class="b-img2">
        <img src="${ele.src}">
        <div class="name">${ele.name}</div>
        <div class="price">${ele.price}</div>
        </div>`).join("");
        let index9 = this.data.w4.map((ele,index) => `
        <div class="b-img2">
        <img src="${ele.src}">
        <div class="name">${ele.name}</div>
        <div class="price">${ele.price}</div>
        </div>`).join("");
        let index = `
        <div class="box3-1">
        <div class="head">
        <div class="head-l">${index1}</div>
        <ul>${index2}</ul>
        </div>
        <div class="b-r">
        <div class="br-t"><ul class="u1">${index6}</ul><ul class="list">${tpl}</ul><ul class="list">${tpl2}</ul></div>
        </div>
        <div class="b-1">
        <div class="b-1-1" style="background:url(./img/lc1.jpg)"><ul>${index3}</ul></div>
        <div class="aimg">
        <div class="b-img">${index4}</div>
        ${index5}
        </div>
        <div class="aimg">
        <div class="b-img">${index4}</div>
        ${index7}
        </div>
        <div class="aimg">
        <div class="b-img">${index4}</div>
        ${index8}
        </div>
        <div class="aimg">
        <div class="b-img">${index4}</div>
        ${index9}
        </div>
        <div class="aimg">
        <div class="b-img">${index4}</div>
        ${index5}
        </div>
        </div>
        
        
        </div>
        `
        this.root.innerHTML = `${index}`;
    }
    eventHandler(){
        $(".list").find("li").hover(
            function(){
                $(this).addClass("currents").siblings().removeClass("currents");
            },
            function(){

            }
        )
        $(".u1").find("li").hover(
            function(){
                let index =$(this).index();
                $(this).addClass("avic").siblings().removeClass("avic");
                $(".list").eq(index).css("display","block").siblings(".list").css("display","none")
            },
            function(){}
        )
        $(".head").find("li").hover(
            function(){
                let index =$(this).index();
                $(this).addClass("avic").siblings().removeClass("avic");
                $(".aimg").eq(index).css("display","block").siblings(".aimg").css("display","none")
                
            },
            function(){}
        )
    }
}
