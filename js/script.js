
/* 메뉴 슬라이드 오버 */

var menu = $('#nav>.nav_gnb')
menu.on({mouseover:function(){
    menu.find('.gnb_sub').css({height:'380px'}).slideDown()
},mouseleave:function(){
    menu.find('.gnb_sub').css({height:'0px',display:'none'}).slideUp()
}})

/* 서브메뉴 오버시 컬러 변경 */

var submenu =$('#nav>.nav_gnb>li')
submenu.on({mouseover:function(){
    $(this).find('.gnb_sub').css({backgroundColor:'rgb(217,230,246)'})
},mouseleave:function(){
    $(this).find('.gnb_sub').css({backgroundColor:'#f3f4f8'})
}})

/*  사이드바 클릭시 서브 메뉴 */

var sidemenu = $('.smenu>ul>li')
var sidesub = $('.smenu>ul>li>ul')

sidemenu.click(function(){
    var tg = $(this);
    var i = tg.index();

    sidemenu.removeClass('active');
    tg.addClass('active');

    sidesub.css({display:'none'})
    sidesub.eq(i).css({display:'block'})

})