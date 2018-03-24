// JavaScript Document
//广告位图片滚动效果
(function(a){a.fn.maiPlayer=function(c){var b={oPlay:null,speedSwitch:3000,speedAnimate:500,showPage:0,playerWidth:0,autoPlay:true,flipButton:true,pageButton:true,playerBg:true,numPage:false,imageTitle:false,imageContent:false,switchActionAuto:"roll",switchActionPage:"opacity",switchActionFlip:"roll",textDisplay:0,textSpeed:500};var c=a.extend(b,c);this.each(function(){var p=a(this);var n="";var h=0;var i=0;var j=null;var d=[];a(p).find("li img").parents("ul").addClass("ul-img").css("position","relative");h=a(p).find(".ul-img li").length;if(c.playerWidth){i=c.playerWidth;a(p).css("width",i+"px");a(p).find(".ul-img li").css("width",i+"px");a(p).find("img").css("width",i+"px");a(p).find(".bg:first").css("width",i+"px")}else{i=a(p).find(".ul-img li:first").width()}if(c.playerHeight){iHeight=c.playerHeight;a(p).css("height",iHeight+"px");a(p).find(".ul-img").css("height",iHeight+"px");a(p).find(".ul-img li").css("height",iHeight+"px");a(p).find("img").css("height",iHeight+"px")}a(p).find(".ul-img li").each(function(){var q=a(p).find(".ul-img li").index(this);d[q]=a(p).find(".ul-img img").eq(q).attr("title");a(p).find(".ul-img img").eq(q).removeAttr("title")});if(c.imageTitle||c.imageContent){var k=a('<ul class="ul-text"></ul>');a(k).insertAfter(a(p).find(".ul-img"));a(p).find(".ul-img li").each(function(){var s=a("<li></li>");var q=a(p).find(".ul-img li").index(this);if(c.imageTitle){var t=a("<h2></h2>");a(t).text(d[q]);a(s).append(t)}if(c.imageContent){var r=a("<p></p>");var u=a(p).find(".ul-img img").eq(q).attr("alt");a(r).text(u);a(s).append(r)}a(k).append(s)});a(p).find(".ul-text").width(i*h);a(p).find(".ul-text").height(a(p).find(".bg:first").height())}a(p).find(".ul-img").width(i*h);if(c.flipButton){a(p).find(".next:first").click(function(){if(c.switchActionFlip=="roll"){l(a(p).find(".ul-img"),1);if(c.imageTitle||c.imageContent){l(a(p).find(".ul-text"),0)}}else{if(c.switchActionFlip=="opacity"){if(c.showPage==h-1){c.showPage=0}else{c.showPage++}f(a(p).find(".ul-img"),c.showPage);f(a(p).find(".ul-text"),c.showPage);e(a(p).find(".num span").eq(c.showPage),"on")}}});a(p).find(".prev:first").click(function(){if(c.switchActionFlip=="roll"){l(a(p).find(".ul-img"),-1);if(c.imageTitle||c.imageContent){l(a(p).find(".ul-text"),0)}}else{if(c.switchActionFlip=="opacity"){if(c.showPage==0){c.showPage=h-1}else{c.showPage--}f(a(p).find(".ul-img"),c.showPage);f(a(p).find(".ul-text"),c.showPage);e(a(p).find(".num span").eq(c.showPage),"on")}}})}else{a(p).find(".next:first").css("display","none");a(p).find(".prev:first").css("display","none")}if(c.showPage){a(p).find(".ul-img").css("left",-i*c.showPage+"px");a(p).find(".ul-text").css("left",-i*c.showPage+"px")}if(c.pageButton){n="";a(p).find(".ul-img li").each(function(){n+="<span></span>"});a(p).find(".num:first").html(n);a(p).find(".num span:first").addClass("on");e(a(p).find(".num span").eq(c.showPage),"on");a(p).find(".num span").click(function(){var q=a(p).find(".num span").index(this);if(c.switchActionPage=="roll"){c.showPage=0;l(a(p).find(".ul-img"),q);l(a(p).find(".ul-text"),0)}else{if(c.switchActionPage=="opacity"){c.showPage=q;f(a(p).find(".ul-img"),c.showPage);f(a(p).find(".ul-text"),c.showPage);e(a(p).find(".num span").eq(c.showPage),"on")}}if(c.numPage){a(this).text(a(p).find(".num span").index(this)+1)}})}if(!c.playerBg){a(p).find(".bg:first").css("display","none")}function l(r,q){if(r.is(":animated")==false){c.showPage+=q;if(c.showPage!=-1&&c.showPage!=h){r.animate({left:-c.showPage*i+"px"},c.speedAnimate)}else{if(c.showPage==-1){c.showPage=h-1;r.css({left:-(i*(c.showPage-1))+"px"});r.animate({left:-(i*c.showPage)+"px"},c.speedAnimate)}else{if(c.showPage==c.showPage){c.showPage=0;r.css({left:-i+"px"});r.animate({left:0+"px"},c.speedAnimate)}}}e(a(p).find(".num span").eq(c.showPage),"on")}}function f(s,r){var q=(s.css("left")!=-r*i+"px");if(q){s.fadeOut(20,function(){s.css("left",-r*i+"px");s.fadeIn(500)})}}function m(){j=setInterval(function(){if(c.switchActionAuto=="roll"){l(a(p).find(".ul-img"),1)}else{if(c.switchActionAuto=="opacity"){c.showPage++;if(c.showPage==h){c.showPage=0}f(a(p).find(".ul-img"),c.showPage);e(a(p).find(".num span").eq(c.showPage),"on")}}if(c.imageTitle||c.imageContent){l(a(p).find(".ul-text"),0)}},c.speedSwitch)}function o(){if(j){clearInterval(j)}}a(p).hover(function(){o();if(c.textDisplay==1){a(p).find(".bg:first").slideUp(c.textSpeed);a(p).find(".ul-text:first").slideUp(c.textSpeed)}else{if(c.textDisplay==2){a(p).find(".bg:first").slideDown(c.textSpeed);a(p).find(".ul-text:first").slideDown(c.textSpeed)}}},function(){if(c.autoPlay){m()}if(c.textDisplay==1){a(p).find(".bg:first").slideDown(c.textSpeed);a(p).find(".ul-text:first").slideDown(c.textSpeed)}else{if(c.textDisplay==2){a(p).find(".bg:first").slideUp(c.textSpeed);a(p).find(".ul-text:first").slideUp(c.textSpeed)}}});if(c.autoPlay){m()}function g(q,r){}function e(r,q){r=a(r)?a(r):r;r.addClass(q).siblings().removeClass(q)}})}})(jQuery);

