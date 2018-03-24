// JavaScript Document
$(function(){
		var item = $("div.item");
		item.find("a").hide();
		item.each(function() {
			$(this).click(function(){
				var num = $(this).index();
				var url = "url(img/00"+num+".png) no-repeat 0 0";
				var lineheight = $(this).attr("id");
				$(this).addClass("show").animate({"top":"33%","left":"21%","width":"296px","height":"303px","line-height":lineheight},function(){$(this).find("a").show()});
				$(this).css({"background":url});
				$(this).siblings().removeClass("show");
				if(num==0){
								item.not(item.eq(0)).each(function() {
									$(this).find("a").hide();
								});
								item.eq(1).animate({"top":"445px","left":"44px","width":"36px","height":"43px"}).css({"background":"url(img/tubiao2_2-2.png) no-repeat 0 0"});
								item.eq(2).animate({"top":"574px","left":"205px","width":"106px","height":"127px"}).css({"background":"url(img/tubiao2_3-2.png) no-repeat 0 0"});
								item.eq(3).animate({"top":"565px","left":"419px","width":"31px","height":"25px"}).css({"background":"url(img/tubiao2_4-2.png) no-repeat 0 0"});
								item.eq(4).animate({"top":"174px","left":"408px","width":"60px","height":"57px"}).css({"background":"url(img/tubiao2_5-2.png) no-repeat 0 0"});
				}else if(num==1){
								item.not(item.eq(1)).each(function() {
									$(this).find("a").hide();
								});
								item.eq(0).animate({"top":"212px","left":"67px","width":"50px","height":"39px"}).css({"background":"url(img/tubiao2_1-2.png) no-repeat 0 0"});
								item.eq(2).animate({"top":"574px","left":"205px","width":"106px","height":"127px"}).css({"background":"url(img/tubiao2_3-2.png) no-repeat 0 0"});
								item.eq(3).animate({"top":"565px","left":"419px","width":"31px","height":"25px"}).css({"background":"url(img/tubiao2_4-2.png) no-repeat 0 0"});
								item.eq(4).animate({"top":"174px","left":"408px","width":"60px","height":"57px"}).css({"background":"url(img/tubiao2_5-2.png) no-repeat 0 0"});
				}else if(num==2){
								item.not(item.eq(2)).each(function() {
									$(this).find("a").hide();
								});
								item.eq(1).animate({"top":"445px","left":"44px","width":"36px","height":"43px"}).css({"background":"url(img/tubiao2_2-2.png) no-repeat 0 0"});
								item.eq(0).animate({"top":"212px","left":"67px","width":"50px","height":"39px"}).css({"background":"url(img/tubiao2_1-2.png) no-repeat 0 0"});
								item.eq(3).animate({"top":"565px","left":"419px","width":"31px","height":"25px"}).css({"background":"url(img/tubiao2_4-2.png) no-repeat 0 0"});
								item.eq(4).animate({"top":"174px","left":"408px","width":"60px","height":"57px"}).css({"background":"url(img/tubiao2_5-2.png) no-repeat 0 0"});

				}else if(num==3){
								item.not(item.eq(3)).each(function() {
									$(this).find("a").hide();
								});
								item.eq(1).animate({"top":"445px","left":"44px","width":"36px","height":"43px"}).css({"background":"url(img/tubiao2_2-2.png) no-repeat 0 0"});
								item.eq(2).animate({"top":"574px","left":"205px","width":"106px","height":"127px"}).css({"background":"url(img/tubiao2_3-2.png) no-repeat 0 0"});
								item.eq(0).animate({"top":"212px","left":"67px","width":"50px","height":"39px"}).css({"background":"url(img/tubiao2_1-2.png) no-repeat 0 0"});
								item.eq(4).animate({"top":"174px","left":"408px","width":"60px","height":"57px"}).css({"background":"url(img/tubiao2_5-2.png) no-repeat 0 0"});
				}else if(num==4){
								item.not(item.eq(4)).each(function() {
									$(this).find("a").hide();
								});
								item.eq(1).animate({"top":"445px","left":"44px","width":"36px","height":"43px"}).css({"background":"url(img/tubiao2_2-2.png) no-repeat 0 0"});
								item.eq(2).animate({"top":"574px","left":"205px","width":"106px","height":"127px"}).css({"background":"url(img/tubiao2_3-2.png) no-repeat 0 0"});
								item.eq(3).animate({"top":"565px","left":"419px","width":"31px","height":"25px"}).css({"background":"url(img/tubiao2_4-2.png) no-repeat 0 0"});
								item.eq(0).animate({"top":"212px","left":"67px","width":"50px","height":"39px"}).css({"background":"url(img/tubiao2_1-2.png) no-repeat 0 0"});
						}
				})
				item.eq(0).trigger("click");
		});
	})