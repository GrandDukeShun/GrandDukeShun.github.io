/************************************************************
 * Confirm Modal Plugin V1.0
 * https://github.com/klutche/confirm_modal
 * Released under the MIT license
 ************************************************************/

$(function(){
	$.removeCookie("over18", {expires:-1,domain: 'novel.syosetu.org',path:"/"});
	var modal = $(".modal");//モーダルウインドウのクラス
	var opacity = 0.5;//モーダル背景の透明度
	var button = $(".close_modal");//モーダル解除ボタンのクラス
	var limit = 30;//Cookieの有効期限(日)
	var cookie = $.cookie("over18");
	if(cookie !== "off"){
		var overlay = $("<div></div>");
		overlay.css({
			"position":"fixed",
			"z-index":100,
			"top":0,
			"left":0,
			"height":100+"%",
			"width":100+"%",
			"background":"#000",
			"opacity":opacity
		});
		$("body").append(overlay);
		modal.css("display", "block");
	}
	button.click(function(){
		$(overlay).fadeOut("slow");
		$(modal).hide();
		var clearTime = new Date();
		clearTime.setTime(clearTime.getTime()+(limit*86400*1000));
		$.cookie("over18", "off", {expires:clearTime,domain: '.syosetu.org',path:"/"});
	});
	$(".remove_cookie").click(function(){
		$.removeCookie("over18", {expires:-1,domain: '.syosetu.org',path:"/"});
		location.reload();
	});
});
