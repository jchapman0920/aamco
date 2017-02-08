var mobile = false;
var mobileBreak = 768;
if($(window).width() <= mobileBreak){mobile = true;}
var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var path;
function freezePage(){$('body').css({'width':'100%','height':'100%','overflow':'hidden'});}
function unfreezePage(){$('body').css({'width':'','height':'','overflow':''});}
function animScroll(sec, speed, offset){
	activeOffset = $(sec).offset().top;	
	TweenMax.to('html,body', speed, {scrollTop:activeOffset, ease:Expo.easeInOut});
}
// animScroll('#tier-contents',1,0);





//! WINDOW RESIZE

var winW;
var winH;
$(window).resize(function(){
	winW = $(window).width();
	winH = $(window).height();
	//console.log(winW);
})





//! ANIMATIONS

function isScrolledIntoView(elem, dif){
	vT = $(elem).offset().top-dif;
	if(sT >= vT){
		return true;
	}
}

var hasPlayed = [];

$(window).scroll(function(){
	sT = Number($(document).scrollTop());
	
	$('.hasAnim').each(function(){
		if(isScrolledIntoView($(this), 400) && hasPlayed.indexOf($(this).attr('id')) == -1){
			hasPlayed.push($(this).attr('id'));
			goAnim($(this).attr('id'));
		}
	})
})

function goAnim(sec){
	//console.log(sec)
	
	if(sec == 'frame1'){
		TweenMax.to($('#frame1').find('.roadlines'), .75, {height:'100%', ease:Expo.easeInOut})
		TweenMax.to($('#frame1').find('.car'), 1, {delay:.5,  top:-300, ease:Expo.easeOut})
		TweenMax.to($('#frame1').find('.logo'), 1, {delay:.75, startAt:{scaleX:.5, scaleY:.5}, scaleX:1, scaleY:1, opacity:1, ease:Elastic.easeOut, easeParams:[2,2]})
		TweenMax.to($('#frame1').find('.txt'), .5, {delay:1,  opacity:1})
		TweenMax.to($('#frame1').find('.hood'), .5, {delay:1.5,  opacity:1})
	}
	
	if(sec == 'frame2'){
		TweenMax.to($('#frame2').find('.car'), 1, {left:755, 'display':'block', ease:Expo.easeOut})
		TweenMax.to($('.smoke'), 1, {delay:.25, startAt:{scaleX:.5, scaleY:.5}, opacity:1, scaleX:1, scaleY:1, ease:Expo.easeOut})
		
		$('.smokecloud').each(function(i){
			TweenMax.to($(this), 1, {delay:(i*.25), startAt:{'marginLeft':500}, 'display':'block', 'marginLeft':0, onStartParams:[$(this)], onStart:function(trg){
				if(i%2 == 0){
					trg.addClass('bubble1');
				} else {
					trg.addClass('bubble2');
				}
			}})
		})		
		
		TweenMax.to($('#frame2').find('.txt'), 1, {delay:.5, startAt:{left:'+=-100'}, left:285, opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame2').find('.txtline'), 1, {delay:.65, startAt:{left:'+=-100'}, left:-150, opacity:1, ease:Expo.easeOut})
	}
	
	if(sec == 'frame3'){
		TweenMax.to($('#frame3').find('.dash'), 1, {bottom:0, ease:Expo.easeOut})
		TweenMax.to($('#frame3').find('.txt'), 1, {delay:.5, startAt:{left:'+=-100'}, left:475, opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame3').find('.txtline'), 1, {delay:.65, startAt:{left:'+=-100'}, left:300, opacity:1, ease:Expo.easeOut})
	}
	
	if(sec == 'frame4'){
		TweenMax.to($('#frame4').find('.engine'), 1, {left:-370, ease:Expo.easeOut})
		TweenMax.to($('#frame4').find('.txt'), 1, {delay:0, startAt:{left:'+=100'}, left:820, opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame4').find('.txtline'), 1, {delay:.15, startAt:{left:'+=100'}, left:270, opacity:1, ease:Expo.easeOut})
	}
	
	if(sec == 'frame5'){
		TweenMax.to($('#frame5').find('.car'), 1, {bottom:0, ease:Expo.easeOut})
		TweenMax.to($('#frame5').find('.txt'), 1, {delay:.5, startAt:{left:'+=-100'}, left:170, opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame5').find('.txtline'), 1, {delay:.65, startAt:{left:'+=-100'}, left:-30, opacity:1, ease:Expo.easeOut})
	}
	
	if(sec == 'frame6'){
		TweenMax.to($('#frame6').find('.coupon'), 1, {opacity:1})
	}
	
	if(sec == 'frame7'){
		TweenMax.to($('#frame7').find('.sign'), 1, {bottom:0, ease:Expo.easeOut})
		TweenMax.to($('#frame7').find('.car'), 3, {delay:.25, left:100, ease:Expo.easeOut})
		TweenMax.to($('#frame7').find('.txt'), 1, {delay:1, opacity:1})
	}
}

$(document).ready(function(){
	setTimeout(function(){
		goAnim('frame1');
	}, 200)	
})



