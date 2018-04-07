/**
 * Created by Bobby on 02.10.2014.
 */
$(document).ready(function(){

    $.each($('ul.langList > li > a'), function(key,val) {
        if (!$(val).hasClass('current')) $(val).hide()
    });

    $('ul.langList > li > a.current').click(function(e){
        e.preventDefault();
        $.each($(this).closest('ul.langList').find('li > a'), function(key,val) {
         if (!$(val).hasClass('current')) $(val).slideToggle(150);
            else {
             if ($(val).hasClass('active')) $(val).removeClass('active')
             else $(val).addClass('active')
         }
        })
    });


    $('.toggleNavBlock').click(function(){
        var _this = $(this);
        var animSpeed1 = 750;
        var animSpeed2 = 200;
        if (_this.hasClass('active'))
        {
            _this.find('.toggleNavBlock-index').animate({opacity:0},animSpeed1, function(){
                _this.find('.toggleNavBlock-index').removeClass('fa-times').addClass('fa-bars');
                _this.removeClass('active');
            });
            _this.find('p').animate({opacity:0},animSpeed1, function(){
                _this.find('p').removeClass('close').html('');
            })
            _this.closest('.navigation').find('.navList').animate({opacity:0},animSpeed2,function(){
                _this.closest('.navigation').find('.navList').css('display','none');
                _this.closest('.navigation').animate({width:'0',right:'0'},animSpeed1, function(){
                    _this.closest('.navigation').css('width','auto');
                    _this.find('.toggleNavBlock-index').animate({opacity:1},animSpeed2);
                    _this.closest('.navigation').next('.langBlock').show();
                    _this.closest('.navigation').next('.langBlock').animate({opacity:1},animSpeed2);
                })
            });
        }
        else
        {
            _this.closest('.navigation').next('.langBlock').animate({opacity:0},animSpeed2, function(){
                $(this).hide(animSpeed1);
                _this.find('.toggleNavBlock-index').animate({opacity:0},animSpeed1);
                _this.closest('.navigation').animate({width:'840px',right:'-200px'},animSpeed1, function(){
                    _this.addClass('active');
                    _this.find('.toggleNavBlock-index').removeClass('fa-bars').addClass('fa-times').animate({opacity:1},animSpeed2);
                    _this.find('p').addClass('close').html('close').animate({opacity:1},animSpeed2);
                    _this.closest('.navigation').find('.navList').css('display','inline-block').animate({opacity:1},animSpeed2);
                });
            });
        }

    })
});

$(document).click(function(event) {
    var _this = $('.toggleNavBlock');
    var animSpeed1 = 750;
    var animSpeed2 = 200;
    if ($('.toggleNavBlock').hasClass('active'))
    {
        if ($(event.target).closest('.navigation').find('.navList').length) return;
        _this.find('.toggleNavBlock-index').animate({opacity:0},animSpeed1, function(){
            _this.find('.toggleNavBlock-index').removeClass('fa-times').addClass('fa-bars');
            _this.removeClass('active');
        });
        _this.find('p').animate({opacity:0},animSpeed1, function(){
            _this.find('p').removeClass('close').html('');
        })
        _this.closest('.navigation').find('.navList').animate({opacity:0},animSpeed2,function(){
            _this.closest('.navigation').find('.navList').css('display','none');
            _this.closest('.navigation').animate({width:'0',right:'0'},animSpeed1, function(){
                _this.closest('.navigation').css('width','auto');
                _this.find('.toggleNavBlock-index').animate({opacity:1},animSpeed2);
                _this.closest('.navigation').next('.langBlock').show();
                _this.closest('.navigation').next('.langBlock').animate({opacity:1},animSpeed2);
            })
        });
    }
});


$(document).click(function(event) {
    if ($('ul.langList > li > a.current').hasClass('active'))
    {
        if ($(event.target).closest('ul.langList').length) return;

        $.each($('ul.langList > li > a'), function(key,val) {
            if (!$(val).hasClass('current')) $(val).slideToggle(150);
            else {
                if ($(val).hasClass('active')) $(val).removeClass('active')
                else $(val).addClass('active')
            }
        });
    }
});