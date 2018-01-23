// 阻塞
// 
// var fs = require('fs');
// 
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log('程序执行完成');
// 
// 
// 非阻塞
// var fs = require('fs');
// fs.readFile('input.txt',function(err,data){
// 	if(err)return console.error(err);
// 	console.log(data.toString());

// });
// console.log('程序执行完成');
// 
// 事件驱动（监听）
// events 模块只提供了一个对象： events.EventEmitter。
// EventEmitter 的核心就是事件触发与事件监听器功能的封装。
// var events = require('events');
// //创建 eventEmitter 对象
// var eventEmitter = new events.EventEmitter();
// //创建时间处理程序
// var connectHandler = function(){
// 	console.log('连接成功');
// 	//触发data_received 事件
// 	eventEmitter.emit('data_received');
// }
// //绑定connection 事件处理程序
// eventEmitter.on('connection',connectHandler);
// //用匿名函数绑定data_reveived事件
// eventEmitter.on('data_received',function(){
// 	console.log('数据接收成功');

// });
// //触发connection事件
// eventEmitter.emit('connection');
// console.log('程序执行完成');
// 
// 
// 监听器各种方法演示
/*var events = require('events');
var eventEmitter = new events.EventEmitter();
//监听器#1
var listen1 = function(){
	console.log('监听器 listen1 执行');
}

var listen2 = function(){
	console.log('监听器 listen2 执行');

}

//绑定test事件,监听器为listen1
eventEmitter.addListener('test',listen1);
//绑定test事件,监听器为listen2
eventEmitter.on('test',listen2);
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'test');
console.log(eventListeners+'个监听器测试事件');
eventEmitter.emit('test');

eventEmitter.removeListener('test',listen1);
console.log('监听器1 已被移出');

eventEmitter.emit('test');
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'test');
console.log(eventListeners+'个监听器测试事件');

console.log('程序执行完成');*/

//缓冲区
//设置缓冲区
/*const buf = Buffer.alloc(256);
//写入缓冲区
var len = buf.write('www.baidu.com');

console.log('写入缓冲区长度为'+len);

console.log('写入缓冲区的字符为'+buf.toString());

const buf2 = Buffer.alloc(6);

var len2 = buf2.write('www.baidu.com');

console.log('写入缓冲区长度为'+ len2);


console.log('写入缓冲区的字符为'+buf2.toString());

//转化为json
const buf3 = Buffer.from('www.baidu.com');
var json = buf3.toJSON(buf3);
console.log(json);*/

//缓冲区合并
/*var buf4 = Buffer.from('佛山大道');
var buf5 = Buffer.from(',季华四路');
var buf6 = Buffer.concat([buf4,buf5]);
console.log('buf6内容:'+buf6.toString());
*/
//比较缓冲区
/*var buf1 = Buffer.from('abc');
var buf2 = Buffer.from('aaa');
var result = buf1.compare(buf2);
var result2 = buf2.compare(buf1);
console.log('compare比较的是创建缓冲区的先后顺序:');
console.log('buf1.compare(buf2)的结果:'+result);
console.log('buf2.compare(buf1)的结果:'+result2);*/
/*var buf1 = Buffer.from('qwerty');
var buf2 = Buffer.from('www.baidu');
buf2.copy(buf1,4);
console.log(buf1.toString());*/

/*ar buf1 = new Buffer('lvyongsen');
console.log(buf1.toString());
var buf2 = Buffer.from('lvyongsen');
console.log(buf1);
var buf3 = Buffer.concat([buf1,buf2]);
console.log(buf3.toString());
var buf4 = buf3.write('lvyonghai',2,3);
console.log(buf3.toString());
var buf5 = buf3.readIntLE(0,5);
console.log(buf3);
console.log(buf5);*/


/*//读取文件
var fs = require('fs');
var data = '';
//创建可读流
var readerStream = fs.createReadStream('input.txt');
//设置编码utf8
readerStream.setEncoding('UTF8');
//处理流
readerStream.on('data',function(x){
	data += x;
});

readerStream.on('end',function(){
	console.log(data);

});
readerStream.on('error',function(err){
	console.log(err.stack);

});
console.log('程序执行完成');*/

