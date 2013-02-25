
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , check = require("./routes/check")
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.post("/first_check",check.first_check);
app.get("/second",routes.second);
app.post("/second_check",check.second_check);
app.get("/third",routes.third);
app.post("/third_check",check.third_check);
app.get("/fourth",routes.fourth);
app.get("/fifth",routes.fifth);
app.post("/fifth_check",check.fifth_check);
app.get("/sixth",routes.sixth);
app.post("/sixth_check",check.sixth_check);
app.get("/seventh",routes.seventh);
app.post("/seventh_check",check.seventh_check);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
