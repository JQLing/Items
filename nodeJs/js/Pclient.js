var net = require('net');

var client = net.connect({port:2000},function(){
    console.log('connected to Server.');
    client.write('hello,I am client.');
});

client.on('data',function(data){
    console.log('client got data from Server:',data.toString());
})
client.on('end',function(){
    console.log('disconnection from Server.');
});

