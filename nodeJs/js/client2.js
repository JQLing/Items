// client.js

var net = require('net');
var server = require('./server');

// 连接服务器
var client = net.connect({port: 8080}, function() {
    console.log('connected to server');
    client.write('World!\r\n');
});

// 接收服务端的数据
client.on('data', function(data) {
    console.log('client got data from server: ', data.toString());
    // 断开连接
    client.end();
});

// 断开连接
client.on('end', function() {
    console.log('disconnected from server');
});