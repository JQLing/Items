process.stdin.setEncoding('utf8');

process.stdin.on('readable',function(){
    var chunk = process.stdin.read();
    if(chunk !==null){
        process.stdout.write('data: '+chunk);
    }
});
process.stdin.on('end',function(){
    process.stdout.write('end');
});


create table user(
    uid int not null primary key auto_increment,
    uname varchar(100) not null,
    pwd varchar(100) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