//导航条hover效果
var curSelectNav,selectNav;
function commonNavSelect(o){
	if(!$('#Cnav-one i').width()){
		curSelectNav = o;
		$('#Cnav-one i').css({'width':o.outerWidth(),'left':o.position().left});
	}else{
		$('#Cnav-one i').stop().animate({'width':o.outerWidth(),'left':o.position().left},200);
	}
}

$('#Cnav-one > a').hover(function(){
	selectNav = selectNav || curSelectNav || 1;
	commonNavSelect($(this));
},function(){
	commonNavSelect(curSelectNav);
});


$('#Cnav-one .fxbNav').hover(function(){
	$('#Cnav-one i').hide();
	if($(this).find('a').length == 1){
		if($("#navInStar textarea").length){
			$("#navInStar").html($("#navInStar textarea").val());
			$("#navInStar dt a").each(function(i){
				$(this).prepend('<b style="background-position:0 -'+ i*40 +'px;"></b>');
			});
		}
		$(this).addClass('fxbNavHs');
		$("#navInStar").css('left',$(this).position().left - ($('#webn1').outerWidth() + $('#webn2').outerWidth())).stop().css('height','').slideDown(100);
	}else{
		$(this).css('left',$(this).position().left).addClass('fxbNavH').prev('a').css('margin-right','105px');
		$(this).stop().animate({'height':6 + $(this).find('a').length * 26},100);
	}
},function(){
	$('#Cnav-one i').show();
	if($(this).find('a').length == 1){
		$("#navInStar").stop().slideUp(100,function(){$(this).prev().removeClass('fxbNavHs')});
	}else{
		$(this).hasClass('fxbNavH') && $(this).stop().animate({'height':'32px'},100,function(){$(this).removeClass('fxbNavH').css('position','absolute')});
	}
});

	$("#navInStar").hover(function(){$(this).stop().animate({'height':402},80);$('#Cnav-one i').hide();},function(){$('#Cnav-one i').show();$("#navInStar").stop().slideUp(100,function(){$(this).prev().removeClass('fxbNavHs')})});


$('#Cnav-one').mouseleave(function(){
	if(selectNav == 1) $('#Cnav-one i').stop().css({'width':0});
});

