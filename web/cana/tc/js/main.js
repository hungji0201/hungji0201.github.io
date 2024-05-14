$(function() {
	setTimeout(delayedFragmentTargetOffset, 500);
});
function delayedFragmentTargetOffset(){
	var windowWidth = $(window).width();
	var top_h;
	if (windowWidth > 1199) {
		top_h = 208;
	} else {
		top_h = 80;
	}
	var offset = $(':target').offset();
	if(offset){
			var scrollto = offset.top - top_h;
			$('html, body').animate({scrollTop:scrollto}, 0);
	}
}

$(document).ready(function () {
	//svg
	$('img.svg').each(function() {
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
			var $svg = $(data).find('svg');
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}
			$img.replaceWith($svg);
		}, 'xml');
	});
	//header
  var wsmenu = $('.wsmenu, #navToggle');
	var menuopen = function() {
		$(wsmenu).removeClass('menuclose').addClass('menuopen');
		$('html,body').addClass('overflow-hidden');
	}
	var menuclose = function() { 
		$(wsmenu).removeClass('menuopen').addClass('menuclose');
		$('html,body').removeClass('overflow-hidden');
	}
	$('#navToggle').click(function(){
		if (wsmenu.hasClass('menuopen')) {$(menuclose)}
		else {$(menuopen)}
	});
	$('.scroll_tag').on('click',function(){
		if (wsmenu.hasClass('menuopen')) {$(menuclose)}
	});

	$('.wsmenu-list li').has('.wsmenu-submenu, .wsmenu-submenu-sub').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow"></i></span>');

	$('.wsmenu-click').click(function(){
		$(this).siblings('.wsmenu-submenu').slideToggle('slow').parent('li').siblings().children('.wsmenu-submenu, .megamenu').slideUp('slow');
		$(this).children('.wsmenu-arrow').toggleClass('wsmenu-rotate');
		$(this).siblings('.wsmenu-submenu-sub').slideToggle('slow');
		$(this).siblings('.wsmenu-submenu-sub-sub').slideToggle('slow');
		$(this).siblings('.megamenu').slideToggle('slow').parent('li').siblings().children('.wsmenu-submenu, .megamenu').slideUp('slow');
	});

	$('.lang').on('click', function(){
		$('.lang-option').toggleClass( "d-flex" );
	});
	
	var scrollTop = $(window).scrollTop();
	if(scrollTop>50){
		$('body').addClass('scroll');
	}else{
		$('body').removeClass('scroll');
	}
	$(window).scroll(function(){
		scrollTop = $(window).scrollTop();
		if(scrollTop>50){
			$('body').addClass('scroll');
		}else{
			$('body').removeClass('scroll');
		}
	});

	new WOW().init();
});