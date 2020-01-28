class Mangex{
    constructor(data){
        this.data = data;
        this.root = null;
    }
    init(){
        this.renderUI();
    }
    renderUI(){
        this.root = document.querySelector(".box5");
        let index1 = this.data.i1.map((ele,index) => `
        <li><a href="#">${ele}</a></li>`).join("");
        let index2 = this.data.i2.map((ele,index) => `
        <li><a href="#">${ele}</a></li>`).join("");
        let index4 = this.data.i4.map((ele,index) => `
        <li><a href="#">${ele}</a></li>`).join("");
        let index3 = this.data.i3.map((ele,index) => `
        <div class="wnj"><img src=${ele}></div>`).join("");

        let index = `
        <div class="box5-1">
        <div class="bo5">
        <div class="rybh"><a>日用百货</a></div>
        <ul>${index1}</ul>
        </div>
        <div class="bon5"><img src="./img/mb1.PNG"></div>
        <div class="bo6">
        <div class="ddyp"><a>当当优品</a></div>
        <ul>${index2}</ul>
        </div>
        <div class="bon6"><img src="./img/mb2.PNG"></div>
        <div class="bo7">
        <div class="cywj"><a>创意文具</a></div>
        </div>
        ${index3}
        <div class="bo8">
        <div class="yyt"><a>孕婴童</a></div>
        <ul>${index4}</ul>
        </div>
        <div class="bon8"><img src="./img/mb3.PNG"></div>
        
        </div>
        `
        this.root.innerHTML = `${index}`;
    }
}