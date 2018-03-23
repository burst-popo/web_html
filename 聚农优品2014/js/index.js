// JavaScript Document
$(function(){
		var nav = $(".nav_wrapper ul li");
		var navbox = $(".nav_wrapper");
		nav.hover(function(){
			navbox.css({"height":"79px"});
			nav.css({"height":"79px"});
			$(this).find("div").show(); 
		},function(){
			navbox.css({"height":"53px"});
			nav.css({"height":"53px"});
			$(this).find("div").hide();
		})
		var span = $(".pinpai span");
		var icon = $(".span_icon");
		icon.hide();
		$(".showbox").slideUp();
		span.click(function(){
			var imglink = $(this).attr("name");
			var num = $(this).attr("id");
			var textlink = $(this).attr("class");
			$(this).find("div").show();
			$(this).siblings().find("div").hide();
			$(this).not("div").css({"border":"2px solid #47A511","width":"201px","height":"62px","opacity":"1.0"}).siblings().not("div").not(".span_fix").css({"border-right":"1px solid #E6E7E1","border-left":"none","border-top":"none","border-bottom":"none","width":"205px","height":"66px","opacity":"0.5"});
			$(this).find("img").css({"width":"201px","height":"62px"});
			$(this).siblings().find("img").not(".showbox a img").css({"width":"205px","height":"66px"});
			$(".showbox").eq(num).slideDown().find("img").attr({"src":imglink}).parent().parent().siblings("div").slideUp();
			$(".showbox").eq(num).slideDown().find("a").attr({"href":textlink}).parent().siblings("div").slideUp();
			$(".span_fix").css({"border-right":"none","border-left":"none","border-top":"none","border-bottom":"none","opacity":"0.5"})
			

		})
				span.eq(0).trigger("click");

		$(".span_fix").click(function(){
			$(this).css({"border":"2px solid #47A511","width":"201px","height":"62px","opacity":"1.0"});
			
		})
		var total = $(".jp_wrapper ul").length;
		var list = $(".jp_wrapper ul");
		var text01 = $(".jp_btn span.jb_text01");
		var text02 = $(".jp_btn span.jb_text02");
		var btnl = $(".jp_btn .jp_btn_left");
		var btnr = $(".jp_btn .jp_btn_right");
		var num = 1;
		list.hide().eq(0).show();
		text02.text(total);
		text01.text(list.eq(0).index()+1);
		btnl.click(
			function(){
					var flownum = (  num < 3 ) ? num+1 : 3 ;
					list.eq(flownum-1).show().siblings().hide();
					text01.text(flownum);
					num = flownum;
					return num;
			}
		)
		btnr.click(
			function(){
				var flownum = (  num < 0 ) ? 1 : num-1 ;
					if(flownum <= 0){
						list.eq(0).show().siblings().hide();
					}else{
						list.eq(flownum-1).show().siblings().hide();
					}
					if(flownum <= 0){
						flownum = 1
						text01.text(flownum);
						}else{
					text01.text(flownum);
						}
					num = flownum;
					return num;
			}
		)
		$(".la_right ul li").each(function() {
			var labox = $(this).find("div");
			var law = labox.find("img",this).width();
			var lah = labox.find("img",this).height();
			labox.css({"width":law,"height":lah});
		});
		
	})