// ������ �����, � ������
$(document).ready(function(){
$(document).on('mouseover', '.footerSlideUpButton', function(){
	mouseOn();
	var interval = setInterval("mouseOn()", 750);
	$(document).on('mouseout', '.footerSlideUpButton', function(){
		clearInterval(interval);
	});
});

$('.footerSlideUpButton').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
	return false;
});

});

function goto() {
    var animateSpeed = 75;
    $(document).find('.footerSlideUpButtonArrowFirst').animate({
        opacity:1
    }, animateSpeed, function(){
        $(document).find('.footerSlideUpButtonArrowSecond').animate({
            opacity:1
        }, animateSpeed, function(){
            $(document).find('.footerSlideUpButtonArrowThird').animate({
                opacity:1
            }, animateSpeed, function(){
                $(document).find('.footerSlideUpButtonArrowFirst').animate({
                    opacity:0
                }, animateSpeed, function(){
                    $(document).find('.footerSlideUpButtonArrowSecond').animate({
                        opacity:0
                    }, animateSpeed, function(){
                        $(document).find('.footerSlideUpButtonArrowThird').animate({
                            opacity:0
                        }, animateSpeed );
                    })
                })
            })
        })
    });
    return(i);
}

function mouseOn(){
       goto();
}

function mouseOnSecond(){
	$(document).find('.footerSlideUpButtonArrowFirst').animate({
		opacity:1
		}, 100, function(){
			$(document).find('.footerSlideUpButtonArrowSecond').animate({
				opacity:1
				}, 100, function(){
					$(document).find('.footerSlideUpButtonArrowThird').animate({
						opacity:1
						}, 100, function(){
							$(document).find('.hiddenFooterArrows').animate({
								opacity:0
								}, 100)
					})
				})
		});
}
