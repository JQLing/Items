var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'action': verify,
    'captcha': draggable_7d02bce7dfed35a6afa03262b101b785,
    'captcha_id': 1481806511 +60761400
});

var options = {
    hostname: 'bbs.55bbs.com',
    port: 80,
    path: '/captcha.process.php',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': '55bbs_pageWidth=1102%7C8035; bdshare_firstime=1481805578835; z_pro_city=s_provice%3Dhenan%26s_city%3Danyang; 5Mg_BackgroundImageId=3; 5Mg_55auth_uid=39964691; 5Mg_ip=120.194.53.36; 5Mg_cookietime=2592000; 5Mg_sid=hLIhgQ; 5Mg_auth=PihHvFjtn017Tzoptmxx8Lan; Hm_lvt_8b5ba22d8a39ed5f13c34402db63b51a=1481805595; Hm_lpvt_8b5ba22d8a39ed5f13c34402db63b51a=1481805625; 5Mg_fid16=1481805774; 5Mg_visitedfid=19D16; 5Mg_fid19=1481806303; 5Mg_oldtopics=D9999517D9993391D10035341D9963674D; Hm_lvt_85b3587e89215570b2de602fb8bd93c0=1481805577; Hm_lpvt_85b3587e89215570b2de602fb8bd93c0=1481806517; smile=1D1; Hm_lvt_dbf7966275372bffa3846649aa53f35a=1481805579; Hm_lpvt_dbf7966275372bffa3846649aa53f35a=1481806517',
        'Host': 'bbs.55bbs.com',
        'Origin': 'http://bbs.55bbs.com',
        'Referer':'http://bbs.55bbs.com/post.php?action=reply&fid=19&tid=9999517&extra=1'
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
};

var req = http.request(options,function(res){
    console.log('Status: ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));
    
    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });
//    数据接收完毕，关闭连接
    res.on('end',function(){
    console.log('评论完毕!');
    });
});

req.on('error',function(e){
    console.log('Error: '+ e.message);
});
//  数据写入请求体
req.write(postData);
//及时请求体为空，也关闭
req.end();