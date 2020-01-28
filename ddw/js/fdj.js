
    $.ajax({                     
        type:"post",               
        url:"./php/fdj.php",  
        dataType:"json",          
        success: function(data){  
            // console.log(data); 
            /* 002-根据数据来渲染页面 */ 
            // (new Mange(data)).init(); 
            let msv = new Mangeu(data);
        msv.init();
    }
});
// 变更内容
let cont = window.location.search.slice(4)
$.ajax({
    type:"get",
    url:"./php/fdj2.php",
    data:`cont=${cont}`,
    dataType:"json",
    success: function (response){
        console.log(response);
        $(".img img").attr("src",`${response[0].src}`);
        $("#detailPicDiv img").attr("src",`${response[0].src}`);
        $(".dp_slide_box li").eq(0).find("img").attr("src", `${response[0].src}`);
        $("#h1").text(`${response[0].name}`);
        $(".head_title_name").text(`${response[0].search_hot}`);
        $("#comm_num_down").text(`${response[0].star}`);
        $("#dd-price").text(`￥${response[0].price}`);
        $(".time b").text(`${response[0].link}`);
        $(".dpma").text(`${response[0].link}`);
    }
})


class Mangeu{
    constructor(data){
        this.data = data;
    }
    init(){
        this.renderUI();
    }
    renderUI(){
        let index = this.data.n1.map((item,index) =>{
            return `
            <li style="float: left; width: 56px; height: 56px;" class="">
            <a href="#"><img src="${item}" style="width: 56px; height: 56px;"></a></li>`
        }).join("");
        $("#main-img-slider").html(index) ;
        let index1 = `
        <img id="largePic" alt="大希地 水晶虾饺皇虾饺300g*4盒港式早茶点心虾球虾仁饺子速冻冷冻
虾饺晶莹剔透，虾多肉滑，一盒12只，共48只" src="./img/xiao1.jpg" class="largePic" width="400"
            height="400">
        <div id="moveMask" class="zoom_pup moveMask"
            style=" opacity:0.5 ; position: absolute;width: 200px;height: 200px;background: #ccc; left: 0px; top: 0px; display: none;;">
        </div>`
        $(".img").html(index1) ;
        let index2 = `
        <img src="./img/xiao1.jpg" alt="大希地 水晶虾饺皇虾饺300g*4盒港式早茶点心虾球虾仁饺子速冻冷冻
虾饺晶莹剔透，虾多肉滑，一盒12只，共48只" height="800" width="800" id="detailPic" style="left: -208px; top: -162px; position: absolute;">`
$(".big_pic").html(index2) ;
    }

    
}