//写入文件
/*var fs = require('fs');
var data = '写入文件:作者-->吕永森';
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data,'UTF8');
writeStream.end();
writeStream.on('finish', function() {
    console.log("写入完成。");
});
writeStream.on('error',function(err){
	console.log(err.stack)

});
console.log('程序执行完成');*/

//管道
//从把文件的内容写入另一个文件内
/*var fs = require('fs');
var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);
console.log('程序执行完成');*/

//压缩文件
/*var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

 console.log('程序执行完成');*/

 //解压文件
 /*var fs = require('fs');
 var zlib = require('zlib');

 fs.createReadStream('input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input2.txt'));

console.log('文件解压成功');*/

/*var hello = require('./outside');
hello.world();*/

/*function say(word){
	console.log(word);
}

function execute(someFunction, value){
	someFunction(value);



}

execute(say,'Hello');	*/
//函数和匿名函数就是命名和不命名的区别


//使用http
/*var server = require('./outside');
var route = require('./route');

server.start(route.route);*/

/*console.info('程序开始');
var counter = 10 ;
console.log('计算: %d ', counter);
console.time('获取数据');
console.trace('测试');
console.timeEnd('获取数据');
console.info('程序结束');*/

/*process.stdout.write('Hello World\n');

process.argv.forEach(function(val,index,array){
	console.log(index+':'+val);
})

console.log(process.execPath);

console.log(process.platform);

console.log('当前目录:'+process.cwd());

console.log('当前版本:'+process.version);

console.log(process.memoryUsage());*/

//文件系统
//读取文件
/*var fs = require('fs');
fs.readFile('input.txt',function(err,data){
	if(err){
		return console.error(err);
	}
	console.log('异步读取文件:'+data.toString());

})
var data = fs.readFileSync('input.txt');
console.log('同步读取:'+data.toString());
console.log('程序执行完成');*/
//打开文件
/*var fs = require('fs');
//异步打开
console.log('准备打开文件');
fs.open('input.txt','r+',function(err,data){
	if (err) {
		return console.error(err);
	}
	console.log('文件打开成功');
})
console.log('这是异步打开');*/

//写入文件
// var fs = require('fs');
// console.log('准备写入文件');
// fs.writeFile('input.txt','文件写入人-->吕永森',function(err){
// 	if (err) {return console.error(err);}
// 	console.log('文件写入成功');

// });
// console.log('我现在要读取文件---------------------');
// fs.readFile('input.txt',function(err,data){
// 	if (err) {return console.error(err)}
// 	console.log('异步读取文件:'+data.toString());
// })

//利用open的参数 文件描述符 读取文件
/*var fs = require('fs');
var buf = new Buffer(1024);

console.log('我现在要打开文件');
fs.open('input.txt','r+',function(err,fd){
	if (err) {return console.error(err);}
	console.log('已打开文件');
	console.log('读取文件');
	fs.read(fd,buf,0,buf.length,0,function(err,bytes){
		if (err) {return console.error(err);}
		console.log('读取出的字节数:'+bytes);
		console.log('读取出的字节数:'+bytes);
		console.log('读取出的字节数:'+bytes);
		console.log('读取出的字节数:'+bytes);
		console.log('读取出的字节数:'+bytes);
		console.log('读取出的字节数:'+bytes);

		if (bytes > 0) {
			console.log(buf.slice(0,bytes).toString());
		}

	})
	fs.close(fd,function(err){
		if (err) {return console.error(err);}
		console.log('文件已关闭');
	})

})*/

//截取文件
/*var fs = require('fs');
var  buf = new Buffer(1024);

console.log('读取');
fs.open('input.txt','r+',function(err,fd){
	if (err) {return console.error(err);}
	console.log('成功打开');
	console.log('截取9个字节后文件内容');
	fs.ftruncate(fd,9,function(err){
		if (err) {return console.error(err);}
		console.log('截取成功');
		console.log('读取相同文件');
		fs.read(fd,buf,0,buf.length,0,function(err,bytes){
			if (err) {return console.error(err);}
			if (bytes > 0) {
				
				console.log(buf.slice(0,bytes).toString());
			}
		})
		fs.close(fd,function(err){
			if (err) {return console.error(err)}
			console.log('文件已关闭');
		})
	})
})*/


