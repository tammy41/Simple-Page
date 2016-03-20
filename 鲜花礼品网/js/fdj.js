$("#box .shade").hover(function(){
	$("#box .sShow,.bShow").show();
},function(){
	$("#box .sShow,.bShow").hide();
});

$("#box .shade").mousemove(function(e){
	//获取鼠标与浏览器窗口的距离
	var x=e.clientX;
	var y=e.clientY;
	//获取浏览器与shade的距离
	var l=$(this).offset().left;
	var t=$(this).offset().top;
	//获取鼠标与sShow边界的距离
	var w=$("#box .sShow").width()/2;
	var h=$("#box .sShow").height()/2;
	
	//小滑块滑动的距离
	var _left=x-l-w;
	var _top=y-t-h;
	
	//小滑块滑动的最大距离
	var maxW=$("#box .shade").width()-w*2-2;
	var maxH=$("#box .shade").height()-h*2-2;
	
	//防止小滑块滑出盒子范围
	if(_left<0){
		_left=0;
	}else if(_left>maxW){
		_left=maxW;
	}
	if(_top<0){
		_top=0;
	}else if(_top>maxH){
		_top=maxH;
	}
	
	//给小滑块赋值
	$("#box span.sShow").css({"left":_left,"top":_top});
	
	//小滑块滑动的比例
	var wPro=_left/maxW;
	var hPro=_top/maxH;
	
	//大图移动的距离
	var BigLeft=wPro*($(".bShow img").width()-$(".bShow").width());
	var BigTop=hPro*($(".bShow img").height()-$(".bShow").height());
	
	//给大图赋值
	$(".bShow img").css({"left":-BigLeft,"top":-BigTop});
	
});

$("#box .btn img").mousemove(function(){
	$(this).addClass("active").siblings().removeClass("active");
	var bSrc=$(this).attr("dataSrc");
	$("#box .show img,#box .bShow img").attr("src",bSrc);
})
