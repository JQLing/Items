var fs = require('fs');

module.exports = {
    readfileSync:function(path){
        var data = fs.readFileSync(path,'utf-8');
        console.log(data);
        console.log('同步读文件执行完毕');
    },
    readfile:function(path,recall){
        fs.readFile(path,function(err,data){
            if(err){
                console.log('错误信息：'+err);
                recall('文件不存在');
            }else{
                console.log(data.toString());
                recall(data);
            }
        });
        console.log('异步读文件执行完成');
    },
    writefileSync:function(path,data){
        console.log('同步写文件执行完毕');
    },
    writefile:function(path,data,recall){
        fs.writeFile(path,data,function(err){
            if(err){
                console.log('err');
            }else{
                console.log('异步写入文件');
            }
        })
        console.log('异步执行完成');
    },
    readImg:function(path,res){
        fs.readFile(path,'binary',function(err,filedata){
            if(err){
                console.log(err);
                return ;
            }else{
                console.log('输出图片');
                res.write(filedata,'binary');
                res.end('');
            }
        });
    }
    
};