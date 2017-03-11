var mysql = require('mysql');
//直连mysql
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'54970',
    database:'test',
    port:'3306'
});

//创建一个connection
connection.connect(function(err){
    if(err){
        console.log('[query] - :'+err);
        return;
    }
    console.log('[connection connect] succeed!');
}); 
//执行插入
var userAddSql = 'insert into user(uname,pwd) values(?,?)';
var param = ['fu','fangfang'];

function insert(sql,param){
    connection.query(sql,param,function(err,rs){
    if(err){
        console.log('insert err:',err.message);
        return;
    }
    console.log('insert success');
});
}

insert(userAddSql,param);


//执行查询               rs:结果集
connection.query('select * from user where uid=?',[5],function(err,rs){
    if(err){
        console.log('[query] - :' + err);
        return;
    }
    for(var i=0;i<rs.length;i++){
        console.log('The solution is:',rs[i].uname);
//    console.log(fields);
    }    
});
//关闭connection
connection.end(function(err){
    if(err){
        console.log(err.toString());
        return;
    }
    console.log('[connection end] succeed!');
});
