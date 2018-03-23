String.prototype.ltrim = function(){
	return this.replace(/(^\s*)/g, "");
}

function getCookie(b) {
	var a = document.cookie.match(new RegExp("(^| )" + b + "=([^;]*)(;|$)"));
	if (a != null) {
		return unescape(a[2]);
	}
	return null;
}
function getlogCookie(name) {
	var start = document.cookie.indexOf( name + "=" );
	var len = start + name.length + 1;
	if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) {
		return null;
	}
	if ( start == -1 ) return null;
	var end = document.cookie.indexOf( ';', len );
	if ( end == -1 ) end = document.cookie.length;
	return decodeURIComponent( document.cookie.substring( len, end ) );
}
function setCookie( name, value, expires, path, domain, secure ){
	var today = new Date();
	today.setTime( today.getTime() );
	if ( expires ) {
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires) );
	document.cookie = name+'='+escape( value ) +
		( ( expires ) ? ';expires='+expires_date.toGMTString() : '' ) + //expires.toGMTString()
		( ( path ) ? ';path=' + path : ';path=/' ) +
		( ( domain ) ? ';domain=' + domain : '' ) +
		( ( secure ) ? ';secure' : '' );
}
function getLogin(){
	var login="__TRANSIENT";
	var LongTimeValuesCookies=getlogCookie("LongTimeValuesCookies");
	if(LongTimeValuesCookies!=null && LongTimeValuesCookies!=""){
		var arrStr = LongTimeValuesCookies.split("#");
		for(var i=0;i<arrStr.length;i++){
			var co = arrStr[i].split("$");
			if(co[0]=="__LOGIN__VIEWINFO__"){
				if("invalid"!=co[1]){
					login=co[1];
					break;
				}
			}
			if(co[0]=="__LOGIN")
			{
				login=co[1];
				break;
			}
		}
	}
	return login; 
}
function getuserId(){
	var userId="__TRANSIENT";
	var LongTimeValuesCookies=getlogCookie("LongTimeValuesCookies");
	if(LongTimeValuesCookies!=null && LongTimeValuesCookies!=""){
		var arrStr = LongTimeValuesCookies.split("#");
		for(var i=0;i<arrStr.length;i++){
			var co = arrStr[i].split("$");
			if(co[0]=="__user_id_login_2009"){
				if("invalid"!=co[1]){
					userId=co[1];
					break;
				}
			}
		}
	}
	return userId; 
}
function loadUser(obj){
	var islogin=getLogin();
	var str = "";
	if(islogin != null && islogin != "__TRANSIENT" && islogin != ""){
		str = "小蜜蜂欢迎您，<b>" + islogin + "</b>！<a href=\"###\" onclick=\"logout();return false;\">退出登录</a>";
	}else{
		str = "欢迎来乐蜂，请&nbsp;<a href=\"###\" onclick=\"loginreg('login')\">登录</a>&nbsp;<a href=\"###\" onclick=\"loginreg('reg')\">注册</a>";
	}
	$("#"+obj).html(str);
}



function bbslogout(){
	var IframeObj = document.createElement("iframe");
	IframeObj.style.display = "none";
	document.body.appendChild(IframeObj);
	IframeObj.contentWindow.location.href ='http://space.lefeng.com/sso.do?act=shoplogout';
}

function logout(){
$.getJSON("http://shopping.lefeng.com/cart/destroy_cloud_cart.jsp?callback=?"); //云端购物车增加
	var today = new Date();
	today.setTime( today.getTime() );
	var expires = 1000 * 60;
	var expires_date = new Date( today.getTime() - (expires) );
	document.cookie = 'LongTimeValuesCookies=;expires='+expires_date.toGMTString()+';path=/'+
		';domain=lefeng.com;secure';	
	$("#Cheadlogin").html("欢迎来到乐蜂，请&nbsp;<a href=\"###\" onclick=\"loginreg('login')\">登录</a>&nbsp;<a href=\"###\" onclick=\"loginreg('reg')\">注册</a>");
	$('#Chead-tip').remove();
	setTimeout("jump('http://www.lefeng.com/index.html')", 10000);
}
function loginreg(str){
	var returnback=encodeURIComponent(window.location.href);
	if("login"==str){
		var nowhref=window.location.href;
		if(nowhref.indexOf("login.jsp")!=-1){
			window.location.href='https://passport.lefeng.com/login.jsp';
		}else{
			window.location.href='https://passport.lefeng.com/login.jsp?returnback='+returnback.replace('###','');
		}
	}
	if("reg"==str){
		window.location.href='https://passport.lefeng.com/register.jsp?returnback='+returnback.replace('###','');
	}
}


//shopping show
var cartCount = 0;
var cartItems = new Array();//cartItems['id'] = num||amount||name||pid||id(if null then 0)||imgurl
function fillCart(){
	cartCount = getlogCookie("__cart_count__");
	cartCount = cartCount == null ? 0 : cartCount;
	$("#cartbuy").html(cartCount);
}


