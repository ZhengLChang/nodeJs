var http = require("http");
var querystring = require('querystring');
var hostName = '127.0.0.1';
var port = 8989;
var path = require("path"),
    fs = require("fs");
var url = require("url");

var server = http.createServer(function(req, res){
	var pathname = __dirname+url.parse(req.url).pathname;
	var body = "";
	var buffers = [];
	var nread = 0;

	req.on('data', function(chunk){
		try{
			body += chunk;
		}
		catch(err)
		{
			console.log(err.message);
		}
	});
	req.on('end', function(){
		try{
			if(path.extname(pathname) == '.cgi'){
				var createFileNum,
					firstAccount,
					accountNum,
					firstMacAddr,
					otherData;
				body = querystring.parse(body);
				res.writeHead(200, {"Content-Type": "text/plain"});

				createFileNum = body.createFileNum;
				firstAccount = body.firstAccount;
				accountNum = body.accountNum;
				firstMacAddr = body.firstMacAddr;
				otherData = body.otherData;
			
				console.log("crete File Num: " + createFileNum);
				console.log("first account: " + firstAccount);
				console.log("account Number: " + accountNum);
				console.log("firstMacAddr: " + firstMacAddr);
				console.log("otherData: " + otherData);
				
				createMacProvisionDir(createFileNum,
					firstAccount,
					accountNum,
					firstMacAddr,
					otherData, function(macpath){
						if(macpath != -1){
							res.end('{"return_code": 0,"return_prompt": ' + '"' + macpath.replace(new RegExp('/', "g"), ' ').replace(new RegExp('\\\\', "g"), ' ') + '"}');
						}
						else{
							res.end('{"return_code": -1,"return_prompt": "Failed"}');
						}
					});
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
			}catch(error){
				console.log(error.message);
				res.writeHead(200, {"Content-Type": "text/plain"});
				res.end('{"return_code": 0,"return_prompt": "Success"}');

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

var macPlusPlus = function(macAddr){
	var macAddrExample = "00:01:02:03:04:05";
	try{
	var mac_space;
    	var i = 0, count = macAddr.length;
	var newMacAddr = "00:01:02:03:04:05", tmpMacAddr = [];

	if(macAddrExample.length != count)
		return macAddrExample;

	mac_space = parseInt(macAddr.split(":").join(''), 16);
	mac_space++;
	tmpMacAddr = mac_space.toString(16).toUpperCase().split('');
	newMacAddr = newMacAddr.split('');
	for(i = 0, j = 0; i < count; i++)
	{
		if((i + 1) % 3 == 0)
			continue;
		newMacAddr[i] = tmpMacAddr[j];	
		j++;
	}
	newMacAddr = newMacAddr.join('')
	console.log(newMacAddr);
	return newMacAddr;
	}
	catch(err){
		console.log("error occur: " + err.message);
		return macAddrExample;
	}
	/*
	var macAddrExample = "00:01:02:03:04:05";
	try{
	var mac_space = 0,
    		i = 0, count = macAddr.length;	    
	var newMacAddr = "00:01:02:03:04:05";
	if(macAddrExample.length != count)
		return macAddrExample;
	for(i = 0, mac_space = 0; i < count; i++)
	{
		var curNum = macAddr.charCodeAt(i);
		if(curNum >= '0'.charCodeAt(0) && 
				curNum <= '9'.charCodeAt(0))
		{
			mac_space = (mac_space << 4);
			mac_space += curNum - '0'.charCodeAt(0);
			//console.log(curNum - '0'.charCodeAt(0));
		}
		else if(curNum >= 'a'.charCodeAt(0) && 
				curNum <= 'f'.charCodeAt(0))
		{
			mac_space = (mac_space << 4);
			mac_space += curNum - 'a'.charCodeAt(0) + 10;
		}
		else if(curNum >= 'A'.charCodeAt(0) && 
				curNum <= 'F'.charCodeAt(0))
		{
			mac_space = (mac_space << 4);
			mac_space += curNum - 'A'.charCodeAt(0) + 10;
		}
		else if(curNum == ':'.charCodeAt(0) && (i + 1) % 3 == 0)
		{
			continue;
		}
		else
		{
			return macAddrExample;
		}
	}
		mac_space++;
		newMacAddr = newMacAddr.split('');
		for(i = 0; i < count; i++)
		{
			var num = 0;
			if((i + 1) % 3 == 0)
			{
				continue;
			}
			num = mac_space - (mac_space & (~0x0f));

			if(num >= 0 && num <= 9)
			{
				newMacAddr[i] = num;
			}
			else
			{
				newMacAddr[i] = String.fromCharCode(num + 'A'.charCodeAt(0) - '' - 10);
			}
			mac_space = mac_space >> 4;
		}
		newMacAddr = newMacAddr.reverse().join('');
		return newMacAddr;
	}catch(err)
	{
		console.log("error occur: " + err.message);
		return macAddrExample;
	}
	*/
}

function creatFileAndWriteToFile(fileName, account, password)
{
	try{
		const fs = require('fs');
		fs.open(fileName, "w", function(err, fd){
			if(err)	{
				throw err;
			}
			fs.write(fd, account + "\n", function(){});
			fs.write(fd, password + "\n", function(){});
			fs.close(fd, function(){});
		});
	}catch(err){
		console.log(err.message);
	}
}
function writeToFileByIni(fd, section, value)
{
	try{
		fs.write(fd, section + " = ", function(){});
		fs.write(fd, value + "\n", function(){});
	}
	catch(err){
		console.log("Error Occur: " + writeToFileByIni);
	}
}

function isDirExist(path)
{
	const fs = require('fs');
	try{
		return fs.existsSync(path, function(exists){
			return exists;
		});
	}
	catch(err){
		console.log(err.message);
		return false;
	}
}
function createMacProvisionDir(createFileNum,
				firstAccount,
				accountNum,
				firstMacAddr,
				otherData, callback)
{
	try{
	const fs = require('fs');
	var /*pathname = __dirname*/pathname = (process.platform === 'win32') ? process.env.HOMEPATH : process.env.HOME,

		macpath = pathname + "/MacProvison";
	var i = 0;
	if(isDirExist(macpath))
	{
		macpath += i;
		for(i = 0; isDirExist(macpath); i++)
		{
			macpath = macpath.split('');
			macpath[macpath.length - 1] = i;
			macpath = macpath.join('');
		}
	}
	console.log("macpath: " + macpath);
//	return true;
	fs.mkdir(macpath, 0777, function(err){
		var nextMacAddr = firstMacAddr,
			curAccount = firstAccount;
		if(err)
			throw err;
		for(var i = 0; i < createFileNum; i++, nextMacAddr = macPlusPlus(nextMacAddr))
		{
			var fileName = macpath + "/" + nextMacAddr.split(':').join('') + ".cfg";

			console.log("newMacAddr: " + nextMacAddr);
			console.log("filename = " + fileName);
			fs.open(fileName, "w", function(err, fd){
				if(err)	{
					throw err;
				}
				fs.write(fd, "#!version:1.0.0.1\n", function(){});
				for(var accIndex = 0; accIndex < accountNum; accIndex++, curAccount++)
				{
					writeToFileByIni(fd, "account."+(Number(accIndex)+1)+".enable", 1)
					writeToFileByIni(fd, "account."+(Number(accIndex)+1)+".label", curAccount)
					writeToFileByIni(fd, "account."+(Number(accIndex)+1)+".display_name", curAccount)
					writeToFileByIni(fd, "account."+(Number(accIndex)+1)+".auth_name", curAccount)
					writeToFileByIni(fd, "account."+(Number(accIndex)+1)+".user_name", curAccount)
				}
				fs.write(fd, otherData, function(){});
				fs.close(fd, function(){});
			});
		}
		callback(macpath);
	});
	
	}
	catch(err)
	{
		console.log("Error Occur: " + "createMacProvisionDir " + err.message);
		callback(-1);
	}
}













