var optfile = require('./optfile');
var url = require('url');
var querystring = require('querystring');

module.exports = {
    login:function(req,res){
//    get方式接收数据
/*        var data = url.parse(req.url,true).query;
        console.log(data);
        if(data['username']!=undefined){
            console.log(data['username']);
        }
*/    
//    post方式接收数据
    var post='';
    req.on('data',function(chunk){
//    通过req的data事件监听函数，每当接收到请求体的数据，就累加到post变量中
        post += chunk;
});
//    异步
    req.on('end',function(){
//        在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回
        post = querystring.parse(post);
        res.write('收到参数'+post['email']+'\n');
        res.end('');
    });
    data = optfile.readfileSync('../html/login.html');
    res.write(data);
    res.end('');
}
}