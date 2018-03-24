// JavaScript Document
$(function(){
		var oInner=document.getElementById("inner");
		var oLis=oInner.getElementsByTagName("li");
		var step=-1;
		var timer=null;
		function buttur(ele,obj){
			window.clearTimeout(ele.timer);
			var end=null;
			for(direc in obj){
				var direc1=direc.toLowerCase();
				var strOffset="offset"+direc1.substr(0,1).toUpperCase()+direc1.substring(1).toLowerCase();
				var target=obj[direc];
				var nSpeed=(target-ele[strOffset])/10;
				nSpeed=nSpeed>=0?Math.ceil(nSpeed):Math.floor(nSpeed);
				ele.style[direc1]=ele[strOffset]+nSpeed+"px";
				end+=nSpeed;
			}
			if(end)
				if(typeof fnCallback=="function"){
					fnCallback.call(ele);
				}else{
				ele.timer=window.setTimeout(function(){buttur(ele,obj)},30);
				}
		}
		function autoMove(){
			step++;
			if(step==oLis.length){
				oInner.style.left=0;
				step=0;
			}
			buttur(oInner,{left:step*-240});
			timer=window.setTimeout(autoMove,3000);
			$("ul.btn li").eq(step).addClass("hover").siblings("ul.btn li").removeClass("hover");
		
		}
		function hover(){
			var t = $("ul.pro_list");
			$("ul.btn li").hover(
				function()
					{
					var num = $(this).index();
					$("ul.btn li").eq(num).addClass("hover").siblings("ul.btn li").removeClass("hover");
					buttur(oInner,{left:num*-240});
					window.clearTimeout(timer);
					return step = num;
				},
				function(){
					timer=window.setTimeout(autoMove,3000);
					}
				
				);
		}
		autoMove(); 
		hover();
		oInner.onmouseover=function(){
			window.clearTimeout(timer);
		}
		oInner.onmouseout=function(){
			timer=window.setTimeout(autoMove,3000);
		}
})