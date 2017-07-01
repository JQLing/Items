var mongodb = require('./db');

function Post(name,title,post){
    this.name = name;
    this.title = title;
    this.post = post;
}

module.exports = Post;

//存储一篇文章及其相关信息
Post.prototype.save=function(callback){
    var date = new Date();
//    存储各种时间格式，方便以后扩展
    var time ={
        date: date,
        year: date.getFullYear(),
        month:date.getFullYear() + '-' + (date.getMonth()+1),
        day: date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate(),
        minute: date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + '' + date.getHours() + ':' + (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()),
    };
//    要存入数据库的文档
    var post ={
        name: this.name,
        time: time,
        title: this.title,
        post: this.post 
    };
//    打开数据库
    mongodb.open(function(err,db){
        if(err){
            return callback;
        }
//        读取 posts 集合
        db.collection('posts',function(err,collection){
            if(err){
                mongodb.close();
                return callback;
            }
//            将文档插入 posts 集合
            collection.insert(post,{safe:true},function(err){
                if(err){
                    mongodb.close();
                    return callback(err);
                }
                return callback(null);
            });
        });
    }); 
};

//读取文章及其相关信息
Post.get = function(name,callback){
    mongodb.open(function(err,db){
        if(err){
            return callback;
        }
        db.collection('posts',function(err,collection){
            if(err){
                mongodb.close();
                return callback;
            }
            var query = {};
            if(name){
                query.name = name;
            }
            collection.find(query).sort({
                time: -1
            }).toArray(function(err,docs){
                if(err){
                    mongodb.close();
                    return callback(err);
                }
//                以数组形式返回查询的结果
                return callback(null,docs);
            });
        });
    });
};


collection.find(query).sort({time:-1}).toArray(function (error,docs) {
                 //去到数据的时候一定要关掉这个数据库
                 mongo.close();
                 if(error){

                     return callback(error);
                 }
                 callback(null,docs);
             })



