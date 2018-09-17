require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","template","header","footer","lunbo"],function($,template,header,footer){
		console.log(header);
		header.init();
		footer.init();
		
	})
})