/**
 * Created by liushuang on 2016/11/15.
 */

define(['zepto'],function($){
    $('.header-left').on('click',function(){
        $('#c-menu--slide-left,#c-mask,nav').addClass('is-active')
    })
    $('#c-mask,.c-menu__close').on('click',function(e){
        e.stopPropagation();
        $('#c-menu--slide-left,#c-mask,nav').removeClass('is-active')
    })

})