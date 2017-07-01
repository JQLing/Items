var mongodb = require('./db');

function User(user){
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
};

module.exports = User;

//存储用户信息
User.prototype.save = function(callback){
    var user = {
        name:this.name,
        password:this.password,
        email:this.email
    };
//    打开数据库
    mongodb.open(function(err,db){
        if(err){
            return callback(err);
        }
//        读取users集合
        db.collection('users',function(err,collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.insert(user,{safe:true},function(err,user){
                if(err){
                    mongodb.close();
                    return callback(err);
                }
//                err为null,返回存储后的用户文档
                return callback(null,user[0]);
            });
        });
    });
};

//读取用户信息
User.get = function(name,callback){
    mongodb.open(function(err,db){
        if(err){
            return callback(err);
        }
        db.collection('users',function(err,collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.findOne({
                name:name
            },function(err,user){
                if(err){
                    mongodb.close();
                    return callback(err);
                }
                callback(null,user);
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