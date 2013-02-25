$(document).ready(function(){
	$(".code-btn").click(pass);
});
function pass(){
	$(".point-container").css("display","block");
	$.ajax({
		url : "/third_check",
		data : {
			info : $(".code-input").val()
		},
		dateType : "json",
		type : "post",
		cache : false,
		success : function(data){
			if(data.result == "success"){
				window.location.href = "/fourth";
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