countDown:function(t,c,fn){
		function nd(d){return isNaN(d) ? (d ? new Date(d).getTime() : new Date().getTime()) : d * 1000;}
		var e = [nd(t[0]),nd(t[1]),nd(t[2])],_s = this,b;
		if(t[0] && e[0] > e[1]){
			$(_s).html(c[1]);return;
		}else if(e[1] > e[2]){
			fn && fn($(_s));
			$(_s).html(c[2]);return;
		}
		(b = function (s){
			if (s <= 0){fn && fn($(_s));$(_s).html(c[2]);return};
			var s = s || (e[2] - e[1]) / 1000,
			ms = {D:s/3600/24,H:s/3600%24,M:s/60%60,S:s%60};
			$(_s).html(c[0].replace(/D|H|M|S/g,function(a){return parseInt(ms[a])}));
			setTimeout(function(){b(s-1)},1000);
		})()
	}
//});


$.extend({
	/*
	 * 选项卡
	 * $.tabCont(btn,cont,cls,evt,fn)
	 * @btn jq要抓取的按钮dom
	 * @cont jq要抓取的内容dom
	 * @cls 按钮选中的class
	 * @evt 事件
	 * @fn 切换后执行的function扩展，可为空
	 * */
	tabCont:function(btn,cont,cls,evt,fn){
				$(btn).each(function(i){
					$(this).bind(evt,function(){
						$(this).addClass(cls).siblings().removeClass(cls);
						$(cont).eq(i).show().siblings(cont).hide();
						fn && fn(i,this);
						return false;
					});
				});
			},
	/*
	 * 加入收藏
	 * $.addFavorite(o,title,url)
	 * $o  jq对象，抓取的按钮节点，可为多个
	 * @title 标题 可为空
	 * @url 地址 可为空
	 * */
		addFavorite:function(o,title,url){
						var title = title || $('title').text(),url = url || location.href;
						o.click(function(){
							if (window.sidebar) {
								window.sidebar.addPanel(title, url, "");
							} else if (document.all) {
								window.external.AddFavorite(url, title);
							} else{
								alert("\u8BF7\u4F7F\u7528Ctrl+D\u52A0\u5165\u6536\u85CF");
							}
							return false;
						});
					},
		/*
		 * 图片懒加载-优化IE6
		 * $.imgLoad(o)
		 * @o jq要抓取的图片节点 可为空
		 * */
		imgLoad:function(o){// imgload
					var _s = o || 'img',n = n || 0,h = function(){var d=document,y=(navigator.userAgent.toLowerCase().match(/iPad/i)=="ipad")?window.pageYOffset:Math.max(d.documentElement.scrollTop,d.body.scrollTop);return d.documentElement.clientHeight+y-n;},tim,_time = 0,
					l = function(){
						var hg = h();
						$(_s).each(function(){
							var _s2 = $(this).attr('src2'),t = $(this).offset().top;
							if(_s2 && t < hg && t > hg - 1000){$(this).attr("src",_s2).removeAttr('src2')};
						})};
						l();
						if(!!window.ActiveXObject && !window.XMLHttpRequest){_time = 600}
						$(window).scroll(function(){
							clearTimeout(tim);
							tim = setTimeout(function(){l()},_time);
						});
				},	
		/*
		 * 目标跟随浏览器浮动
		 * $.scrollFloat(o)
		 * $o jq对象，抓取的目标节点
		 * */
		scrollFloat:function(o){
						if (o.length == 0){return}
						var s = false,
							_orderTop = o.offset().top;
						$(window).scroll(function(){
							var nu = $(this).scrollTop();
							if(nu > _orderTop){o.css({'top':nu-_orderTop});s = true;}
							if(s && nu <= _orderTop){o.css({'top':0});s = false;}
						});
					},	
		/*
		 * 宽窄切换
		 * $.widthReset(function(){},function(){})
		 * （窄,宽）回调fn
		 * */
		widthReset:function(s,b,t){
					   if(typeof(resetW) != 'undefined'){
							var w = resetW;
					   }else{
							var w = $(window).width();
					   }
					   w < 1250 ? s() : b();
					   !t && $(window).resize(function(){$.widthReset(s,b,true)});
				   }


});

