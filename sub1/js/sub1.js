var menu = $('#nav>.nav_gnb')
menu.on({mouseover:function(){
    menu.find('.gnb_sub').css({height:'380px'}).slideDown()
},mouseleave:function(){
    menu.find('.gnb_sub').css({height:'0px',display:'none'}).slideUp()
}})

var submenu =$('#nav>.nav_gnb>li')
submenu.on({mouseover:function(){
    $(this).find('.gnb_sub').css({backgroundColor:'rgb(217,230,246)'})
},mouseleave:function(){
    $(this).find('.gnb_sub').css({backgroundColor:'#f3f4f8'})
}})

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