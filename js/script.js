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

$('.bxslider1').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 568
  });
$('.bxslider2').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 381,
    mode:'fade'
  });

var tabmenu = $('.tab ul li')
var health_tab= $('.health_tab>div')

tabmenu.click(function(){
    var tg = $(this)
    var i = tg.index()

    tabmenu.removeClass('active')
    tg.addClass('active')

    health_tab.css({display:'none'})
    health_tab.eq(i).css({display:'block'})
})