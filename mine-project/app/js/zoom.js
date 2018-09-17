$(document).ready(function(){
	var box = $("#box"),
		span = $("#zoom"),
		bigimg = $("#bigimg"),
		img = $("#bigimg img");
		console.log(111)
		//鼠标进入box
	$("#box").mousemove(function(e){
		
		e = e || window.event;
		$("#zoom").css('display','block');
		$("#bigimg").css('display','block');
		//计算span的坐标
		var left = e.pageX-$(this).offset().left-$("#zoom").outerWidth()/2,
			top = e.pageY-$(this).offset().top-$("#zoom").outerHeight()/2;
			console.log(e.pageX);
			console.log(top);
		//判断放大镜是否出界
		if(left < 0) left = 0;
		if(top < 0) top = 0;
		if(left > $(this).width()-$("#zoom").width()){
   			 left=$(this).width()-$("#zoom").width();
		}
		if(top > $(this).height()-$("#zoom").height()){
   			 top=$(this).height()-$("#zoom").height();
		}
		$("#zoom").css({
            left:left+'px',
            top:top+'px'
        });
        $("#bigimg img").css({
            left:-2*left+'px',
            top:-2*top+'px'
        });
    	
    
	})
		
	$("#box").mouseleave(function(){
		$("#zoom").css('display','none');
		$("#bigimg").css('display','none');
		
	});
	
});
