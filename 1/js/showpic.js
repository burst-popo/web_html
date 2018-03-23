// JavaScript Document
$(function(){
	var listpic = $(".show_img ul li");
	var listinfo = $(".show_info_wrapper ul li");
	var showpic = listpic.eq(0).css("display","block");
	listinfo.hover(
		function(){
					$(this).animate({left:'0px'});
					var num = $(this).index();
					showpic = listpic.eq(num).css("display","block").siblings().css("display","none");
		
		},
		function(){
					$(this).animate({left:'-26px'});
					showpic = listpic.eq(num).css("display","none");
					if(listpic.is(":hidden")){
						listpic.eq(0).css("display","block");
					}
		}
	)
	
	var listpicgh = $(".show_img_gh ul li");
	var listinfogh = $(".show_info_wrapper_gh ul li");
	var showpicgh = listpicgh.eq(0).css("display","block");
	listinfogh.hover(
		function(){
					$(this).animate({left:'0px'});
					var num = $(this).index();
					showpicgh = listpicgh.eq(num).css("display","block").siblings().css("display","none");
		
		},
		function(){
					$(this).animate({left:'-26px'});
					showpicgh = listpicgh.eq(num).css("display","none");
					if(listpicgh.is(":hidden")){
						listpicgh.eq(0).css("display","block");
					}
		}
	)
	
	var listpicjs = $(".show_img_js ul li");
	var listinfojs = $(".show_info_wrapper_js ul li");
	var showpicjs = listpicjs.eq(0).css("display","block");
	listinfojs.hover(
		function(){
					$(this).animate({left:'0px'});
					var num = $(this).index();
					showpicjs = listpicjs.eq(num).css("display","block").siblings().css("display","none");
		
		},
		function(){
					$(this).animate({left:'-26px'});
					showpicjs = listpicjs.eq(num).css("display","none");
					if(listpicjs.is(":hidden")){
						listpicjs.eq(0).css("display","block");
					}
		}
	)
	
	var listpicdf = $(".show_img_df ul li");
	var listinfodf = $(".show_info_wrapper_df ul li");
	var showpicdf = listpicdf.eq(0).css("display","block");
	listinfodf.hover(
		function(){
					$(this).animate({left:'0px'});
					var num = $(this).index();
					showpicdf = listpicdf.eq(num).css("display","block").siblings().css("display","none");
		
		},
		function(){
					$(this).animate({left:'-26px'});
					showpicdf = listpicdf.eq(num).css("display","none");
					if(listpicdf.is(":hidden")){
						listpicdf.eq(0).css("display","block");
					}
		}
	)
	
	var listpicxr = $(".show_img_xr ul li");
	var listinfoxr = $(".show_info_wrapper_xr ul li");
	var showpicxr = listpicxr.eq(0).css("display","block");
	listinfoxr.hover(
		function(){
					$(this).animate({left:'0px'});
					var num = $(this).index();
					showpicxr = listpicxr.eq(num).css("display","block").siblings().css("display","none");
		
		},
		function(){
					$(this).animate({left:'-26px'});
					showpicxr = listpicxr.eq(num).css("display","none");
					if(listpicxr.is(":hidden")){
						listpicxr.eq(0).css("display","block");
					}
		}
	)
	
	var listpicsc = $(".show_img_sc ul li");
	var listinfosc = $(".show_info_wrapper_sc ul li");
	var showpicsc = listpicsc.eq(0).css("display","block");
	listinfosc.hover(
		function(){
					$(this).animate({left:'0px'});
					var num = $(this).index();
					showpicsc = listpicsc.eq(num).css("display","block").siblings().css("display","none");
		
		},
		function(){
					$(this).animate({left:'-26px'});
					showpicsc = listpicsc.eq(num).css("display","none");
					if(listpicsc.is(":hidden")){
						listpicsc.eq(0).css("display","block");
					}
		}
	)
	
	var listpicsg = $(".show_img_sg ul li");
	var listinfosg = $(".show_info_wrapper_sg ul li");
	var showpicsg = listpicsg.eq(0).css("display","block");
	listinfosg.hover(
		function(){
					$(this).animate({left:'0px'});
					var num = $(this).index();
					showpicsg = listpicsg.eq(num).css("display","block").siblings().css("display","none");
		
		},
		function(){
					$(this).animate({left:'-26px'});
					showpicsg = listpicsg.eq(num).css("display","none");
					if(listpicsg.is(":hidden")){
						listpicsg.eq(0).css("display","block");
					}
		}
	)
})
