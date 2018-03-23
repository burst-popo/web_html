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
			$("ul.btn li").eq(0).addClass("hover");
			$("ul.btn li").click(
				function()
					{
					var num = $(this).index();
					$("ul.btn li").eq(num).addClass("hover").siblings("ul.btn li").removeClass("hover");
					buttur(oInner,{left:num*-240});
					window.clearTimeout(timer);
					return step = num;
				}
				);
		}
		hover();
		
		
		var oInner01=document.getElementById("inner01");
		var oLis01=oInner01.getElementsByTagName("li");
		var step01=-1;
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
		function hover01(){
			var t = $("ul.pro_list");
			$("ul.btn01 li").eq(0).addClass("hover");
			$("ul.btn01 li").click(
				function()
					{
					var num = $(this).index();
					$("ul.btn01 li").eq(num).addClass("hover").siblings("ul.btn01 li").removeClass("hover");
					buttur(oInner01,{left:num*-240});
					return step01 = num;
				}
				);
		}
		hover01();
		
		var oInner02=document.getElementById("inner02");
		var oLis02=oInner02.getElementsByTagName("li");
		var step02=-1;
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
		function hover02(){
			var t = $("ul.pro_list");
			$("ul.btn02 li").eq(0).addClass("hover");
			$("ul.btn02 li").click(
				function()
					{
					var num = $(this).index();
					$("ul.btn02 li").eq(num).addClass("hover").siblings("ul.btn02 li").removeClass("hover");
					buttur(oInner02,{left:num*-240});
					return step01 = num;
				}
				);
		}
		hover02();
		
		var oInner03=document.getElementById("inner03");
		var oLis03=oInner03.getElementsByTagName("li");
		var step03=-1;
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
		function hover03(){
			var t = $("ul.pro_list");
			$("ul.btn03 li").eq(0).addClass("hover");
			$("ul.btn03 li").click(
				function()
					{
					var num = $(this).index();
					$("ul.btn03 li").eq(num).addClass("hover").siblings("ul.btn03 li").removeClass("hover");
					buttur(oInner03,{left:num*-240});
					return step03 = num;
				}
				);
		}
		hover03();
		
		var oInner04=document.getElementById("inner04");
		var oLis04=oInner04.getElementsByTagName("li");
		var step04=-1;
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
		function hover04(){
			var t = $("ul.pro_list");
			$("ul.btn04 li").eq(0).addClass("hover");
			$("ul.btn04 li").click(
				function()
					{
					var num = $(this).index();
					$("ul.btn04 li").eq(num).addClass("hover").siblings("ul.btn04 li").removeClass("hover");
					buttur(oInner04,{left:num*-240});
					return step04 = num;
				}
				);
		}
		hover04();
		
		var oInner05=document.getElementById("inner05");
		var oLis05=oInner05.getElementsByTagName("li");
		var step05=-1;
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
		function hover05(){
			var t = $("ul.pro_list");
			$("ul.btn05 li").eq(0).addClass("hover");
			$("ul.btn05 li").click(
				function()
					{
					var num = $(this).index();
					$("ul.btn05 li").eq(num).addClass("hover").siblings("ul.btn05 li").removeClass("hover");
					buttur(oInner05,{left:num*-240});
					return step05 = num;
				}
				);
		}
		hover05();
		
		var oInner06=document.getElementById("inner06");
		var oLis06=oInner06.getElementsByTagName("li");
		var step06=-1;
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
		function hover06(){
			var t = $("ul.pro_list");
			$("ul.btn06 li").eq(0).addClass("hover");
			$("ul.btn06 li").click(
				function()
					{
					var num = $(this).index();
					$("ul.btn06 li").eq(num).addClass("hover").siblings("ul.btn06 li").removeClass("hover");
					buttur(oInner06,{left:num*-240});
					return step06 = num;
				}
				);
		}
		hover06();
})