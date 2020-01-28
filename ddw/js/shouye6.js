class Manget{
    constructor(data){
        this.data = data;
        this.root = null;
    }
    init(){
        this.renderUI();
        this.eventHandler();
    }
    renderUI(){
        this.root = document.querySelector(".box6");
        let index1 = this.data.map((item,index) => {
            return `
            <li>
            <img src=${item.src} alt="">
            <span><a href="#">${item.name}</a></span>
            <sapn class="jg">${item.price}</sapn>
            </li>`
        }).join("")
        let index = `
        <div class="box6-1">
        <div class="head">为您推荐</div>
        <ul>${index1}</ul>
        </div>
        `
        this.root.innerHTML = `${index}`;
    }
    eventHandler(){
        /* 给分类添加鼠标移入事件，当事件触发的时候设置当前标签的选中状态 + 切换UL */
        let ul = this.root.querySelector("ul").children;

        for(let index = 0;index < ul.length; index++){
            ul[index].onmouseenter = function(){
                this.classList.add("active2");
            }
               
            ul[index].onmouseleave = function(){
                this.classList = '';
                // this.classList.remove("active")
            }
        }
    }
}