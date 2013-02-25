exports.first_check = function(req,res){
	if(req.session.count == 1 && req.body.info == "pass"){
		req.session.count = 2;
		res.writeHead(200, {'content-type': 'text/json' });
		res.write( JSON.stringify({ result : "success"}) );
		res.end('\n');
	}
};
exports.second_check = function(req,res){
	if(req.session.count == 2 && req.body.psw == "bf66f1eecca8f3eb"){
		req.session.count = 3;
		success(res);
	}
	else{
		fail(res);		
	}
	/*text*/
};
exports.third_check = function(req,res){
	if(req.session.count == 3 && req.body.info == "Happy Python Year and Best Wish for you !"){
		req.session.count = 4;
		success(res);
	}
	else{
		fail(res);		
	}
};
exports.fifth_check = function(req,res){
	if(req.session.count == 5 && req.body.info =="pass"){
		console.log("fifth success!");
		req.session.count = 6;
		success(res);
	}
	else{
		fail(res);		
	}
}

function success(res){
	res.writeHead(200, {'content-type': 'text/json' });
	res.write( JSON.stringify({ result : "success"}) );
	res.end('\n');
}
function fail(res){
	res.writeHead(200, {'content-type': 'text/json' });
	res.write( JSON.stringify({ result : "wrong"}) );
	res.end('\n');
}