function pfillCartContent(json){
	var cartContent = "";
	var jc = json.newitems;
	for(var i = 0;i < jc.length;i++){
		if(jc[i] == 'undefined') continue;
		var c = jc[i].quantity;  //数量
		if(isNaN(Number(c))) continue;
		var a = Number(jc[i].price).toFixed(2); //价钱
		if(isNaN(Number(a))) continue;
		var skuname = jc[i].productName;  //名称
		var plink = jc[i].productId;
		var itemId = jc[i].itemId;
		if(itemId == 0) continue;
		var pimg = jc[i].imageUrl;
		var purl = "http://www.lefeng.com/product/" + plink + ".html";

		cartContent += "<dl>";
		cartContent += "<dt><a href=\"" + purl + "?WT.ct=link&WT.s_pg=recart\" target=\"_blank\" title=\"" + skuname + "\"><img src=\"" + pimg + "\" /></a></dt>";
		cartContent += "<dd class=\"shopping-pro\"><a href=\"" + purl  + "?WT.ct=link&WT.s_pg=recart\" target=\"_blank\">" + skuname + "</a></dd>";
		cartContent += "<dd class=\"shopping-price\">￥" + a + "×" + c;
		if(itemId != 0){
			cartContent += "<a href=\"###\" onclick=\"delCartItem('"+itemId+"',-1);\">删除</a>";
		}
		cartContent += "</dd>";
		cartContent += "</dl>";
	}
	cartContent += "<div class='shopping-page' id='shopping-page'><b></b><b></b></div>";
	cartContent += "<p>共<b>" + json.totalCommonCartItem + "</b>件商品&#12288;&#12288;金额总计：<em>￥" + json.totalPrice + "</em></p>";
	cartContent += "<a class=\"goshopping\" href=\"http://shopping.lefeng.com/cart/cart.jsp\">去购物车结算</a>";
	$("div.shopping-list").html(cartContent);
	initShopping(); //翻页
	//loadcontrolTB();
}

function fillCartContent(){
	fillCart();
	if(cartCount > 0){
		$.getJSON(
				"http://shopping.lefeng.com/cart/loadItems.jsp?callback=?",
				{pid:0},
				function(json){
					pfillCartContent(json);
				});
	}else{
		var t = "<div>您的购物车中暂无商品，赶快选择心爱的商品吧！</div>"
			$("div.shopping-list").html(t);
	}
}
function delCartItem(itemId){
	$.getJSON(
			"http://shopping.lefeng.com/cart/delrq.jsp?callback=?",
			{item_id:itemId},
			function(json){
				shoppingPage();
				fillCartContent();
			});
}


function jumpToSearchProduct(o){
	var keyword = o || $("#search");
	var keywordvalue = $.trim(keyword.val());
	if(keywordvalue == null || keywordvalue == "" || keywordvalue == '请输入搜索内容'){
		alert("请输入搜索关键字吧~~(*^__^*)");
		keyword.focus();
	}else{
		var keyword_utf8 = encodeURIComponent(keywordvalue);
		try{
			_gaq.push(['_trackEvent', 'search', 'header', keywordvalue]);
		}catch(e){};
		window.location.href= "http://search.lefeng.com/search/search?key=" + keyword_utf8+"&wt.s_pg=Isearch&wt.s_pf=public";
	}      
}





//表示当前高亮的节点
var highlightindex = -1;
var timeOutId;
var Chinavalue = '';