//南北特产商品滚动
(function($) {                                          // Compliant with jquery.noConflict()
$.fn.jCarouselLite = function(o) {
    o = $.extend({
        btnPrev: null,
        btnNext: null,
        btnGo: null,
        mouseWheel: false,
        auto: null,

        speed: 200,
        easing: null,

        vertical: false,
        circular: true,
        visible: 6,
        start: 0,
        scroll: 1,

        beforeStart: null,
        afterEnd: null
    }, o || {});

    return this.each(function() {                           // Returns the element collection. Chainable.

        var running = false, animCss=o.vertical?"top":"left", sizeCss=o.vertical?"height":"width";
        var div = $(this), ul = $("ul", div), tLi = $("li", ul), tl = tLi.size(), v = o.visible;

        if(o.circular) {
            ul.prepend(tLi.slice(tl-v-1+1).clone())
              .append(tLi.slice(0,v).clone());
            o.start += v;
        }

        var li = $("li", ul), itemLength = li.size(), curr = o.start;
        div.css("visibility", "visible");

        li.css({overflow: "hidden", float: o.vertical ? "none" : "left"});
        ul.css({margin: "0", padding: "0", position: "relative", "list-style-type": "none", "z-index": "1"});
        div.css({overflow: "hidden", position: "relative", "z-index": "2", left: "0px"});

        var liSize = o.vertical ? height(li) : width(li);   // Full li size(incl margin)-Used for animation
        var ulSize = liSize * itemLength;                   // size of full ul(total length, not just for the visible items)
        var divSize = liSize * v;  //1093                         // size of entire div(total length for just the visible items)

        li.css({width: li.width(), height: li.height()});
        ul.css(sizeCss, ulSize+"px").css(animCss, -(curr*liSize));

        div.css(sizeCss, divSize+"px");                     // Width of the DIV. length of visible images

        if(o.btnPrev)
            $(o.btnPrev).click(function() {
                return go(curr-o.scroll);
            });

        if(o.btnNext)
            $(o.btnNext).click(function() {
                return go(curr+o.scroll);
            });

        if(o.btnGo)
            $.each(o.btnGo, function(i, val) {
                $(val).click(function() {
                    return go(o.circular ? o.visible+i : i);
                });
            });

        if(o.mouseWheel && div.mousewheel)
            div.mousewheel(function(e, d) {
                return d>0 ? go(curr-o.scroll) : go(curr+o.scroll);
            });

        if(o.auto)
            setInterval(function() {
                go(curr+o.scroll);
            }, o.auto+o.speed);

        function vis() {
            return li.slice(curr).slice(0,v);
        };

        function go(to) {
            if(!running) {

                if(o.beforeStart)
                    o.beforeStart.call(this, vis());

                if(o.circular) {            // If circular we are in first or last, then goto the other end
                    if(to<=o.start-v-1) {           // If first, then goto last
                        ul.css(animCss, -((itemLength-(v*2))*liSize)+"px");
                        // If "scroll" > 1, then the "to" might not be equal to the condition; it can be lesser depending on the number of elements.
                        curr = to==o.start-v-1 ? itemLength-(v*2)-1 : itemLength-(v*2)-o.scroll;
                    } else if(to>=itemLength-v+1) { // If last, then goto first
                        ul.css(animCss, -( (v) * liSize ) + "px" );
                        // If "scroll" > 1, then the "to" might not be equal to the condition; it can be greater depending on the number of elements.
                        curr = to==itemLength-v+1 ? v+1 : v+o.scroll;
                    } else curr = to;
                } else {                    // If non-circular and to points to first or last, we just return.
                    if(to<0 || to>itemLength-v) return;
                    else curr = to;
                }                           // If neither overrides it, the curr will still be "to" and we can proceed.

                running = true;

                ul.animate(
                    animCss == "left" ? { left: -(curr*liSize) } : { top: -(curr*liSize) } , o.speed, o.easing,
                    function() {
                        if(o.afterEnd)
                            o.afterEnd.call(this, vis());
                        running = false;
                    }
                );
                // Disable buttons when the carousel reaches the last/first, and enable when not
                if(!o.circular) {
                    $(o.btnPrev + "," + o.btnNext).removeClass("disabled");
                    $( (curr-o.scroll<0 && o.btnPrev)
                        ||
                       (curr+o.scroll > itemLength-v && o.btnNext)
                        ||
                       []
                     ).addClass("disabled");
                }

            }
            return false;
        };
    });
};

function css(el, prop) {
    return parseInt($.css(el[0], prop)) || 0;
};
function width(el) {
    return  el[0].offsetWidth + css(el, 'marginLeft') + css(el, 'marginRight');
};
function height(el) {
    return el[0].offsetHeight + css(el, 'marginTop') + css(el, 'marginBottom');
};

})(jQuery);