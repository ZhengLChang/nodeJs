var http = require("http");
var querystring = require('querystring');
var hostName = '127.0.0.1';
var port = 8988;
var path = require("path"),
    fs = require("fs");
var url = require("url");
/*
var postHTML =
    '<html><head><meta charset="utf-8"><title>ATCOM Provision Tool</title></head>' +
        '<body>' +
	    '<form method="post">' +
	      '网站名： <input name="name"><br>' +
	   '网站 URL： <input name="url"><br>' +
	       '<input type="submit">' +
	    '</form>' +
	        '</body></html>';
		*/
var server = http.createServer(function(req, res){
		var pathname = __dirname+url.parse(req.url).pathname;
		var body = "";

		req.on('data', function(chunk){
			body += chunk; 
			console.log(chunk);
		});
		req.on('end', function(){
			console.log(body);
		});

		if(path.extname(pathname) == '.cgi')
		{
			var createFileNum,
				firstAccount,
				firstMacAddr;
			body = querystring.parse(body);
			res.writeHead(200, {"Content-Type": "text/plain"});
			
			console.log("body: ", body);
			res.end('{"return_code": 0,"return_prompt": "Success"}');
			return;
		}
		if(path.extname(pathname) == "")
		{
			pathname += "/";	
		}
		if(pathname.charAt(pathname.length - 1) == "/"){
			pathname += "index.html";
		}
		fs.exists(pathname, function(exists){
			if(exists)
			{
				switch(path.extname(pathname))
				{
				case '.html':
				res.writeHead(200, {"Content-Type": "text/html"});
				break;
				case '.js':
				res.writeHead(200, {"Content-Type": "text/javascript"});
				break;
				case '.css':
				res.writeHead(200, {"Content-Type": "text/css"});
				break;
				case '.gif':
				res.writeHead(200, {"Content-Type": "image/gif"});
				break;
				case '.jpg':
				res.writeHead(200, {"Content-Type": "image/jpeg"});
				break;
				case '.png':
				res.writeHead(200, {"Content-Type": "image/png"});
				break;
				default:
				res.writeHead(200, {"Content-Type": "application/octet-stream"});
				break;
				}
				fs.readFile(pathname, function(err, data){
					res.end(data);
				});
			}else{
				res.writeHead(404, {"Content-Type": "text/html"});
				res.end("<h1>404 Not Found</h1>");
			}
		});
		/*
		res.setHeader('Content-Type', 'text/plain');
		res.end("hello nodejs");
		*/
		/*
		var body = "";
		console.log(req.url);

		req.on('data', function(chunk){
			body += chunk;
			console.log('chunk: ', chunk);
		});
		req.on('end', function(){
			body = querystring.parse(body);
			console.log("body: ", body);
			res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
			if(body.name && body.url)
			{
				res.write("<html><head><meta charset='utf-8'></head>");
				res.write("<body>");
				res.write("<p>name: " + body.name + "</p>");
				res.write("<p>url: " + body.url + "</p>");
				res.write("</body>");
				res.write("</html>");
			
			}
			else
			{
				res.write(postHTML);
			}
			res.end();
		});
		*/
}).listen(port, hostName, function(){
		console.log(hostName + ":" + port);
		});
