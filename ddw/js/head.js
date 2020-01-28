$(() =>{
    /* 001- 添加鼠标移入事件*/
    /* 002- 当鼠标移入的时候 */
    /* (1) 设置当前标签的选中状态(排他) */
    /* (2) 设置显示的内容切换(排他) */
    $(".ddnewhead_area").mouseenter(function(){
        
        $(this).children(".ddnewhead_area_list").slideDown();
        $(this).toggleClass("current");
    })
    $(".ddnewhead_area").mouseleave(function(){
        
        $(this).children(".ddnewhead_area_list").slideUp();
        
    })
})