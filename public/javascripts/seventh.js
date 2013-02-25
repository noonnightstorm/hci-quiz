window.onload = function(){
	$(".code-text").keyup(getCSS).change(getCSS);
	$(".submit").click(pass);
}

var Check = {
	checkAll : function(){
		var mark = Check.checkCircle() && Check.checkTriangle();
		return mark;
	},
	checkCircle : function(){
		var circle = $("#circle");
		var width = $(circle).css("width");
		var height = $(circle).css("height");
		var radius =  $(circle).css("-webkit-border-top-left-radius")||$(circle).css("-moz-border-top-left-radius")||$(circle).css("border-top-left-radius");
		var backgroundColor = $(circle).css("background-color");
		backgroundColor = changeColor(backgroundColor);
		var mark = Check.checkItem(width,"150px") && Check.checkItem(height,"150px") && (Check.checkItem(radius,"75px")||Check.checkItem(radius,"50%")) && Check.checkItem(backgroundColor,"#ff9333");
		return mark;
	},
	checkTriangle : function(){
		var triangle = $("#triangle");
		var width = $(triangle).css("width");
		var height = $(triangle).css("height");
		var borderWidth = $(triangle).css("border-width");
		var borderStyle = $(triangle).css("border-style");
		var borderRightColor = $(triangle).css("border-right-color");
		borderRightColor = changeColor(borderRightColor);
		var mark = Check.checkItem(width,"0px") && Check.checkItem(height,"0px") && Check.checkItem(borderWidth,"80px") &&Check.checkItem(borderStyle,"solid") &&Check.checkItem(borderRightColor,"#ff9333");
		return mark;
	},
	checkItem : function(result,answer){
		if(result == answer)
			return true;
		else
			return false;
	}
};


function getCSS(){
	var text = $(this).val();
	text = text.replace(/\n+/gmi,"");
	if(text[text.length-1] == ";"){
		var items = text.split(";");
		for(var i=0;i<items.length;i++){
			var item = items[i];
			var css = item.split(":");
			var name = new String(css[0]);
			name = name.replace(/\s+/gmi,"");
			var property = new String(css[1]);
			execute($(this).attr("id"),name,property);
		}
	}
}
function execute(selector,name,property){
	if(property == undefined){
		return;
	}
	var id=null;
	if(selector == "circle-code")
		id="circle";
	else if(selector == "triangle-code")
		id="triangle";
	else
		return;
	$("#"+id).css(name,property);
}
function changeColor(color){
	if(color.indexOf("#")==-1){
		var temp_str = color.replace(/[A-Za-z()]/gmi,"");
		var items = temp_str.split(",");
		var result = "#";
		for(var i=0;i<items.length;i++){
			items[i] = parseInt(items[i]).toString(16);
			if(items[i].length == 1)
				items[i] = "0"+items[i];
			result+=items[i];
		}
		/*console.log(result);*/
		return result;
	}
	else
		return color;
}
function pass(){
	if(Check.checkAll() == true){
		$.ajax({
			url : "/seventh_check",
			data : {
				info : "pass"
			},
			dateType : "json",
			type : "post",
			cache : false,
			success : function(data){
				console.log(data);
				if(data.result == "success"){
					/*window.location.href = "/seventh";*/
					alert("Thank for your texting!It will be On-line on this Sunday normally!");
					window.location.href = "/";
				}
				else{
					window.location.href = "/";
				}
			},
			error : function(){
				alert("发送信息失败");
			}
		});
	}
	else{
		$(".code-text").css("background","red");
	}
}