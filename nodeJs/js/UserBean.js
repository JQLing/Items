var events = require('events');

function UserBean(){
    this.eventEmit = new events.EventEmitter();
    this.register=function(req,res){
        console.log('注册');
        req['uname']='liu';
        req['pwd']='liuyifei';
//        抛出事件消息
        this.eventEmit.emit('registerSuccess','liu','liuyifei');
//        注册里调用登录方法，复杂情况时，会极难维护
//        this.login();
    },
        this.login=function(req,res){
            console.log('登录');
            res.write('用户名：'+req[uname]);
            res.write('密码：'+req[pwd]);
            res.write('登录');
        }
}
module.exports=UserBean;