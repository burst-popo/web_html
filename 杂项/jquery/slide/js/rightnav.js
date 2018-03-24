// JavaScript Document
$(function(){
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
});