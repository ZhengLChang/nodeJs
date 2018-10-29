var nodemailer = require("nodemailer");
var http = require('http');
/**/
var mailOptions = {
  from: '13007568302@163.com',
  to: 'zhenghuijie@atcom.com.cn',
//to: '13007568302@163.com',
  subject: 'Hello',
  text: 'Hello, World',
  index: 0
};


var mysql = require('mysql');
var mysqlConn = mysql.createConnection({
host: '127.0.0.1',
user: 'root',
password: 'zheng',
database: 'day_job',
timezone: 'Asia/Shanghai'
    });
mysqlConn.connect();

var mailTrans = nodemailer.createTransport({
service: '163',
auth: {
  user: '13007568302@163.com',
  pass: '13073shanguangy'
}
    });

function sendMailByPlan(){
  mysqlConn.query("select * from plan where trigger_date <= NOW() and isSent = 0", function(err, result){
    var size = result.length;
    var i = 0;
    for(i = 0; i < size; i++)
    {
      {
        var myOptions = mailOptions;
        myOptions.subject = result[i]["subject"];
        myOptions.text = result[i]["data"];
        myOptions.index = result[i]["index"];
        mailTrans.sendMail(myOptions, function(error, info){
          if(error){
            console.log(error);
          }else{
         }
      });
        var mysqlQuery = "update plan set isSent = 1 where `index`=1";
        console.log(mysqlQuery);
        mysqlConn.query("update plan set isSent = 1 where plan.index=" + result[i]['index'], function(err, info){});
      }
    }
  });
}
function sendMailByNewShare(){
  var options = {
    hostname: 'dcfm.eastmoney.com',
    port: 80,
    path: '/em_mutisvcexpandinterface/api/js/get?type=XGSG_LB&token=70f12f2f4f091e459a279469fe49eca5&st=purchasedate,securitycode&sr=-1&p=1&ps=50&js=var%20GDcpcZgv={pages:(tp),data:(x)}&rt=51356715',
    method: 'GET'
};

var req = http.request(options, function(res){
    var data = '';
    res.setEncoding('utf8');
    res.on('data', function(chunk){
        data += chunk;
      })
    res.on('end', function(){
      eval(data);
      var xgPages = GDcpcZgv.pages;
      var xgData = GDcpcZgv.data;
      var i = 0;
      console.log(new Date(Date.now()));
      for(i = 0; i < xgPages; i++)
      {
        console.log(xgData[0].purchasedate);
        console.log(new Date(xgData[0].purchasedate));
        if(new Date(xgData[0].purchasedate) < new Date(Date.now() - 11 * 60 * 60))
        {
            break;
        }
      }

      });
    });
req.end();
}
setInterval(sendMailByNewShare, 30000);
setInterval(sendMailByPlan, 30000);
mysqlConn.end();

