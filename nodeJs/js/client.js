var net = require('net');

var client = net.connect({port:2000},function(){
    console.log('connected to server');
    client.write('World!\r\n');
});

client.on('data',function(data){
    console.log('client got data from server:',data.toString());
//    断开连接
//    client.end();
});

//    断开连接
client.on('end',function(){
    console.log('disconnected from server');
});