$(document).ready(function() {
	//Changeword();

	var wordInput = $("#search");
	var wordInputOffset = wordInput.offset();
	//自动补全框最开始应该隐藏起来
	if(wordInputOffset!=null && wordInputOffset!="undefind"){
		$("#auto").hide().css("border","1px #666 solid").css("position","absolute")
	.width(287).css("background","#fff").css("padding","5px 0px").css("z-index","9999");
	}
	$(document).click(function(e){ 
		if($(e.target).attr('id') != 'search'){
			$("#auto").hide();
		}else if($('#search').val() == ''){
			$.getJSON('http://sproxy.lefeng.com/proxy/keyword?st=6&callback=?',function(data){
				searchInfo(data,$("#auto"),'tj');
			});
		}
	});//单击空白区域隐藏

	//给文本框添加键盘按下并弹起的事件
	wordInput.keyup(function(event){
		//处理文本框中的键盘事件
		var myEvent = event || window.event;
		var keyCode = myEvent.keyCode;
		//alert("keyCode "+keyCode);
		//如果输入的是字母，应该将文本框中最新的信息发送给服务器
		//如果输入的是退格键或删除键，也应该将文本框中的最新信息发送给服务器
		//var china = /^[\u4e00-\u9fa5]+jQuery/i;
		//var isChina = false; 
		//if (china.test(keyCode))isChina=true;
		//isChina || keyCode >= 65 && keyCode <= 90 || 
		// alert(keyCode);
		if (keyCode >= 65 && keyCode <= 90 || keyCode == 8 || keyCode == 16 || keyCode == 46|| keyCode== 32 || keyCode >=48 && keyCode <= 57){
			//1.首先获取文本框中的内容
			var autoNode = $("#auto");
			var wordText = $("#search").val();
			if(wordText != ""){
				if(keyCode == 8&&wordText==""){
					return;
				}
				//如果是汉字的话进行编码后再发啦
				wordText = encodeURIComponent(wordText);
				//2.将文本框中的内容发送给服务器段
				clearTimeout(timeOutId);
				//延时处理
				timeOutId = setTimeout(function(){
					// alert("wordText :"+wordText);
					var url = "http://sproxy.lefeng.com/proxy/keyword?callback=?";
					jQuery.getJSON(url,{q:wordText,r:10},function(data){
						searchInfo(data,autoNode);
					});
				},60);
			}else{			
				$.getJSON('http://sproxy.lefeng.com/proxy/keyword?st=6&callback=?',function(data){
					searchInfo(data,$("#auto"),'tj');
				});
			}
		} else if (keyCode == 38 || keyCode == 40) {
			//如果输入的是向上38向下40按键
			if (keyCode == 38) {
				//向上
				var autoNodes = $("#auto").children('[id!=""]');
					if (highlightindex != -1) {
						//如果原来存在高亮节点，则将背景色改称白色
						autoNodes.eq(highlightindex).css("background-color","white");
						highlightindex--;
					} else {
						highlightindex = autoNodes.length - 1;    
					}
				if (highlightindex == -1) {
					//如果修改索引值以后index变成-1，则将索引值指向最后一个元素
					highlightindex = autoNodes.length - 1;
				}
				//让现在高亮的内容变成红色
				autoNodes.eq(highlightindex).css("background-color","#ffe899");
			}
			if (keyCode == 40) {
				//向下
				var autoNodes = $("#auto").children('[id!=""]');
					if (highlightindex != -1) {
						//如果原来存在高亮节点，则将背景色改称白色
						autoNodes.eq(highlightindex).css("background-color","white");
					}
				highlightindex++;
				if (highlightindex == autoNodes.length) {
					//如果修改索引值以后index变成-1，则将索引值指向最后一个元素
					highlightindex = 0;
				}
				//让现在高亮的内容变成红色
				autoNodes.eq(highlightindex).css("background-color","#ffe899");
			}
			//落到分类搜索上不改变内容
			if($("#auto").children('[id!=""]').eq(highlightindex)[0].tagName == 'A'){
				$("#search").val($("#auto").children('[id!=""]').eq(0).find('li:first').text());
				return false;
			}
			var comText = $("#auto").children('[id!=""]').eq(highlightindex).find('li:first').text();
			//var txKey = comText.split(" ");
			$("#search").val(comText);
		} else if (keyCode == 13){
			//如果输入的是回车
			//下拉框有高亮内容
			if (highlightindex != -1) {
				//取出高亮节点的文本内容				
				if($("#auto").children('[id!=""]').eq(highlightindex)[0].tagName == 'A'){
					location.href=$("#auto").children('[id!=""]').eq(highlightindex).attr('href');
					return false;
				}
				var comText = $("#auto").hide().children('[id!=""]').eq(highlightindex).find('li:first').text();
				highlightindex = -1;
				//文本框中的内容变成高亮节点的内容
				//var txKey = comText.split(" ");
				$("#search").val(comText);
			} else {
				//下拉框没有高亮内容
				//alert("文本框中的[" + $("#word").val() + "]被提交了");
				$("#auto").hide();
				//$("#search").get(0).blur();
			}
		}else if(keyCode == 9){
			//tab键取消显示的提示框
			//alert("tab");
			$("#auto").hide();
		}else if(keyCode == 27){
			//esc键.隐藏提示框，且将输入框置为空
			$("#search").val();
			$("#auto").hide();
		}else if(keyCode == 37){
		}else if(keyCode == 39){
		}else{
			$("#auto").hide();
		}  
	});
});


