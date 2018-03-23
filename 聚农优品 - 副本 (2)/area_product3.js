
Spry.Utils.addLoadListener(function() {

	var btb=$(".rightNav");
	var tempS;
	$(".rightNav").hover(function(){
			var thisObj = $(this);
			tempS = setTimeout(function(){
			thisObj.find("a").each(function(i){
				var tA=$(this);
				setTimeout(function(){ tA.animate({right:"0"},300);},50*i);
			});
		},200);

	},function(){
		if(tempS){ clearTimeout(tempS); }
		$(this).find("a").each(function(i){
			var tA=$(this);
			setTimeout(function(){ tA.animate({right:"-110"},300,function(){
			});},50*i);
		});
	});
	var isIE6 = !!window.ActiveXObject&&!window.XMLHttpRequest;
	if( isIE6 ){ $(window).scroll(function(){ btb.css("top", $(document).scrollTop()+30) }); }



(function($){
	$.fn.hoverForIE6=function(option){
		var s=$.extend({current:"hover",delay:10},option||{});
		$.each(this,function(){
			var timer1=null,timer2=null,flag=false;
			$(this).bind("mouseover",function(){
				if (flag){
					clearTimeout(timer2);
				}else{
					var _this=$(this);
					timer1=setTimeout(function(){
						_this.addClass(s.current);
						flag=true;
					},s.delay);
				}
			}).bind("mouseout",function(){
				if (flag){
					var _this=$(this);timer2=setTimeout(function(){
						_this.removeClass(s.current);
						flag=false;
					},s.delay);
				}else{
					clearTimeout(timer1);
				}
			})
		})
	}
})(jQuery);


 
$(".allsort").hoverForIE6({current:"allsorthover",delay:200});
$(".allsort .item").hoverForIE6({delay:150});



		$("#slide").jdSlide({
			width:1200,
			height:400,
			pics:[
				{src:"img/990_400_LNXOZl.jpg",href:"###",alt:"",type:"img"},
				{src:"img/990_400_wKwQcK.jpg",href:"###",alt:"",type:"img"},
				{src:"img/990_400_hbEXBD.jpg",href:"###",alt:"",type:"img"},
				{src:"img/990_400_fbKWmg.jpg",href:"###",alt:"",type:"img"}
			]
		})
		


		$(function(){
			$('.jCarouselLite ul li').hover(function(){
				$(".cl_p_info", this).stop().animate({top:'105px'},{queue:false,duration:160});
			}, function() {
				$(".cl_p_info", this).stop().animate({top:'172px'},{queue:false,duration:160});
			});
		});
		


	$(document).ready(function(){
		$('#demo-02').jCarouselLite({
			btnPrev: '#prev-02',
			btnNext: '#next-02',
    		speed: 1000
		});		
	});
	

});
