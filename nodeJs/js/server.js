var net = require('net');

net.createServer(function(socket){
    
    socket.on('data',function(data){
        console.log('server got data from client:',data.toString());
    });
    socket.on('end',function(data){
        console.log('connection closed');
    });
    socket.write('send client data\r\n');
}).listen(2000,function(){
    console.log('server bound');
})