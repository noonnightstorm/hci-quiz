
/*
 * GET home page.
 */

exports.index = function(req, res){
	req.session.count = 1;
    res.render('first', { title: 'Express' });
};
exports.first_check = function(req,res){
	if(req.session.count == 1 && req.body.info == "pass"){
		req.session.count = 2;
		res.writeHead(200, {'content-type': 'text/json' });
		res.write( JSON.stringify({ result : "success"}) );
		res.end('\n');
	}
};
exports.second = function(req,res){
	if(req.session.count == 2){
		res.render("second",{});
	}
	else
		res.redirect("/");
	
};
exports.third = function(req,res){
	if(req.session.count == 2)
		req.session.count = 3;
	else
		res.redirect("/");
	res.render("third",{});
};
exports.fourth = function(req,res){
	if(req.session.count == 3)
		req.session.count = 4;
	else
		res.redirect("/");
	res.render("fourth",{});
};
exports.fifth = function(req,res){
	if(req.session.count == 4)
		req.session.count = 5;
	else
		res.redirect("/");
	res.render("fifth",{});
};
exports.sixth = function(req,res){
	if(req.session.count == 5)
		req.session.count = 6;
	else
		res.redirect("/");
	res.render("sixth",{});
};
exports.seventh = function(req,res){
	if(req.session.count == 6)
		req.session.count = 7;
	else
		res.redirect("/");
	res.render("seventh",{});
};