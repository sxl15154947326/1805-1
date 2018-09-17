//list页面的业务逻辑代码
require(["config"],function(){
	require(["jquery","template","header","footer","toast","tab"],function($,template,header,footer,toast,tab){
		header.init();
		footer.init();
	})
})