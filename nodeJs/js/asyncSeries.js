var async = require('async');
function oneFun(){
//    setTimeout(function(){
//        
//    },1000);
    i=0;
    setInterval(function(){
        console.log('data1='+ new Date());
        i++;
        if(i==3){
            clearInterval(this);
        }
    },1000);
    console.log('oneFun执行');
}
function twoFun(){
    j=0;
    setInterval(function(){
        console.log('data2='+ new Date());
        j++;
        if(j==3){
            clearInterval(this);
        }
    },1000);
    console.log('twoFun执行');
}
//oneFun();
//twoFun();









function exec(){
//    异步操作的 串行无关联
    async.series(
        {
            one:function(done){
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
            two:function(done){
                j=0;
                setInterval(function(){
                    console.log('data2='+ new Date());
                    j++;
                    if(j==3){
                        clearInterval(this);
                        done(null,'two完毕');
                    }
                },1000);
            }
        },function(err,rs){
            console.log(err);
            console.log(rs);
        }
    )
}

exec();
console.log('主进程执行完毕');