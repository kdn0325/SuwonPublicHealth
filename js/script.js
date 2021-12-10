var menu = $('#nav>.nav_gnb>li')
menu.on({mouseover:function(){
    menu.find('.gnb_sub').css({height:'380px'}).slideDown()
},mouseleave:function(){
    menu.find('.gnb_sub').css({height:'0px',display:'none'})
}})
menu.on({mouseover:function(){
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