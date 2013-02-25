
/*
 * GET home page.
 */

exports.index = function(req, res){
	req.session.count = 1;
    res.render('first', { title: 'Express' });
};
exports.second = function(req,res){
	if(req.session.count == 2){
		res.render("second",{});
	}
	else
		res.redirect("/");
	
};
exports.third = function(req,res){
	if(req.session.count == 3){
		res.render("third",{});
	}
	else
		res.redirect("/");
};
exports.fourth = function(req,res){
	if(req.session.count == 4){
		res.render("fourth",{});
	}
	else
		res.redirect("/");
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