"use strict";define(function(){function n(){}return n.prototype.init=function(){$("#header").load("/html/component/header.html",function(){$("#header h1").on("click",function(){alert($(this).html())})})},new n});