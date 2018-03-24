// JavaScript Document
//default.html开始

//default.html结束
//about.aspx开始
    $(function () {
        var bomw = window.innerWidth;
        var bomh = window.innerHeight;
        var showbar = bomh;
        $(".wrapper").css({ "width": bomw, "height": bomh });
        $(".showbar").css({ "height": showbar });
        $(".showwrapper").css({ "height": bomh });
        $(".sw_box").css({ "height": bomh });
        $(".swb_box").css({ "height": bomh });
        var item = $(".item .title");
        item.eq(0).parent().attr("id", "a0");
        item.eq(1).parent().attr("id", "a1");
        item.eq(2).parent().attr("id", "a2");
        item.eq(3).parent().attr("id", "a3");
        var img1 = $(".item img").eq(0).attr("src");
        var img2 = $(".item img").eq(1).attr("src");
        var img3 = $(".item img").eq(2).attr("src");
        var img4 = $(".item img").eq(3).attr("src");
        $(".item .title a").each(function (index, element) {
            if (index == 0) {
                $(this).click(function () {
                    $(this).parent().removeAttr("id").attr("id", "tit01");
                    item.eq(1).removeAttr("id").attr("id", "tit02");
                    item.eq(2).removeAttr("id").attr("id", "tit03");
                    item.eq(3).removeAttr("id").attr("id", "tit04");
                    $(this).parent().parent().removeAttr("id").attr("id", "a0");
                    item.eq(1).parent().removeAttr("id").attr("id", "a1");
                    item.eq(2).parent().removeAttr("id").attr("id", "a2");
                    item.eq(3).parent().removeAttr("id").attr("id", "a3");

                    $(".item img").eq(0).attr("src", img1);
                    $(".item img").eq(1).attr("src", img2);
                    $(".item img").eq(2).attr("src", img3);
                    $(".item img").eq(3).attr("src", img4);
                });
            }
            else if (index == 1) {
                $(this).click(function () {
                    $(this).parent().removeAttr("id").attr("id", "tit01");
                    item.eq(0).removeAttr("id").attr("id", "tit04");
                    item.eq(2).removeAttr("id").attr("id", "tit02");
                    item.eq(3).removeAttr("id").attr("id", "tit03");
                    $(this).parent().parent().removeAttr("id").attr("id", "a0");
                    item.eq(0).parent().removeAttr("id").attr("id", "a3");
                    item.eq(2).parent().removeAttr("id").attr("id", "a1");
                    item.eq(3).parent().removeAttr("id").attr("id", "a2");
                    $(".item img").eq(0).attr("src", img4);
                    $(".item img").eq(1).attr("src", img1);
                    $(".item img").eq(2).attr("src", img2);
                    $(".item img").eq(3).attr("src", img3);
                });
            } else if (index == 2) {
                $(this).click(function () {
                    $(this).parent().removeAttr("id").attr("id", "tit01");
                    item.eq(1).removeAttr("id").attr("id", "tit04");
                    item.eq(0).removeAttr("id").attr("id", "tit03");
                    item.eq(3).removeAttr("id").attr("id", "tit02");
                    $(this).parent().parent().removeAttr("id").attr("id", "a0");
                    item.eq(0).parent().removeAttr("id").attr("id", "a2");
                    item.eq(1).parent().removeAttr("id").attr("id", "a3");
                    item.eq(3).parent().removeAttr("id").attr("id", "a1");
                    $(".item img").eq(0).attr("src", img3);
                    $(".item img").eq(1).attr("src", img4);
                    $(".item img").eq(2).attr("src", img1);
                    $(".item img").eq(3).attr("src", img2);
                });
            } else {
                $(this).click(function () {
                    $(this).parent().removeAttr("id").attr("id", "tit01");
                    item.eq(1).removeAttr("id").attr("id", "tit03");
                    item.eq(2).removeAttr("id").attr("id", "tit04");
                    item.eq(0).removeAttr("id").attr("id", "tit02");
                    $(this).parent().parent().removeAttr("id").attr("id", "a0");
                    item.eq(0).parent().removeAttr("id").attr("id", "a1");
                    item.eq(1).parent().removeAttr("id").attr("id", "a2");
                    item.eq(2).parent().removeAttr("id").attr("id", "a3");
                    $(".item img").eq(0).attr("src", img2);
                    $(".item img").eq(1).attr("src", img3);
                    $(".item img").eq(2).attr("src", img4);
                    $(".item img").eq(3).attr("src", img1);
                });
            }
        });
        $(".item").each(function () {
            var w = $(this).css("width");
            $(this).find(".yin").css({ "width": w });
        });
    })
