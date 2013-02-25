window.onload = function(){
	Code.init();
	/*$(".add-code-btn").click(Code.addCode);*/
	$(".code-btn").click(Code.move);
	$(".add-code-btn").click(Code.init);
}
var Code = {
	A : [],
	B : [],
	C : [],
	count : 0,
	init : function(){
		/*初始化记录数据*/
		Code.count=0;
		var node = $(".code-box-row")[0];
		var child = $(node).clone(true);
		$(".clone-box").remove();
		$(".code-btn").show();

		this.A = [];
		this.B = [];
		this.C = [];
		this.A.push(4);
		this.A.push(3);
		this.A.push(2);
		this.A.push(1);

		/*初始化样式*/
		for(var i=1;i<=3;i++)
		$(".pillar-0"+i).css({
			"top" : "30px",
			"left" : parseInt(200+300*(i-1)) +"px",
			"z-index" : "0"
		});
		for(var i=1;i<=4;i++)
		$(".discus-0"+i).css({
			"top" : parseInt(130+55*(i-1)) +"px",
			"left" : parseInt(125-15*(i-1)) +"px",
			"z-index" : parseInt(5-i)
		});
	},
	move : function(){
		if(Code.count>14){
			Code.init();
			return ;
		}

		var from = $(this).siblings(".code-from").val();
		var to = $(this).siblings(".code-to").val();
		if(from == to){
			return;
		}
		var from_val = Code[from].pop();
		var to_val = Code[to].pop();
		var from_index = parseInt(from.charCodeAt())-65 ;
		var to_index = parseInt(to.charCodeAt())-65 ; ;
		if(!to_val){
			//成功了
			Code[to].push(from_val);
			$(".discus-0"+from_val).css({
				"top" : "295px",
				"left" : parseInt(125-15*(from_val-1)+300*to_index) + "px"
			});
			Code.addCode();
		}
		else{
			if(from_val<to_val){
				//成功了
				Code[to].push(to_val);
				Code[to].push(from_val);
				var under_discus = Code[to].length;
				$(".discus-0"+from_val).css({
					"top" : parseInt(295-55*(under_discus-1)) + "px",
					"left" : parseInt(125-15*(from_val-1)+300*to_index) + "px"
				});
				Code.addCode();
			}
			else{
				//失败了
				Code[to].push(to_val);
				Code[from].push(from_val);
			}
		}
		/*console.log(Code.A);
		console.log(Code.B);
		console.log(Code.C);*/
		/*var radius = $(this).css("-webkit-border-top-left-radius")||$(this).css("-moz-border-top-left-radius")||$(this).css("border-top-left-radius");*/
		/*console.log($(this).css("-webkit-border-top-left-radius"));*/
	},
	addCode : function(){
		if(Code.count==14){
			/*console.log(Code.check());*/
			if(Code.check() == true)
				pass();
		}

		$(".code-btn").hide();

		var node = $(".code-box-row")[0];
		$(node).clone(true).addClass("clone-box").appendTo(".code-box");

		var length = $(".code-btn").length;
		var code_btns = $(".code-btn");
		$(code_btns[length-1]).show();
		Code.count++;
	},
	check : function(){
		if(Code["C"].length != 4)
			return false;
		var first_dicus = Code["C"].pop();
		var second_dicus = Code["C"].pop();
		var third_dicus = Code["C"].pop();
		var fourth_dicus = Code["C"].pop();
		if(first_dicus == 1 && second_dicus == 2 && third_dicus == 3 && fourth_dicus == 4)
		return true;

		return false; 
	}
};

function pass(){
	$.ajax({
		url : "/sixth_check",
		data : {
			info : "pass"
		},
		dateType : "json",
		type : "post",
		cache : false,
		success : function(data){
			console.log(data);
			if(data.result == "success"){
				window.location.href = "/seventh";
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