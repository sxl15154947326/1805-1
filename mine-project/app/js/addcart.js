var addBtn = document.getElementsByClassName("tocart");
			var seeBtn = document.getElementById("seeBtn");
			var demo = document.getElementById("demo");
			for(var i = 0; i < addBtn.length; i++){
				addBtn[i].onclick = function(){
					//获取当前商品信息
					var li = this.parentNode.parentNode;
					var no = li.children[0].innerHTML;
					//判断购物车是否为空
					//判断cart这个cookie字段有没有值
					var cart = getCookie("cart");
					var arr = cart == ""? [] : JSON.parse(cart);
					//判断数组里面是否存在当前商品
					for(var j = 0; j < arr.length; j++){
						if(arr[j].no == no){
							//当前商品已经添加过了，只需要将数量加1
							arr[j].num++;
							//arr放入cookie
							setCookie("cart",JSON.stringify(arr));
							return;
						}
					}
					
					//第一次添加这个商品，num：1
					var obj = {
						no: no,
						name: encodeURI(li.children[1].innerHTML),
						price: li.children[2].innerHTML,
						num:1
					}
					//把obj放到arr中
					arr.push(obj);
					var str = JSON.stringify(arr);//把json数据转换成字符串
					//console.log(str);
					setCookie("cart",str);
					
				}
			}