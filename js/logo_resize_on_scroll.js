var imageWidth = parseInt($('.v-logo').css('width')),
	imageHeight = parseInt($('.v-logo').css('height')),
    stopWidth=imageWidth / 2,
    marginHeight = parseInt($('.v-logo').css('margin-top')),
    stopMargin=-imageHeight;
$('.logo-placeholder').css("height", imageHeight);

$(window).scroll(function(e) {
    var windowScroll = $(window).scrollTop(),
        newMargin = marginHeight - windowScroll,
        newWidth = imageWidth - windowScroll;
	// adjust top margin and width when scrolling
    if(newMargin>=stopMargin){
        //$('.v-logo').css("width", newWidth);
        $('.v-logo').css("margin-top", newMargin);
    }
	// stop adjusting when we reach the final value
    else{
        //$('.v-logo').css("width", stopWidth);
        $('.v-logo').css("margin-top", stopMargin); 
    }
	//imageHeight = parseInt($('.v-logo').css('height'));
	//$('.logo-placeholder').css("height", newMargin+imageHeight);
}); 