//删除
/*var fs = require('fs');
console.log('ready to delete file');
fs.unlink('input.txt',function(err){
	if (err) {return console.error(err);}
	console.log('delete success');
})*/

//创建目录
/*var fs = require('fs');
fs.mkdir('/tmp/lvy',function(err){
	if (err) {return console.error(err);}
	console.log('build success');
})
*/
//浏览目录
/*var fs = require('fs');
console.log('look dir /tmp/');
fs.readdir('/tmp',function(err,files){
	if (err) {console.error(err);}
	console.log(files);
	files.forEach(function(file){
		console.log(file);
	})
})*/

//GET请求
/*var http = require('http');
var url = require('url');
var util = require('util');


http.createServer(function(request,response){
	response.writeHead('200',{'Content-Type':'text/plain;charset=utf-8'});
	var params = url.parse(request.url,true).query;
	var params2 = url.parse(request.url,true).pathname;
	response.write('网站名:'+params.name);
	response.write('\n');
	response.write('网站url:'+params.url);
	response.write('\n');
	response.write('地址:'+params2)
	response.write('\n');
	response.end(util.inspect(url.parse(request.url,true)));

}).listen(8888)*/
//POST请求
/*var http = require('http');
var querystring = require('querystring');
var postHtml = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

  http.createServer(function(req,res){
  	var body = '';
  	req.on('data',function(chunk){
  		body += chunk;
  	});
  	req.on('end',function(){
  		//解析参数
  		body = querystring.parse(body);

  		//设置响应头部信息及编码
  		res.writeHead('200',{'Content-Type':'text/html;charset="utf-8'});
  		if (body.name&&body.url) {//内容存在
  			res.write('网站名:'+body.name);
  			res.write('<br>');
  			res.write('网站url:'+body.url);

  		}else{//否则，输出表单
  			res.write(postHtml);
  		}
  		res.end();
  	})
  }).listen(8888);*/

//os模块
/*var os = require('os');
console.log(os.tmpdir());
console.log('cpu字节序:'+os.endianness());
console.log('操作系统主机名:'+os.hostname());
console.log('操作系统名:'+os.type());
console.log('操作系统名(os.platform())'+os.platform());*/

//path模块
/*var path = require('path');
console.log(path.normalize('/tmp/test/../../aaa/aaaa/www'));
var url = path.normalize('/aa/bb/../.././cc/bbb/');
console.log(path.join(url));
console.log(__dirname);
console.log(path.resolve('main.js'))
console.log(path.extname('main.js'))
console.log(path.isAbsolute('main.js'))*/

//net模块
/*var net = require('net');
var server = net.createServer(function(connection){	
	console.log('client connected');
	connection.on('end',function(){
		console.log('客户端关闭连接')
	});
	connection.write('Hello World');
	connection.pipe(connection);

});
server.listen(8888,function(){
	console.log('server is listening')
})*/

var http = require('http');
var fs = require('fs');
var url = require('url');

//创建服务器
//服务器端
http.createServer(function(req,res){
	//解析请求,包括文件名
	var pathname = url.parse(req.url).pathname;
	//输出请求的文件名
	console.log('Request for '+pathname+' received.');
	//从文件系统中读取请求的文件内容
	fs.readFile(pathname.substr(1),function(err,data){
		if (err) {
			console.error(err);
			//HTTP状态码:404
			//Content-Type:text/plain
			res.writeHead(404,{'Content-Type':'text/html'});

		}else{
			//HTTP状态码:200
			res.writeHead(200,{'Content-Type':'text/html'});
			//响应文件内容
			res.write(data.toString());
		}
		res.end();
	})
}).listen(8888);
console.log('Server running!!!!')