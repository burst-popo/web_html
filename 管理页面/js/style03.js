// JavaScript Document
$(function(){
		var $list = $(".foot").parent();
		$list.hide();
		var next = $list.eq(0);
		next.show();
		var btn = $("ul.btn li").length;
		$("ul.btn li").eq(0).addClass("hover").siblings("ul.btn li").removeClass("hover");
		$("ul.btn li").click(
			function()
			{
				$("ul.btn li").eq($(this).attr("id")-1).addClass("hover").siblings("ul.btn li").removeClass("hover");
				$list.hide();
				next = $list.eq($(this).attr("id")-1);
				next.show();
			});
	})