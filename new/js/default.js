var pageurl=window.location.href.toLowerCase();
if(pageurl.match("search")!=null || pageurl.match("list")!=null || pageurl.match("info")!=null)
{
	$("#menu p a").removeClass("onpage");
	$("#menu p a").removeClass("onthis");
	$("#menu p a").eq(5).addClass("onpage");	
	$("#menu p a").eq(5).addClass("onthis");		
}else{
	$("#nav a").removeClass("onthis");
	$("#nav a").eq(0).addClass("onthis");		
}


var windown_w = parseInt($(window).width());
var windown_h = parseInt($(window).height());
function screen_adjust()
{
	windown_w = parseInt($(window).width());
	windown_h = parseInt($(window).height());
}

var download_link='';
$(document).ready(function(){
	screen_adjust();
	$("#broadside div.top").click(function(){
		$('html,body').stop().animate({scrollTop: 0},800);
	})
	$(".dbox a").focus(function(){
		$(this).parent().parent().parent().addClass("onthis");
		return true;
	})
	$(".dbox a").blur(function(){
		$(this).parent().parent().parent().removeClass("onthis");
		return true;
	})
	$("#statement a.but").click(function(){
		$("#statement").animate({opacity:0},500,"",function(){
			$("#statement").css("display","none");
		})
	})
	
	$("a.confirm").click(function(e){
		if ( e && e.preventDefault ){e.preventDefault();}
		else {window.event.returnValue =false;return false;}
		download_link=$(this).attr("href");
		$("#prompt").css("display","block");
		$("#prompt").animate({opacity:1},500);
		$("#prompt .but").eq(0).focus();
	})	
	$("#prompt .but").eq(0).click(function(){
		window.open(download_link);
		$("#prompt").animate({opacity:0},500,'',function(){
			$("#prompt").css("display","none");
		});
	})
	$("#prompt .but").eq(1).click(function(){
		download_link='';
		$("#prompt").animate({opacity:0},500,'',function(){
			$("#prompt").css("display","none");
		});
	})
	
	$("#search_but").click(function(){
		if($("#q").val().length<=0){
			alert("請輸入需要搜索的關鍵字。");
			return false;
		}
		if($("#q").val().length>20){
			alert("關鍵字超過20個字母或漢字。");
			return false;
		}
		$("#search_form").submit();
	})
});
$(window).bind('resize', function(e){
	screen_adjust();
});
$(window).bind('scroll', function(e){
	if($(window).scrollTop()>150)
	{
		$("#broadside div.top").css("display","block");
	}else{
		$("#broadside div.top").css("display","none");
	}
});

if($("#disbox").length==1)
{
	var disbox_n=0;
	function disboxgo()
	{
		disbox_n++;
		x=$("#disbox").width();
		if(disbox_n>=43)return false;
		$("#disbox img").css("left",-(disbox_n*x)+"px");
		setTimeout('disboxgo()',150)
	}
	setTimeout('disboxgo()',500)
}