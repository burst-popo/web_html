// JavaScript Document
$(function(){
		var img = $(".showbox");
		var icon = $(".icon ul li");
		var text = $(".icon ul li a");
		var title = $(".showbox a img");
		var num=0;
		img.hide();
		img.eq(0).show();
		icon.eq(0).css({"background":"#0000ff"});
		text.each(function(index) {
			var info=title.eq(index).attr("name");
			$(this).text(info);
		});
		function auto(){
				num = (num<img.length-1)?num+1:0;
				img.eq(num).show().siblings().not(".icon").hide();
				icon.eq(num).css({"background":"#0000ff"}).siblings().css({"background":"#F00"});
				return num;
		}
		var y =setInterval(auto,5000); 
		 img.hover(
		 	function(){
				 clearInterval(y) ;
			},function(){
				var y =setInterval(auto,5000); 
			}
		)
		icon.click(function(){
			var t=$(this).index();
			img.eq(t).show().siblings().not(".icon").hide();
			icon.eq(t).css({"background":"#0000ff"}).siblings().css({"background":"#F00"});
			num=t;
			return num;
		})
	})