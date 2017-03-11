var User = require('./User');

function Student(id,name,age){
    User.apply(this,[id,name,age]);
    this.doHomeWork=function(res){
        res.write(this.name + '写作业<br>');
    }
}

module.exports = Student;