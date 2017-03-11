/*
module.exports = controller; //只支持一个函数
*/

//支持多个函数
module.exports ={
    controller:function(req,res){
        res.write('发送');
        call(res);       
    },
    call:function(res){
        console.log('call');
    },
    getVisit:function(res){
        var visitnum=1;
        res.write(visitnum);
        return visitnum ++;
    },
    add:function(res){
        var a=2,
            b=4;
        res.write(a);
        return a+b;
    }
}