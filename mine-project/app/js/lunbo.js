$(function (){
	var box = $("#div1"),
		ul = $("#div1 ul"),
		aLi = $('#div1 ul li'),
		ol = $("#div1 ol"),
		aBtn = $("#div1 ol li"),
		goPrev = $("#goPrev"),
		goNext = $("#goNext");
		
	var index = 0;//存当前处于第几张图
	var flag = false;//没有播放
	
	aBtn.on("click",function(){
		if(!flag){
			//动画开始了
			flag = true;
			//自己改变样式
			$(this).addClass("ac").siblings().removeClass("ac");
			//切换图片
			aLi.eq(index).stop().fadeOut(1000);
			index = $(this).index();
			aLi.eq(index).stop().fadeIn(1000,function(){
				flag = false;
			});
		}	
	})
	goPrev.on("click",function(){
		if(!flag){
			flag = true;
			aLi.eq(index).stop().fadeOut(1000);
			index--;
			if(index < 0) index = aLi.length -1;
			aBtn.eq(index).addClass("ac").siblings().removeClass("ac");
			aLi.eq(index).stop().fadeIn(1000,function(){
				flag = false;
			});
		}
		
	})
	
	goNext.on("click",function(){
		if(!flag){
			flag = true;
			aLi.eq(index).stop().fadeOut(1000);
			index++;
			if(index > aLi.length-1) index = 0;
			aBtn.eq(index).addClass("ac").siblings().removeClass("ac");
			aLi.eq(index).stop().fadeIn(1000,function(){
				flag = false;
			});
		}
		
	})
	var timer = null;
	function auto(){
		timer = setInterval(function(){
			//trigger触发事件的意思
			goNext.trigger("click");
		},3000);
	}
	auto();
	$("#div1").hover(function(){
		clearInterval(timer);
	},auto);
	
	
	
	
	
	
	
});
