// JavaScript Document
var lisNode=document.querySelectorAll("#banner-main li");//返回id下所有的li；这是个集合类数组
for(var i=0;i<lisNode.length;i++){
	lisNode[i].onmouseover=function(){
		var old;
		for(var j=0;j<lisNode.length;j++){
			if(lisNode[j].className=="current"){
				old=j;
				break;
				}
			
		}
		lisNode[old].className="";
		this.className="current";//给当前触发事件的对象(标签)加上属性class="current"
	}
}