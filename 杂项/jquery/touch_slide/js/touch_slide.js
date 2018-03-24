// JavaScript Document
$(document).on("pageinit",function(){
		var bomw = window.innerWidth  ;
		var bomh = window.innerHeight ;
		$(".wrapper").css({"width":bomw,"height":bomh});
		$(".imgbox").css({"width":bomw});
		$(".btn").css({"width":bomw});
		$(".imginfo").css({"width":bomw});
		$(".black").hide();
		$(".imgbox").hide();
		$(".button ul li a").click(function(){
			var tab = $(this).parent().index();
			if(tab==0){
					$(this).parent().css({"background":"url(img/huxing_kuang02.png) repeat-x 0 0"}).siblings().css({"background":"url(img/huxing_kuang01.png) repeat-x 0 0"});
					if($(".xz_title ul").attr("id")==1){
						$(".imgbox").show();
						$(".black").show();
						var arr1 = [['测试101','img/10.jpg'],['测试102','img/11.jpg'],['测试103','img/12.jpg'],['测试104','img/13.jpg'],['测试105','img/14.jpg'],['测试106','img/15.jpg'],['测试107','img/16.jpg']];
						$.each(arr1,function(i,val){
							$("<li id='"+val[0]+"' class='"+i+"'><img src='"+val[1]+"' /></li>").appendTo("ul#showimg")	;
						});
						var img = $(".imgbox ul#showimg li").length;
						$("ul#showimg li").css({"width":bomw});
						$(".imgbox ul#showimg").width(img*bomw);
						ect()
						
					}else if($(".xz_title ul").attr("id")==2){
						$(".imgbox").show();
						$(".black").show();
						var arr1 = [['测试201','img/3.jpg'],['测试202','img/4.jpg'],['测试203','img/5.jpg'],['测试204','img/6.jpg'],['测试205','img/7.jpg'],['测试206','img/8.jpg'],['测试207','img/9.jpg']];
						$.each(arr1,function(i,val){
							$("<li id='"+val[0]+"' class='"+i+"'><img src='"+val[1]+"' /></li>").appendTo("ul#showimg")	;
						});
						var img = $(".imgbox ul#showimg li").length;
						$("ul#showimg li").css({"width":bomw});
						$(".imgbox ul#showimg").width(img*bomw);
						ect()
					}else if($(".xz_title ul").attr("id")==3){
						$(".imgbox").show();
						$(".black").show();
						var arr1 = [['测试301','img/10.jpg'],['测试302','img/6.jpg'],['测试303','img/12.jpg'],['测试304','img/8.jpg'],['测试305','img/14.jpg'],['测试306','img/9.jpg'],['测试307','img/16.jpg']];
						$.each(arr1,function(i,val){
							$("<li id='"+val[0]+"' class='"+i+"'><img src='"+val[1]+"' /></li>").appendTo("ul#showimg")	;
						});
						var img = $(".imgbox ul#showimg li").length;
						$("ul#showimg li").css({"width":bomw});
						$(".imgbox ul#showimg").width(img*bomw);
						ect()
					}
			}
			if(tab==1){
				$(this).parent().css({"background":"url(img/huxing_kuang02.png) repeat-x 0 0"}).siblings().css({"background":"url(img/huxing_kuang01.png) repeat-x 0 0"});
				if($(".xz_title ul").attr("id")==1){
					$(".imgbox").show();
					$(".black").show();
					var arr1 = [['测试108','img/16.jpg'],['测试109','img/15.jpg'],['测试110','img/14.jpg'],['测试111','img/13.jpg'],['测试112','img/12.jpg'],['测试113','img/11.jpg'],['测试114','img/10.jpg']];
					$.each(arr1,function(i,val){
						$("<li id='"+val[0]+"' class='"+i+"'><img src='"+val[1]+"' /></li>").appendTo("ul#showimg")	;
					});
					var img = $(".imgbox ul#showimg li").length;
					$("ul#showimg li").css({"width":bomw});
					$(".imgbox ul#showimg").width(img*bomw);
					ect()
				}else if($(".xz_title ul").attr("id")==2){
						$(".imgbox").show();
						$(".black").show();
						var arr1 = [['测试208','img/3.jpg'],['测试209','img/4.jpg'],['测试210','img/5.jpg'],['测试211','img/6.jpg'],['测试212','img/7.jpg'],['测试213','img/8.jpg'],['测试214','img/9.jpg']];
						$.each(arr1,function(i,val){
							$("<li id='"+val[0]+"' class='"+i+"'><img src='"+val[1]+"' /></li>").appendTo("ul#showimg")	;
						});
						var img = $(".imgbox ul#showimg li").length;
						$("ul#showimg li").css({"width":bomw});
						$(".imgbox ul#showimg").width(img*bomw);
						ect()
					}else if($(".xz_title ul").attr("id")==3){
						$(".imgbox").show();
						$(".black").show();
						var arr1 = [['测试308','img/10.jpg'],['测试309','img/6.jpg'],['测试310','img/12.jpg'],['测试311','img/8.jpg'],['测试312','img/14.jpg'],['测试313','img/9.jpg'],['测试314','img/16.jpg']];
						$.each(arr1,function(i,val){
							$("<li id='"+val[0]+"' class='"+i+"'><img src='"+val[1]+"' /></li>").appendTo("ul#showimg")	;
						});
						var img = $(".imgbox ul#showimg li").length;
						$("ul#showimg li").css({"width":bomw});
						$(".imgbox ul#showimg").width(img*bomw);
						ect()
					}
			}
			if(tab==2){
				$(this).parent().css({"background":"url(img/huxing_kuang02.png) repeat-x 0 0"}).siblings().css({"background":"url(img/huxing_kuang01.png) repeat-x 0 0"});
				if($(".xz_title ul").attr("id")==1){
					$(".imgbox").show();
					$(".black").show();
					var arr1 = [['测试115','img/14.jpg'],['测试116','img/11.jpg'],['测试117','img/13.jpg'],['测试118','img/15.jpg']];
					$.each(arr1,function(i,val){
						$("<li id='"+val[0]+"' class='"+i+"'><img src='"+val[1]+"' /></li>").appendTo("ul#showimg")	;
					});
					var img = $(".imgbox ul#showimg li").length;
					$("ul#showimg li").css({"width":bomw});
					$(".imgbox ul#showimg").width(img*bomw);
					ect()
				}else if($(".xz_title ul").attr("id")==2){
						$(".imgbox").show();
						$(".black").show();
						var arr1 = [['测试215','img/3.jpg'],['测试216','img/4.jpg'],['测试217','img/5.jpg'],['测试218','img/6.jpg']];
						$.each(arr1,function(i,val){
							$("<li id='"+val[0]+"' class='"+i+"'><img src='"+val[1]+"' /></li>").appendTo("ul#showimg")	;
						});
						var img = $(".imgbox ul#showimg li").length;
						$("ul#showimg li").css({"width":bomw});
						$(".imgbox ul#showimg").width(img*bomw);
						ect()
					}else if($(".xz_title ul").attr("id")==3){
						$(".imgbox").show();
						$(".black").show();
						var arr1 = [['测试315','img/10.jpg'],['测试316','img/6.jpg'],['测试317','img/12.jpg'],['测试318','img/8.jpg']];
						$.each(arr1,function(i,val){
							$("<li id='"+val[0]+"' class='"+i+"'><img src='"+val[1]+"' /></li>").appendTo("ul#showimg")	;
						});
						var img = $(".imgbox ul#showimg li").length;
						$("ul#showimg li").css({"width":bomw});
						$(".imgbox ul#showimg").width(img*bomw);
						ect()
					}
			}
		});
		$(".black").on("tap",function(){
			$(this).hide();
			$(".imgbox").hide();
			$("ul#showimg").empty();
			$("ul.num").empty();	
		})
			function ect(){
				var num = 0;
				btn();
				function btn(){
					$("#showimg li").each(function(index) {
						var item = $("<li id='"+index+"'></li>");
						item.appendTo(".num");
					});	
				}
				var list = $(".num li").length;
				$(".num li").eq(0).css({"background":"url(img/point02.png) no-repeat 0 0"});
				$(".imginfo").text($("#showimg li").eq(0).attr("id"));
				$(".imgbox ul#showimg li img").on("swipeleft",
					function(){
						var img = $(".imgbox ul#showimg li").length;
						var a= $(this).parent().index();
						num = a<img?($(this).parent().index()+1):(img-1);
						if(num==img){num=$(".imgbox ul#showimg li").first().index()}
						var t = num*bomw;
						$(".imgbox ul#showimg").animate({"left":-t});
						$(".num li").eq(num).css({"background":"url(img/point02.png) no-repeat 0 0"}).siblings().css({"background":"url(img/point01.png) no-repeat 0 0"});
						$(".imginfo").text($("#showimg li").eq(num).attr("id"));
						return num;
					}
				);	
				$(".imgbox ul#showimg li img").on("swiperight",
					function(){
						var img = $(".imgbox ul#showimg li").length;
						var a= $(this).parent().index();
						num = a<img-1?($(this).parent().index()-1):($(this).parent().index()-1);
						if(num==-1){num=$(".imgbox ul#showimg li").last().index()}
						var t = num*bomw;
						$(".imgbox ul#showimg").animate({"left":-t});
						$(".num li").eq(num).css({"background":"url(img/point02.png) no-repeat 0 0"}).siblings().css({"background":"url(img/point01.png) no-repeat 0 0"});
						$(".imginfo").text($("#showimg li").eq(num).attr("id"));
						return num;
					}
				);
					$(".num li").on("tap",function(){
						var img = $(".imgbox ul#showimg li").length;
						var a= $(this).index();
						num = a<list-1?($(this).index()):(img-1);
						$(".num li").eq(num).css({"background":"url(img/point02.png) no-repeat 0 0"}).siblings().css({"background":"url(img/point01.png) no-repeat 0 0"});
						var t = num*bomw;
						$(".imgbox ul#showimg").animate({"left":-t});
						$(".imginfo").text($("#showimg li").eq(num).attr("id"));
						return num;
					})
			}
			
	})