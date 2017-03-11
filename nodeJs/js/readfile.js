var fs=require('fs');

fs.readFile('http.js','utf-8',function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
});
console.log('End.....');


fs.writeFile('./module/Studnet.js','1.我是一名大学生',function(err){
    if(err){
        throw err;
    }
    console.log('2.It’s saved! ');
});

fs.writeFileSync('./module/Teac.js','1.我是一名大学老师');
console.log('2.同步写文件');







