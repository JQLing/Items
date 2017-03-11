//慕课网上的评论
var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'checked':1,
    'content':'嘻嘻，撒花撒欢~~~',
    'mid':'8837'
});
var options = {
    hostname:'www.imooc.com',
    port:80,
    path: '/video/8837',
    method:'POST',
    headers:{
        'Accept' : 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding' : 'gzip, deflate',
        'Accept-Language' : 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
        'Connection' : 'keep-alive',
        'Content-Length' : postData.length,
        'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8',
        'Cookie' : 'imooc_uuid=61aab9c1-b938-451f-8918-17434d46161e;imooc_isnew=2; imooc_isnew_ct=1468660886;Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1481776868,1481781770,1481783902,1481857650; loginstate=1; apsid=MxYjlmMDdlMTc4OGQ1YTFkZWFkNjBhYmZiNWUwZTMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzAyODE5OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkzZTc5ZjIzOTAxZDRkMjc0ODYzMjE5ZmJlOWRkYTViZIs2WGSLNlg%3DMW; PHPSESSID=0iiuqc1jqc0mqrm1kv3uo9t1h2; cvde=58535a5f8d32b-126;Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1482049878;IMCDNS=0',
        'Host' : 'www.imooc.com',
        'Referer' : 'http://www.imooc.com/video/8837',
        'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0',
        'X-Requested-With' : 'XMLHttpRequest'
    }
}

var req = http.request(options,function(res){
    console.log('Status:'+ res.statusCode);
    console.log('headers:'+ JSON.stringify(res.headers));
    
    
    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });
    res.on('end',function(){
        console.log('评论完毕！');
    });
});
req.on('error',function(e){
    console.log('Error: '+e.message);
});
req.write(postData);
req.end();
