window.onload = function(){
	var oBtn = $tag("button");
	var oForm = $tag("form")[0];
	var oInput = $tag("input");
	var oSub = $id("sub");
	var arr = [false,false,false,false,false,false];
	
	
	//用户名
	oInput[0].onblur = function(){
		var str = this.value;
		var reg = /^.{3,12}$/;
		if(reg.test(str)){
			//用户名验证通过
			setCookie("userName",str);
			arr[0] = true;
			this.parentNode.children[2].style.display = "none";
		}else{
			arr[0] = false;
			this.parentNode.children[2].style.display = "block";
		}
	}
	
	//邮箱
	oInput[1].onblur = function(){
		//邮箱
		var str = this.value;
		var reg = /^\w+@[a-z0-9]+\.[a-z]+$/i;
		if(reg.test(str)){
			//用户名验证通过
			setCookie("eml",str);
			arr[1] = true;
			this.parentNode.children[2].style.display = "none";
		}else{
			arr[1] = false;
			this.parentNode.children[2].style.display = "block";
		}
	}
	
	//密码
	var pas;
	oInput[2].onblur = function(){
		//密码不少于3位
		var str = this.value;
		var reg = /^.{3,}$/;
		if(reg.test(str)){
			//密码验证通过
			setCookie("pwd",str);
			arr[2] = true;
			this.parentNode.children[2].style.display = "none";
			pas = this.value;
			console.log(pas);
		}else{
			arr[2] = false;
			this.parentNode.children[2].style.display = "block";
		}
	}
	
	//确认密码
	oInput[3].onblur = function(){
//				with(document.all){
			var pas2 = this.value;
		    if(pas === pas2){
		   		arr[3] = true;
				this.parentNode.children[2].style.display = "none";
			}else{
				arr[3] = false;
				this.parentNode.children[2].style.display = "block";
			}
		}
	

	
	//QQ号
	oInput[4].onblur = function(){
		var str = this.value;
		var reg = /\d{8,11}/;
		if(reg.test(str)){
			//手机号码验证通过
			arr[4] = true;
			this.parentNode.children[2].style.display = "none";
		}else{
			arr[4] = false;
			this.parentNode.children[2].style.display = "block";
		}
	}
	
	//手机号	
	oInput[5].onblur = function(){
		//手机号码
		var str = this.value;
		var reg = /\d{11}/;
		if(reg.test(str)){
			//手机号码验证通过
			arr[5] = true;
			this.parentNode.children[2].style.display = "none";
		}else{
			arr[5] = false;
			this.parentNode.children[2].style.display = "block";
		}
	}
	
	
	
	oForm.onsubmit = function(e){
		//arr里面的每一项都是true才能提交
		//var e = event || window.event;
		var isSubmit = arr.every(function(item){
			return item == true;
		})
		if(!isSubmit){
			//阻止提交
			e.preventDefault();

		}
	}
	
}













// define(function(){
// 	function Zhuce(){}

// 	Header.prototype.init = function(){
// 		//1、把header的html内容加载到对应的页面上
// 		//2、header的交互
// 		window.onload = function(){
// 			var oBtn = $tag("button");
// 			var oForm = $tag("form")[0];
// 			var oInput = $tag("input");
// 			var oSub = $id("sub");
// 			var arr = [false,false,false,false,false,false];
			
			
// 			//用户名
// 			oInput[0].onblur = function(){
// 				var str = this.value;
// 				var reg = /^.{3,12}$/;
// 				if(reg.test(str)){
// 					//用户名验证通过
// 					setCookie("userName",str);
// 					arr[0] = true;
// 					this.parentNode.children[2].style.display = "none";
// 				}else{
// 					arr[0] = false;
// 					this.parentNode.children[2].style.display = "block";
// 				}
// 			}
			
// 			//邮箱
// 			oInput[1].onblur = function(){
// 				//邮箱
// 				var str = this.value;
// 				var reg = /^\w+@[a-z0-9]+\.[a-z]+$/i;
// 				if(reg.test(str)){
// 					//用户名验证通过
// 					setCookie("eml",str);
// 					arr[1] = true;
// 					this.parentNode.children[2].style.display = "none";
// 				}else{
// 					arr[1] = false;
// 					this.parentNode.children[2].style.display = "block";
// 				}
// 			}
			
// 			//密码
// 			var pas;
// 			oInput[2].onblur = function(){
// 				//密码不少于3位
// 				var str = this.value;
// 				var reg = /^.{3,}$/;
// 				if(reg.test(str)){
// 					//密码验证通过
// 					setCookie("pwd",str);
// 					arr[2] = true;
// 					this.parentNode.children[2].style.display = "none";
// 					pas = this.value;
// 					console.log(pas);
// 				}else{
// 					arr[2] = false;
// 					this.parentNode.children[2].style.display = "block";
// 				}
// 			}
			
// 			//确认密码
// 			oInput[3].onblur = function(){
// //				with(document.all){
// 					var pas2 = this.value;
// 				    if(pas === pas2){
// 				   		arr[3] = true;
// 						this.parentNode.children[2].style.display = "none";
// 					}else{
// 						arr[3] = false;
// 						this.parentNode.children[2].style.display = "block";
// 					}
// 				}
			

			
// 			//QQ号
// 			oInput[4].onblur = function(){
// 				var str = this.value;
// 				var reg = /\d{8,11}/;
// 				if(reg.test(str)){
// 					//手机号码验证通过
// 					arr[4] = true;
// 					this.parentNode.children[2].style.display = "none";
// 				}else{
// 					arr[4] = false;
// 					this.parentNode.children[2].style.display = "block";
// 				}
// 			}
			
// 			//手机号	
// 			oInput[5].onblur = function(){
// 				//手机号码
// 				var str = this.value;
// 				var reg = /\d{11}/;
// 				if(reg.test(str)){
// 					//手机号码验证通过
// 					arr[5] = true;
// 					this.parentNode.children[2].style.display = "none";
// 				}else{
// 					arr[5] = false;
// 					this.parentNode.children[2].style.display = "block";
// 				}
// 			}
			
			
			
// 			oForm.onsubmit = function(e){
// 				//arr里面的每一项都是true才能提交
// 				//var e = event || window.event;
// 				var isSubmit = arr.every(function(item){
// 					return item == true;
// 				})
// 				if(!isSubmit){
// 					//阻止提交
// 					e.preventDefault();

// 				}
// 			}
			
// 		}

// 	}

// 	return new Zhuce();
// })