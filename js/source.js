/**
 * Created by Bobby on 06.10.2014.
 */

$(document).ready(function () {

    $(document).on("scroll", onScroll);
    onScroll();
    $('.commingSoonButton').click(function(){
        var _this = $(this);
        if (_this.hasClass('show'))
        {
            $(document).find('.comingSoon').slideDown(1000,function(){
             _this.removeClass('show').addClass('hide');
            });
        }
        else if (_this.hasClass('hide'))
        {
            $(document).find('.comingSoon').slideUp(1000,function(){
             _this.removeClass('hide').addClass('show');
            });
            $("html, body").animate({ scrollTop: 0}, 1000);
        }

    });

    currentPage();
    $('#ui-carousel-prev, #ui-carousel-next').click(function(){
        currentPage();
    })

});

function currentPage (){
    var curPage = $( "#carousel" ).rcarousel( "getCurrentPage" );
    var totalPages = $( "#carousel" ).rcarousel( "getTotalPages" );
    if (curPage == 1)
    {
        $('#ui-carousel-prev').addClass('hide');
        $('.ui-carousel-prev-hide').show();
    }
    else if (curPage > 1 && curPage < totalPages)
    {
        $('#ui-carousel-next').removeClass('hide');
        $('#ui-carousel-prev').removeClass('hide');
        $('.ui-carousel-prev-hide').hide();
        $('.ui-carousel-next-hide').hide();
    }
    else if (curPage == totalPages)
    {
        $('#ui-carousel-next').addClass('hide');
        $('.ui-carousel-next-hide').show();
    }
}


function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    var windiwH = $(window).height();
    var h2 = $('.ourUpdatesSubscribe > .contentBlock > h2');
    var h2Pos = h2[0].offsetTop;
    var h3 = $('.ourUpdatesSubscribe > .contentBlock > h3');
    var h3Pos = h3[0].offsetTop;
    var p = $('.ourUpdatesSubscribe > .contentBlock > p');
    var pPos = p[0].offsetTop;
    var img = $('.ourUpdatesSubscribe > .contentBlock > .ourUpdatesSubscribe-animation > img');
    var imgPos = img[0].offsetTop;
    var form = $('.ourUpdatesSubscribe .updatesSubscribe-form');
    var formPos = form[0].offsetTop;

    if ((scrollPos + windiwH) >= h2Pos) h2.animate({opacity:1},1500);
    if ((scrollPos + windiwH) >= h3Pos) h3.animate({opacity:1},1500);
    if ((scrollPos + windiwH) >= pPos) p.animate({opacity:1},1500);
    if ((scrollPos + windiwH) >= imgPos) img.animate({opacity:1},2500);
    if ((scrollPos + windiwH) >= formPos) form.animate({opacity:1},1500);

    var $icon = $('.animateBlock > img');
        $icon.css({bottom:0});
    $.each($icon, function(key,val){
        var $this = $(val);
        var range = 250;

        $this.css({left:50+getRandomInt(-15,15)+'%'});
        $this.delay(parseInt(Math.random()*10000)).animate({bottom:range},
            {duration:5000,
                step: function(now,fx){
                    $this.css('-webkit-transform','rotate('+now+'deg)');
                    $this.css('-moz-transform','rotate('+now+'deg)');
                    $this.css('transform','rotate('+now+'deg)');
                    $this.css({width:(Math.floor(now/4)),
                        left:'-='+Math.floor(now/range)+getRandomInt(-0.15,0.15)+'px',
                        opacity: function(){
                            if (Math.floor(now) == range) return 0;
                            else return 100/now;
                        }});
                }
            });
    })
}
