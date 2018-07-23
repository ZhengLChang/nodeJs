function creatFileAndWriteToFile(fileName, account, password)
{
	try{
		const fs = require('fs');
		/*
		fs.writeFile(fileName, account);
		fs.writeFile(fileName, password);
		*/
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
//creatFileAndWriteToFile("./test.file", "123", "456");
console.log(isDirExist("./test.file"));