function searchInfo(data,autoNode,t){
	if(data!=null && data.length>0){
		//遍历所有的word节点，取出单词内容，然后将单词内容添加到弹出框中
		//需要清空原来的内容
		if(t == 'tj'){
			autoNode.html('<strong style="padding:0 6px;line-height:22px;color:#999;">蜂友最爱搜</strong>');
		}else{
			autoNode.html("");
		}
		var i=0;
		jQuery.each(data,function(idx,item){
			var newDivNode = $("<div style='width:275px;padding: 0 6px;float:left;overflow:hidden;line-height:28px;color:#000;cursor:pointer;'>").attr("id",'searchLi' + i);
			var namev = item.name;
			var numv = item.num;
			newDivNode.html("<ul style='list-style:none;'><li style='float:left;'>"+namev+"</li><li style='float:right;text-align:right;color:#999'>约<span style='color:#f00;'>"+numv+"</span>件商品</li></ul>").appendTo(autoNode);
			if(!t && i == 0 && item.categories){
				var clsInfo = '';
				for(var cls in item.categories){
					clsInfo += '<a style="padding:0 6px;line-height:28px;display:block;color:#666;" href="http://search.lefeng.com/search/search?key='+ namev +'&c='+  item.categories[cls].ids +'" id="searchCls'+ cls +'"><span style="float:right;color:#999;">约<b style="color:#f00;">'+ item.categories[cls].quantity +'</b>件商品</span>在<b style="color:#f00">'+ item.categories[cls].name +'</b>分类中搜索</a>';
				}
				item.categories[0].ids != 0 && autoNode.append(clsInfo + '<div style="margin:6px;height:1px;background:#e1e1e1;overflow:hidden;"></div>');
				autoNode.find('a').hover(function(){$(this).css({"background-color":"#eee","text-decoration":"none"})},function(){$(this).css("background-color","white")});
			}
			//鼠标滑入则高亮显示节点
			newDivNode.mouseover(function (){
				if(highlightindex!=-1){
					$("#auto").children("div").eq(highlightindex).css("background-color","white");
				}
				highlightindex = $(this).attr("id").replace('searchLi','');
				$(this).css("background-color","#f5f5f5");
			});
			//鼠标划出则取消高亮节点
			newDivNode.mouseout(function (){
				if($(this).css('background-image') != 'none'){
					$(this).css("background-color","#eee");
				}else{
					$(this).css("background-color","white");
				}
			});
			if(item.url){//如果是店铺或品牌
				newDivNode.click(function(){
					open(item.url);
				});
				if(item.flag == 1){
					newDivNode.css({'background':'#eee url(http://img3.imglafaso.com/images/newhome/brand_ico.gif) no-repeat 5px center','text-indent':'25px'});
					newDivNode.find('li:first').text(newDivNode.find('li:first').text() + '旗舰店');
				}else{
					newDivNode.css({'background':'#eee url(http://img3.imglafaso.com/images/newhome/pop_ico.jpg) no-repeat 5px center','text-indent':'25px'});
				}
				newDivNode.attr('id','');
				return true;
			}
			//增加click事件，进行补全处理
			newDivNode.click(function(){
				//取出高亮节点的内容
				var Text = $(this).find('li:first').text();
				$("#auto").hide();
				highlightindex = -1;
				//赋值到输入框中
				$("#search").val(Text);
				$("#search-submit").trigger('click'); //执行搜索
			});
			i++;
		});//遍历结束
		//如果服务器段有数据返回，则显示弹出框
		if (data.length > 0){
			autoNode.show();
		} else {
			autoNode.hide();
			//弹出框隐藏的同时，高亮节点索引值也制成-1
			highlightindex = -1;
		}
	}
}



var initShopping = function(){

	if ($('#Chead-shopping dl').length > 6){
		$('#Chead-shopping').find('dl').hide();
		$('#Chead-shopping dl:lt(6)').show();
		$('#Chead-shopping div.shopping-page b').show().eq(0).css({'opacity':'0.6'});
		ShoppingPageClick();
	}else{
		$('#Chead-shopping').find('dl').show();
		$('#Chead-shopping div.shopping-page b').hide();
	}

}

function ShoppingPageClick(){
	$('#Chead-shopping div.shopping-page b').each(function(i){
		if(i == 0){
			$(this).css('background-position','-136px -176px');
			$(this).click(function(){
				if($(this).css('opacity') != '1'){return false;}
				$('#Chead-shopping dl:visible:first').prev().show();
				$('#Chead-shopping dl:visible:last').hide();
				shoppingPage();
			});
		}else{
			$(this).click(function(){
				if($(this).css('opacity') != '1'){return false;}
				$('#Chead-shopping dl:visible:first').hide();
				$('#Chead-shopping dl:visible:last').next().show();
				shoppingPage();
			});
		}
	});
}

function shoppingPage(){
	if($('#Chead-shopping dl:first').is(':visible')){
		$('#Chead-shopping .shopping-page b:first').css('opacity','0.6');
		$('#Chead-shopping .shopping-page b:last').css('opacity','1');
	}else if($('#Chead-shopping dl:last').is(':visible')){
		$('#Chead-shopping .shopping-page b:last').css('opacity','0.6');
		$('#Chead-shopping .shopping-page b:first').css('opacity','1');
	}else{
		$('#Chead-shopping .shopping-page b:last').css('opacity','1');
		$('#Chead-shopping .shopping-page b:first').css('opacity','1');
	}
}



loadUser('Cheadlogin');  //登录


//nav select
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


//myhome
	$('#Chead-myhome').hover(function(){
		$(this).addClass('Chead-myhome-on');
		$(this).find('a').stop().slideDown(200).css('display','block');
	},function(){
		$(this).find('a').stop().slideUp(200,function(){$(this).removeAttr('style').parent().removeClass('Chead-myhome-on')});
	});


//floatmenu
	$('#Chead-fastnav,#Chead-app').hover(function(){
		if($(this).next().is(':hidden')){
			$(this).next().removeAttr('style').stop().slideDown(200);
		}else if($(this).next().height() > 210){
			$(this).next().stop();
		}
	},function(e){
		$(this).next().stop().slideUp(200);
	});

	$('#Chead-fastnav,#Chead-app').next().hover(function(){
		if($(this).height() > 210) $(this).stop();
	},function(){
		$(this).stop().slideUp(200);
	});

//search
var searchText;
// search input text
(function(){
	var _v = searchText || $('#search').attr('val');
	$('#search').val(_v);
	if(searchText){
		$('#search').focus(function(){$(this).parent().css('background-image','url(http://img7.imglafaso.com/images/newhome/searchFocus.png)');}).blur(function(){$(this).parent().css('background-image','');});
	}else{
		$('#search').focus(function(){$(this).val() == _v && $(this).val('');$(this).parent().css('background-image','url(http://img7.imglafaso.com/images/newhome/searchFocus.png)');}).blur(function(){$(this).val() == '' && $(this).val(_v);$(this).parent().css('background-image','');});
	}
})();

