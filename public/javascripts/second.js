$(document).ready(function(){
	$(".code-btn").click(pass);
});
function pass(){
	$.ajax({
		url : "/second_check",
		data : {
			psw : $(".code-input").val()
		},
		dateType : "json",
		type : "post",
		cache : false,
		success : function(data){
			if(data.result == "success"){
				window.location.href = "/third";
			}
			else if(data.result == "wrong"){
				$(".code-input").css("background","red");
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