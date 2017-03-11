var async = require('async');

function exec(){
//  串行有关联
    async.waterfall(
        [
            function(done){
                i=0;
                setInterval(function(){
                    console.log('data1='+ new Date());
                    i++;
                    if(i==3){
                        clearInterval(this);
                        done(null,'one完毕');
//                done('错误了','one完毕');                        
                    }
                },1000);
            },
            function(preValue,done){
                j=0;
                setInterval(function(){
                    console.log(preValue+'='+ new Date());
                    j++;
                    if(j==3){
                        clearInterval(this);
                        done(null,preValue+',two完毕');
                    }
                },1000);
            }
        ],function(err,rs){
            console.log(err);
            console.log(rs);
        }
    )
}

exec();
console.log('主进程执行完毕');