//导航经过
if ($('#float-list dl:visible').length <= 0){
	if(!!window.ActiveXObject && !window.XMLHttpRequest){
		$('#float-list').hover(function(){
			$(this).attr('style','*border-right:2px solid #999;*border-bottom:2px solid #999;').find('dl,.float-list-dnav').show();
			$('#float-list dd').hide().parent().removeAttr('background','');
		},
		function(){
			$(this).find('dl,.float-list-dnav').hide();
			$('#float-list').removeAttr('style');
		});
	}else{
		$('#float-list').hover(function(){
			$(this).attr('style','box-shadow:2px 2px 3px #999;*border-right:2px solid #999;*border-bottom:2px solid #999;').find('dl,.float-list-dnav').stop().removeAttr('style').slideDown(200);
		},
		function(){
			$(this).find('dl,.float-list-dnav').stop().slideUp(200,function(){$('#float-list').removeAttr('style');});
		});
	}
}


//浮层距离计算
var floatListPosition = function(t){
	var _default = [0,-22,-130,-190,-96,-50,-50,-100]
		,_index = t.parent().index() - 1
		,_top = t.offset().top + _default[_index]
		,_height = t.next('dd').outerHeight(true)
		,_sTop = $(window).scrollTop()
		,_wHeight = $(window).height()
		,boxtop;
	if(_top > _sTop && _top + _height < _sTop + _wHeight){boxtop = _default[_index];}
	else if(_top < _sTop){boxtop = Math.min(_default[_index] + (_sTop - _top) + 10,0);}
	else if(_top + _height > _sTop + _wHeight){boxtop = Math.max((_index) * -79 + 20,Math.max(_default[_index] - (_top + _height - _sTop - _wHeight) - 10,-(_height - 79)));}
	return boxtop;
}

//brand animate
function GetRandomNum(Min,Max){   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}

var brandst = true;
function brandShow(){
	setTimeout(function(){brandst= true;},700);
	if (!brandst) return false;
	brandst = false;
	$('#hot-brand-wall a[xy]').each(function(){
		var xy = $(this).attr('xy').split(''),
		x = xy[1] * 192 + ((xy[0] - 1) % 2) * 96 - 160,
		y = xy[0] * 55 - 37;
	!$(this).find('b').length && $(this).append('<b></b><i></i>');
	$(this).css({'top':y * GetRandomNum(3,5) * (GetRandomNum(0,1) || -1),'left':x * GetRandomNum(3,5) * (GetRandomNum(0,1) || -1),'opacity':0}).show().animate({'top':y,'left':x,'opacity':1},500,function(){brandHoverShow = true});
	});
}

function brandHover(){
	$('#hot-brand-wall a[xy]').mouseenter(function(){
		clearTimeout(_floatListHin);
		clearTimeout(_floatListHout);
		if(!brandHoverShow) return false;
		$('#hot-brand-show').stop().html('<em>' + $(this).attr('tit') +'</em>').attr('href',$(this).attr('href')).show().css({'top':$(this).css('top'),'left':$(this).css('left').replace('px','')*1 - 31,'opacity':(!-[1,]?1:0)}).animate({'opacity':1},300);
		return false;
	});
	$('#hot-brand-show').mouseleave(function(){$(this).hide()});
}

//floatList ico
$('#float-list dl strong').each(function(i){
	$(this).css('background-position','-464px -'+ (18 * i + 62) +'px');
});

var _floatListHin,_floatListHout,_floatListDDout,brandHoverShow = false;
$('#float-list dl dt').hover(
		function(e){
			var _self = this;
			clearTimeout(_floatListHin);
			clearTimeout(_floatListHout);
			clearTimeout(_floatListDDout);
			if($(_self).next().is(':visible')) return false;
			_floatListHin = setTimeout(function(){
				$('#float-list dl').css('background','#fff');
				$('#float-list dl dd').hide();
				brandHoverShow = false;
				if($(_self).next('dd').find('textarea').length){
					$(_self).next('dd').html($(_self).next('dd').find('textarea').text());
					try{DD_belatedPNG.fix('#hot-brand-wall,#float-list .bimg img');					
					}catch(e){}
					if($(_self).next('dd').hasClass('hot-brand-wall')){
						brandHover();
					}
				}
				if($(_self).next('dd').hasClass('hot-brand-wall')){
					brandShow();
				}
				$(_self).parent().css('background-color','#f0f0f0').find('dd').css('top',floatListPosition($(_self))).show();
			},200);
		},
		function(){
			var _self = this;
			_floatListHout = setTimeout(function(){
				$(_self).parent().css('background-color','#fff').find('dd').hide();
				$('#hot-brand-show').hide();
				brandHoverShow = false;
			},200);
		}
);

