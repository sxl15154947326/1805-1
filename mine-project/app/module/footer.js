define(function(){
	function Footer(){}

	Footer.prototype.init = function(){
		//1、把header的html内容加载到对应的页面上
		//2、header的交互
		$("#footer").load("/html/component/footer.html",function(){
			//header的功能代码
//			$("#footer h1").on("click",function(){
//				alert($(this).html());
//			})
		});

	}

	return new Footer();
})