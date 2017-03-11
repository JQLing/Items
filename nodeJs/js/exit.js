//exit回调事件中只接受同步操作,setTimeout为异步
process.on('exit',function(code){
    setTimeout(function(){
        console.log('This will not run');
    },0);
    console.log('exit code: ',code);
});