$('#float-list dl dd').hover(function(){
	clearTimeout(_floatListHin);
	clearTimeout(_floatListHout);
	clearTimeout(_floatListDDout);
},function(e){
	var _self = this;
	if($('#hot-brand-wall').is(':visible') && $(e.target)[0].tagName != 'DD') return false;
	_floatListDDout = setTimeout(function(){
		$(_self).hide().parent().removeAttr('style');
		$('#hot-brand-show').hide();
	},300);
});
$('#float-list dl dd a').delegate('','click',function(){
	$(this).parents('dd').hide().parent().removeAttr('style');
});



$.widthReset(function(){
	$('#Cnav-main,#Chead-main,#Cfooter > *').width(1000);
	$('#Cfooter > dl dd').width(100).last().hide();
	$('#Cfooter .Cfooter-service dl').css('margin','32px 10px 23px');
	$('#floatBtn').css('margin','0 0 0 490px');
	$('#Cnav-one > a,#Cnav-one .fxbNav').removeAttr('style');
	$('#Cnav-one > a').css('padding','0 10px');
	$('#Cnav-one i').width() && $('#Cnav-one i').width(50);
	$('#CnacNew').css('margin-left','-50px');
	$('#sale_10101').show();
	$('#sale_10102').hide();
},function(){
	$('#Cnav-main,#Chead-main,#Cfooter > *').width(1200);
	$('#Cfooter > dl dd').removeAttr('style').last().show();
	$('#Cfooter .Cfooter-service dl,#floatBtn,#Cnav-one > a,#Cnav-one .fxbNav').removeAttr('style');
	$('#CnacNew').css('margin','');
	$('#Cnav-one i').width() && $('#Cnav-one i').width(70);
	$('#sale_10102').show();
	$('#sale_10101').hide();
});



$('#search-submit').parent().next().find('a[style]').each(function(i){
	if(i >= 2){
		$(this).attr('style','')
	}
})


