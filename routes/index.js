
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
		req.session.count = 5;
		res.render("fourth",{});
	}
	else
		res.redirect("/");
};
exports.fifth = function(req,res){
	if(req.session.count == 5){
		res.render("fifth",{});
	}
	else
		res.redirect("/");
};
exports.sixth = function(req,res){
	console.log("come in to sixth exam");
	if(req.session.count == 6){
		console.log("sixth exam success!");
		res.render("sixth",{});
	}
	else
		res.redirect("/");
};
exports.seventh = function(req,res){
	if(req.session.count == 7){
		res.render("seventh",{});
	}
	else
		res.redirect("/");
};