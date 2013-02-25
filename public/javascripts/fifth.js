window.onload = function(){
	$(".code-text").keyup(getCSS).change(getCSS);
	$(".code-check-btn").click(pass);
}
var Check = {
	box_top : 0,
	box_left : 0,
	checkAll : function(){
		Check.box_top = $(".pic-box").offset().top;
		Check.box_left = $(".pic-box").offset().left;
		var mark = Check.check_H() && Check.check_C() && Check.check_I();
		return mark;
	},
	check_H : function(){
		var top = $(".pic_H").offset().top-Check.box_top;
		var left = $(".pic_H").offset().left-Check.box_left;
		var mark = Check.checkTop(top,210) && Check.checkLeft(left,78) && Check.checkRotate("H-code") && Check.checkScale("H-code");
		return mark;
	},
	check_C : function(){
		var top = $(".pic_C").offset().top-Check.box_top;
		var left = $(".pic_C").offset().left-Check.box_left;
		var mark = Check.checkTop(top,210) && Check.checkLeft(left,226) && Check.checkRotate("C-code") && Check.checkScale("C-code");
		return mark;
	},
	check_I : function(){
		var top = $(".pic_I").offset().top-Check.box_top;
		var left = $(".pic_I").offset().left-Check.box_left;
		var mark = Check.checkTop(top,210) && Check.checkLeft(left,352) && Check.checkRotate("I-code") && Check.checkScale("I-code");
		return mark;
	},
	checkTop : function(a,b){
		if(Math.abs(a-b)<=5)
			return true;
		else
			return false;
	},
	checkLeft : function(a,b){
		if(Math.abs(a-b)<=5)
			return true;
		else
			return false;
	},
	//这2个太难判断了，只是判断有没旋转过和翻转过
	checkRotate : function(id){
		var text = $("#"+id).val();
		if(text.indexOf("rotate") != -1)
			return true;
		else
			return false;
	},
	checkScale : function(id){
		var text = $("#"+id).val();
		if(text.indexOf("scale") != -1)
			return true;
		else
			return false;
	}
};
function getCSS(){
	var text = $(this).val();
	text = text.replace(/\s+/gmi,""); 
	text = text.replace("/n",""); 
	if(text[text.length-1] == ";"){
		var items = text.split(";");
		for(var i=0;i<items.length;i++){
			var item = items[i];
			var css = item.split(":");
			var name = new String(css[0]);
			var property = new String(css[1]);
			execute($(this).attr("id"),css[0],css[1]);
		}
	}
}
function execute(selector,name,property){
	if(property == undefined){
		return;
	}
	var id=null;
	if(selector == "H-code")
		id="pic_H";
	else if(selector == "C-code")
		id="pic_C";
	else if(selector == "I-code")
		id="pic_I";
	else{
		return;
	}
	/*console.log(name);
	console.log(property);*/
	$("."+id).css(name,property);
}

function pass(){
	if(Check.checkAll() == true){
		$.ajax({
			url : "/fifth_check",
			data : {
				info : "pass"
			},
			dateType : "json",
			type : "post",
			cache : false,
			success : function(data){
				console.log(data);
				if(data.result == "success"){
					window.location.href = "/sixth";
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


/*-webkit-transform:rotate(180deg) scale(-1,1);
top:210px;
left:78px;*/

/*-webkit-transform:rotate(180deg) scale(-1,1);
top:210px;
left:226px;*/

/*-webkit-transform:rotate(180deg) scale(-1,1);
top:210px;
left:352px;*/