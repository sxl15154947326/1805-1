require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"tab": "module/tab",
		"toast": "module/toast",
		"template": "libs/template-web",
		"url": "module/url",
		"header": "module/header",
		"footer": "module/footer",
		"lunbo":"js/lunbo",
		"zoom":"js/zoom",
		"zhuce":"js/zhuce"
		
	},
	shim: {
		toast:{
			deps:["jquery"]
		},
		tab:{
			deps:["jquery","toast"]
		},
		header:{
			deps:["jquery"]
		},
		footer:{
			deps:["jquery"]
		},
		lunbo:{
			deps:["jquery"]
		},
		zoom:{
			deps:["jquery"]
		},
		zhuce:{
			deps:["jquery"]
		}
	}
})