$(window).load(function(){

	//推荐url替换
	$('body').delegate('a', 'mousedown focus',function(){
		$(this).attr('tjurl') && $(this).attr('href',$(this).attr('tjurl'));
	})

	if(!getCookie('CLOUD_CART_MERGED') && getlogCookie("LongTimeValuesCookies")){
		$.getJSON("http://shopping.lefeng.com/cart/init_cloud_cart.jsp?callback=?",function(){ //云端购物车新增
			fillCart();
		});
	}else{
		fillCart();
	}

	//延续以前的JS end

	//全部品牌
	$('body').click(function(e){
		if(!$('#Cnav-brand div:hidden').length && (!$(e.target).parents('#Cnav-brand').length || $(e.target)[0].tagName == 'A')){
			$('#Cnav-brand .Cnav-brand-list').stop().slideUp(200,function(){$(this).prev().removeClass('select')});
		}
	});

	$('#Cnav-brand span').click(function(){
		if($(this).next().is(':hidden')){
			$(this).addClass('select').next().stop().removeAttr('style').slideDown(200);
			$('#Cnav-brand input').trigger('keyup');
		}else{
			$(this).next().stop().slideUp(200,function(){$(this).prev().removeClass('select')});
		}
	});
	//导航搜索框品牌列表
	//$('#Cnav-brand input').keyup(function(){
//		var conT = [],key = $(this).val($(this).val().ltrim()).val();
//		$.getJSON('http://sproxy.lefeng.com/proxy/keyword/brand?callback=?&q=' + encodeURIComponent(key),function(data){
//			for(var i in data.suggestions){
//				conT.push('<a href="' + data.suggestions[i].url + '" target="_blank">' + data.suggestions[i].name + '</a>');
//			}
//			if(!key) conT.push('<a href="###">全部品牌</a>');
//			!conT.length && conT.push('<b>没有找到相关品牌。</b>');
//			$('#Cnav-brand .Cnav-brand-cont').html(conT.join(''));
//			});
//	});

	function loadOrderCoupon(){
		var islogin=getLogin();
		if(islogin != null && islogin != "__TRANSIENT" && islogin != ""){
			var uid = getuserId();
			var url = "http://notice.lefeng.com/fetch.do?callback=?";
			var ordercoupon = getCookie("ordercoupon");
			if(ordercoupon != null && ordercoupon == uid){
				return false;
			}
			$.getJSON(url,{cmd:"get",key:uid},function(data){
				var result = data.result;
				if(result != "0" && result != "0|0"){
					var order = result.split("|")[0];
					var coupon = result.split("|")[1];
					var content = "<b id=\"Chead-tip-close\" class=\"Chead-tip-close\"></b><b class=\"Chead-tip-arrow\"></b>";
					content += "<p>您有";
					if(order != "0"){
						content += "<a href=\"http://order.lefeng.com/user_orders.jsp?statusType=1000\">" + order + "个订单</a>未支付";
					}
					if(coupon != "0"){
						if(order != "0"){
							content += ",";
						}
						content += "<a href=\"http://order.lefeng.com/myvouchers.jsp?voucherStatus=1\">" + coupon + "张代金券</a>未使用";
					}
					content += "</p>";
					$(".Chead-main > div").last().after("<div class=\"Chead-tip\" id=\"Chead-tip\">"+content+"</div>");
					// coupon notice
					$('#Chead-tip-close').click(function(){
						$(this).parent().hide();
						setCookie("ordercoupon",uid, false,"/","lefeng.com",false);
						//document.cookie="ordercoupon=" + uid + ";domain=lefeng.com";
					}
					);
				}
			});
		}
	}

	loadOrderCoupon();


	// shopping show
	$('#Chead-shopping').hover(function(){
		if($(this).find('div.shopping-list').is(':hidden')){
			$(this).find('div.shopping-list').stop().removeAttr('style').slideDown(200).prev().css('background-position','-199px -34px');
			shoppingPage();
			fillCartContent();
		}
	},function(){
		$(this).find('div.shopping-list').hide().prev().removeAttr('style');
	});


	//footer init
	$('#Cfooter .Cfooter-service dt').each(function(i){
		$(this).css('background-position',i * -50 - 33 + 'px -217px').show();
		$(this).hover(function(){!$(this).find('div').stop().css('opacity',1).show().length && $(this).html('<div style="background-position:'+ (i * -50 - 33) +'px -267px;"></div>')},function(){$(this).find('div').stop().fadeOut(4000)})
	});


	// 加入收藏
	$.addFavorite($('#Chead-save'),'乐蜂网','http://www.lefeng.com');


	//alert pushCart s

	if(!$('#succcartTip').length && ($('a.push').length && $('a.push').attr('sid')) || ($('a.notify').length && $('a.notify').attr('sid')) || ($('a.save').length && $('a.save').attr('sid'))){

		var altCartHtml = [
			'<div id="succcartTip" class="alt-succ">',
			'<div class="sum">',
			'<h3>该商品已成功放入购物车</h3>',
			'<p></p>',
			'<p>',
			'<a href="###" class="contgo">&lt;&lt; 继续购物</a>',
			'<a href="http://shopping.lefeng.com/cart/cart.jsp" class="pay">去结算</a>',
			'</p>',
			'<span class="succ-ico"></span>',
			'<span class="blank20"></span>',
			'</div>',
			'<p class="more">购买过该商品的人还购买过</p>',
			'<div id="buyandbuy"></div>',
			'<a href="" class="succ-close">关闭</a>',
			'</div>',
			'<div id="clecsuccTip" class="alt-succ">',
			'<div class="sum">',
			'<h3>您已收藏了此商品</h3>',
			'<p><a class="sumfl" target="_blank" href="http://active.lefeng.com/user/user_favorite.jsp">查看我的收藏&gt;&gt;</a></p>',
			'<span class="collect-ico"></span>',
			'</div>',
			'<p class="more" style="display: block;">浏览过该商品的人还浏览过</p>',
			'<a href="" class="succ-close">关闭</a>',
			'</div>',
			'<div pid="" id="emailNotify" class="alt-succ">',
			'<p>到货后我们将通过邮件通知您!</p>',
			'<p>邮箱：',
			'<input type="text" id="email" name="email" onfocus="if(this.value==\'请输入Email地址\'){this.value=\'\';this.style.color=\'#000\'}" onblur="if(this.value==\'\'){this.value=\'请输入Email地址\';this.style.color=\'#999\'}" class="emailinput">',
			'<input type="button" id="oosreg" value="提交" class="emailsubmit">',
			'</p>',
			'<a href="" class="succ-close">关闭</a>',
			'</div>'
				];

		$('body').append(altCartHtml.join(''));

		
	function addCart_tuijian(obj,pid){
		var url = 'http://tuijian.lefeng.com/recom/recommend.jsp?key=guesscate&type=b&qids='+pid+'&productSize=s&priceSize=42&count=5&isAllCate=false&exSelf=true&showCate=false&callback=?';
		$.getJSON(url,function(data){
			if(data && data.length > 0){
				var html = '';
				for(var i = 0 ; i < data.length; i++){
					if(data[i]){
						var id = data[i].id;
						var href = 'http://product.lefeng.com/product' + id + '.html';
						var tj_href = 'http://rfu.lefeng.com/1_0_007_0030_01/product/' + id + '.html';
						var name = data[i].name;
						html += '<dl>\
						<dt><a tjurl="'+tj_href+'" title="'+name+'" href="'+href+'" target="_blank"><img src="'+data[i].imageUrl+'"></a></dt>\
						<dd class="nam"><a tjurl="'+tj_href+'" title="'+name+'" href="'+href+'" target="_blank">'+name+'</a></dd>\
						<dd><img src="'+data[i].priceImageUrl+'"></dd>\
						</dl>';
					}
				}
				if(html){
					obj.find('dl').remove();
					obj.find('.more').after(html);
				}
			}
		})
	}


		/* mini购物车 收藏 到货通知 */
		var cartObj = "#succcartTip";//添加购物车后的div
		var saveObj = "#clecsuccTip";//收藏后的div

		$('a.push').live('click',function(){
			$(cartObj).hide();
			var toObj = $(this);
			var sid = toObj.attr("sid");	
			var pid = toObj.attr("pid");	
			//购买过还购买过
			addCart_tuijian($(cartObj),pid);

			//加入购物车
			var carttip="该商品已成功放入购物车";	
			var countmoney="购物车共 <b>0</b> 件商品     合计：<b>0</b> 元";
			$.getJSON("http://shopping.lefeng.com/cart/ajaxUpsellcart.jsp?callback=?",
					{productId:pid,skuId:sid,quantity:1,itemType:0,process:"add",skuExtraPriceId:0,fromSite:"webAllProvince"},
					function(json){
						if(json.errorInfo != ''){
							if(json.errorInfo.indexOf('预售') > 0){window.open('http://product.lefeng.com/product/'+ pid +'.html');return false;}
							carttip=json.errorInfo;
							$(cartObj+" p:first").hide();
							selectIco(cartObj,"succNocar-ico","succ-ico");
							$('#succcartTip .pay').show();
						}else{            		
							countmoney="购物车共 <b>"+json.totalCount+"</b> 件商品     合计：<b>"+json.totalPrice+"</b> 元";
							$('#cartbuy').text($('#cartbuy').text(json.totalCount));
							$(cartObj+" div p:first").html(countmoney);
							$(cartObj+" div p:first").show();
							selectIco(cartObj,"succ-ico","succNocar-ico");
							$('#succcartTip .pay').show();
						}
						if(carttip.indexOf('库存不足') >= 0){
							carttip = "很抱歉，该商品已被抢光了。"
							$('#succcartTip .pay').hide();
						}
						$(cartObj+" div h3").html(carttip);
						xy(toObj,$(cartObj),true);
						return false;
					}
			);
		});

		//收藏
		$('a.save').live('click',function(){
			var islogin = getLogin(),_self = this;
			if(islogin != null && islogin != "__TRANSIENT" && islogin != ""){
				$(saveObj).hide();
				var toObj = $(this);
				var sid = toObj.attr("sid");	
				var pid = toObj.attr("pid");

				//浏览过还浏览过
				addCart_tuijian($(saveObj),pid);

				//收藏
				var savetip = "添加收藏夹成功";
				var succico = "clcsucc-ico";
				var removeico = "collect-ico";
				var u = "http://product.lefeng.com/goods/atfv4.jsp?skuid=" + sid + "&productid=" + pid +"&callback=?";
				$.getJSON(u,function(json){
					if(json.result == '0'){
						savetip = "添加收藏夹成功";
						succico = "clcsucc-ico";
						removeico = "collect-ico";
						$(_self).addClass('saveh');
					}else if(json.result == '1'){
						savetip = "您已收藏了此商品";
						succico = "collect-ico";
						removeico = "clcsucc-ico";
						$(_self).addClass('saveh');
					}else{
						savetip = "添加收藏夹失败";
						succico = "collect-ico";
						removeico = "clcsucc-ico";
					}
					$(saveObj+" div h3").html(savetip);
					selectIco(saveObj,succico,removeico);
					xy(toObj,$(saveObj),true);
					return false;
				});
			}else{
				//alert(window.location.href);
				var s="https://passport.lefeng.com/login.jsp?tourl="+encodeURIComponent(window.location.href);
				//alert(s);
				window.location.href=s;
			}
		});

		//申请缺货通知
		$('a.notify').live('click',function(){
			$('#emailNotify').hide();
			var pid = $(this).attr("pid");
			$("#emailNotify").attr("pid",pid);
			xy($(this),$('#emailNotify'),false);
			return false;
		});

		//缺货通知提交
		$('#oosreg').click(function(){
			var islogin = getLogin();
			if(islogin != null && islogin != "__TRANSIENT" && islogin != ""){
				var email=$.trim($("#email").val());
				if(email == null || email == "" || email== "请输入Email地址"){
					alert("请输入Email地址!");
					$("#email").val("");
					$("#email").focus();
				}else{
					var reg = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
					if(!reg.test(email)){
						alert("请输入正确Email格式!");
						$("#email").val("");
						$("#email").focus();
					}else{
						$.getJSON(
							"http://product.lefeng.com/inc/oosreg.jsp?callback=?",
							{oospid:$("#emailNotify").attr("pid"),uemail:email},
							function(json){
								if(json.result==0){
									alert("申请缺货通知成功！");
								}else if(json.result==2){
									alert("已申请缺货通知，勿重复申请！");
								}else{
									alert("系统繁忙请稍后重试！");
								}
							}
							); 
					}
				}
			}else{
				alert("请先登录再登记");
				var s="http://passport.lefeng.com/login.jsp?tourl="+encodeURIComponent(window.location.href);
				window.location.href=s;
			} 
		});


		function selectIco(obj,disDiv,notDiv){
			$(obj+" span").eq(0).removeClass(notDiv).addClass(disDiv);
		}

		//close me
		$('.succ-close').click(function(){
			$(this).parent().hide();
			return false;
		});

		$('.contgo').click(function(){
			$('#succcartTip').hide();
			return false;
		});

		//计算浮层显示位置
		var thetime;
		function xy(o,obj,timeout){
			var x = [0,0];
			x[0] = o.offset().left;
			x[1] = o.offset().top;
			if(x[0] - (document.body.clientWidth / 2 - 500) > 600){
				obj.css({'top':x[1] + 23 +'px','left':'auto','right':(document.body.clientWidth / 2 - 500) +'px'}).show();
			}else{
				obj.css({'top':x[1] + 23 +'px','left':x[0] +'px'}).show();
			}
		}

	}

	//alert pushCart e
});


