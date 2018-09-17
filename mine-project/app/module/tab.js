//define(function(){
//	function Tab(){}
//	
//	Tab.prototype.init = function(ele){
//		var tabs = $("#box"),
//			title = $("#box ul"),
//			aBtn = $("#box ul li"),
//			wrap = $("#id ol"),
//			aDiv = $("#box ol li");
//			
//		var _this = this;
//		this.btn = ele.btn;
//		this.show = ele.show;
//		for (var i = 0; i < this.btn.length; i++) {
//
//			this.btn[i].onclick = (function(index){
//				return function(){
//					_this.change(index);
//				}
//			})(i)
//		}
//	}
//	Tab.prototype.change = function(index){
//		for (var i = 0; i < this.btn.length; i++) {
//			this.btn[i].className = "";
//			this.show[i].className = "";
//		}
//		this.btn[index].className = "ac";
//		this.show[index].className = "ac";
//	}
//
//})
//	$(document).ready(function(){
//		var tabs = $("#box"),
//			title = $("#box ul"),
//			aBtn = $("#box ul li"),
//			wrap = $("#id ol"),
//			aDiv = $("#box ol li");
//			
//		for(var i = 0; i < aBtn.length; i++){
//			// i 
//			aBtn[i].index = i;//发编号(对象的自定义属性)
//			aBtn[i].onclick = function(){
//				//把所有btn的class清除,把所以内容盒子隐藏
//				for(var j = 0; j < aBtn.length; j++){
//					aBtn[j].className = "";
//					aDiv[j].style.display = "none";
//				}
//				this.className = "ac";
//				aDiv[this.index].style.display = "block";
//			}
//		}
//
//		
//	})
 $(function(){
    $('#box ul li').each(function(index){
      $(this).click(function(){
        $('#box ul li.ac').removeClass('ac');
        $(this).addClass('ac');
        $('#box ol li:eq('+index+')').show().siblings().hide();//eq  获取第n个元素
      })
    });
  });


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//console.log($);
//	function Tab(){
//	}
//
//	Tab.prototype.init = function(ele){
//		var _this = this;
//		this.btn = ele.btn;
//		this.show = ele.show;
//		for (var i = 0; i < this.btn.length; i++) {
//
//			this.btn[i].onclick = (function(index){
//				return function(){
//					_this.change(index);
//				}
//			})(i)
//		}
//	}
//	Tab.prototype.change = function(index){
//		for (var i = 0; i < this.btn.length; i++) {
//			this.btn[i].className = "";
//			this.show[i].className = "";
//		}
//		this.btn[index].className = "ac";
//		this.show[index].className = "ac";
//	}
//
//	return new Tab();
//})