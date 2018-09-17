window.onload = function(){
	var oBtn = $tag("button");
	var oForm = $tag("form")[0];
	var oInput = $tag("input");
	var arr = [false,false];
	
	oForm.onsubmit = function(e){
		//arr里面的每一项都是true才能提交
		var isSubmit = arr.every(function(item){
			return item == true;
		})
		if(!isSubmit){
			//阻止提交
			e.preventDefault();
		}
	}
	
	//oIput[0].value = getCookie("userName");
	oInput[0].onblur = function(){
		var str = getCookie("userName");
		var eml = getCookie("eml");
		var str1 = this.value;
		if(str === str1){
			arr[0] = true;
				//this.parentNode.children[1].style.display = "none";
			}else{
				arr[0] = false;
				//this.parentNode.children[1].style.display = "block";
			}
	}
	
	
	
	//oIput[1].value = getCookie("pwd");
	oInput[1].onblur = function(){
		var str3 = getCookie("pwd");
		var str4 = this.value;
		if(str3 === str4){
			arr[1] = true;
				//this.parentNode.children[1].style.display = "none";
			}else{
				arr[1] = false;
				//this.parentNode.children[1].style.display = "block";
			}
	}
	
}