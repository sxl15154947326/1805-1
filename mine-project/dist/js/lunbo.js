"use strict";$(function(){$("#div1"),$("#div1 ul");var e=$("#div1 ul li"),n=($("#div1 ol"),$("#div1 ol li")),i=$("#goPrev"),t=$("#goNext"),s=0,o=!1;n.on("click",function(){o||(o=!0,$(this).addClass("ac").siblings().removeClass("ac"),e.eq(s).stop().fadeOut(1e3),s=$(this).index(),e.eq(s).stop().fadeIn(1e3,function(){o=!1}))}),i.on("click",function(){o||(o=!0,e.eq(s).stop().fadeOut(1e3),--s<0&&(s=e.length-1),n.eq(s).addClass("ac").siblings().removeClass("ac"),e.eq(s).stop().fadeIn(1e3,function(){o=!1}))}),t.on("click",function(){o||(o=!0,e.eq(s).stop().fadeOut(1e3),++s>e.length-1&&(s=0),n.eq(s).addClass("ac").siblings().removeClass("ac"),e.eq(s).stop().fadeIn(1e3,function(){o=!1}))});var a=null;function c(){a=setInterval(function(){t.trigger("click")},3e3)}c(),$("#div1").hover(function(){clearInterval(a)},c)});