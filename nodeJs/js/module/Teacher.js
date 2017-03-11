var User = require('./User');

function Teacher(id,name,age){
    User.apply(this,[id,name,age]);
    this.teach=function(res){
        res.write(this.name + '改作业<br>');
    }
}

module.exports = Teacher;