//about.aspx结束
//show.html开始
$(function(){
		var bomw = window.innerWidth;
		var bomh = window.innerHeight;
		$(".in01").hover(
			function() {
  				$(this).animate({"top":"-5px"},{queue:true,duration:200},function(){$(this).css({"top":"0px"})}).animate({"top":"5px"},200,function(){$(this).css({"top":"0px"})});
			},
		function(){
			  	$(this).animate({"top":"-5px"},{queue:true,duration:100},function(){$(this).css({"top":"0px"})}).animate({"top":"5px"},100,function(){$(this).css({"top":"0px"})});

		})
		$(".in02").hover(
			function() {
  				$(this).animate({"top":"103px"},{queue:true,duration:200},function(){$(this).css({"top":"107px"})}).animate({"top":"111px"},200,function(){$(this).css({"top":"107px"})});
			},
		function(){
  				$(this).animate({"top":"103px"},{queue:true,duration:200},function(){$(this).css({"top":"107px"})}).animate({"top":"111px"},200,function(){$(this).css({"top":"107px"})});

		})
		$(".in03").hover(
			function() {
  				$(this).animate({"top":"192px"},{queue:true,duration:200},function(){$(this).css({"top":"196px"})}).animate({"top":"200px"},200,function(){$(this).css({"top":"196px"})});
			},
		function() {
  				$(this).animate({"top":"192px"},{queue:true,duration:200},function(){$(this).css({"top":"196px"})}).animate({"top":"200px"},200,function(){$(this).css({"top":"196px"})});

		})
		$(".in04").hover(
			function() {
  				$(this).animate({"top":"321px"},{queue:true,duration:200},function(){$(this).css({"top":"325px"})}).animate({"top":"329px"},200,function(){$(this).css({"top":"325px"})});
			},
		function(){
  				$(this).animate({"top":"321px"},{queue:true,duration:200},function(){$(this).css({"top":"325px"})}).animate({"top":"329px"},200,function(){$(this).css({"top":"325px"})});

		})
		$(".in05").hover(
			function() {
  				$(this).animate({"top":"179px"},{queue:true,duration:200},function(){$(this).css({"top":"183px"})}).animate({"top":"187px"},200,function(){$(this).css({"top":"183px"})});
			},
		function(){
  				$(this).animate({"top":"179px"},{queue:true,duration:200},function(){$(this).css({"top":"183px"})}).animate({"top":"187px"},200,function(){$(this).css({"top":"183px"})});

		})
		function auto(){
			$( ".d01" ).animate({"top":"25%","left":"13%"},{queue:true,duration:100},function(){$(this).css({"top":"26%","left":"14%"})}).animate({"top":"27%","left":"15%"},100,function(){$(this).css({"top":"26%","left":"14%"})});
			$( ".d02" ).animate({"top":"54%","left":"8%"},{queue:true,duration:100},function(){$(this).css({"top":"55%","left":"9%"})}).animate({"top":"56%","left":"10%"},100,function(){$(this).css({"top":"55%","left":"9%"})});
			$( ".d03" ).animate({"top":"83%","left":"41%"},{queue:true,duration:100},function(){$(this).css({"top":"84%","left":"42%"})}).animate({"top":"85%","left":"43%"},100,function(){$(this).css({"top":"84%","left":"42%"})});
			$( ".d04" ).animate({"top":"69%","left":"86%"},{queue:true,duration:100},function(){$(this).css({"top":"70%","left":"87%"})}).animate({"top":"71%","left":"88%"},100,function(){$(this).css({"top":"70%","left":"87%"})});
			$( ".d05" ).animate({"top":"20%","left":"84%"},{queue:true,duration:100},function(){$(this).css({"top":"21%","left":"85%"})}).animate({"top":"22%","left":"86%"},100,function(){$(this).css({"top":"21%","left":"85%"})});
		}
		setInterval(auto,1500); 
	})
//show.html结束
