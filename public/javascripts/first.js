$(document).ready(function(){
	$(".pass-btn").click(pass);
});

function pass(){
	$.ajax({
		url : "/first_check",
		data : {
			info : "pass"
		},
		dateType : "json",
		type : "post",
		cache : false,
		success : function(data){
			console.log(data.result);
			if(data.result == "success")
			window.location.href = "/second";
		},
		error : function(){
			alert("发送信息失败");
		}
	});
}