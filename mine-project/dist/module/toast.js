"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}define(function(){return new(function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"init",value:function(e){var n=this;this.ele=e,this.ele.onclick=function(){n.pop()},$(this.ele).on("click",function(){n.pop()})}},{key:"pop",value:function(){alert(123)}}]),e}())});