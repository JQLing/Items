//var express = require('express');
//var router = express.Router();

var crypto = require('crypto');
var User = require('../models/user.js');
var Post = require('../models/post.js');

/* GET home page. */

module.exports = function(app){
    
    app.get('/', function(req, res) {
        Post.get(null,function(err,posts){
            if(err){
                posts = [];
            }
            res.render('index', {
                title: '主页',
                user:req.session.user,
                posts: posts,
                success:req.flash('success').toString(),
                error:req.flash('error').toString()
            });
        });
        
    });
	
    app.get('/reg',checkNotLogin);
    app.get('/reg',function(req,res){
        res.render('reg',{
            title:'注册',
            user:req.session.user,
            success:req.flash('success').toString(),
            error:req.flash('error').toString()
        });
    });
    app.post('/reg',checkNotLogin);
    app.post('/reg',function(req,res){
        var name = req.body.name;
        var password = req.body.password;
        var password_re = req.body['password-repeat'];
//        检查两次密码是否一致
        if(password_re !== password){
            req.flash('error','两次输入的密码不一致');
            return res.redirect('/reg');  //返回注册页
        }
//        生成密码的md5值
        var md5 = crypto.createHash('md5');
        var password = md5.update(req.body.password).digest('hex');
        
        var newUser = new User({
            name:req.body.name,
            password:password,
            email:req.body.eamil
        });
//        检查用户是否存在
        User.get(newUser.name,function(err,user){
            if(err){
                req.flash('error',err);
                return res.redirect('/');
            }
            if(user){
                req.flash('error','该用户已存在');
                return res.redirect('/reg');
            }
        });
//        如果不存在则增加新用户
        newUser.save(function(err,user){
            if(err){
                req.flash('error',err);
                return res.redirect('/reg');
            }
            req.session.user = user;
            res.redirect('/');
        });
    });
    app.get('/login',checkNotLogin);
    app.get('/login', function(req, res) {
        res.render('index', { title: '登录' });
    });
    app.post('/login',checkNotLogin);
    app.post('/login',function(req,res){
        var md5 = crypto.createHash('md5');
        var password = md5.update(req.body.password).digest('hex');
//        检查用户是否存在
        User.get(req.body.name,function(err,user){
            if(!user){
                req.flash('error','用户不存在');
                res.redirect('/login');
            }
//            用户名和密码都匹配后，将用户信息存入 session
            req.session.user = user;
            req.flash('success','登陆成功');
            res.redirect('/');
        });
    });
    app.get('/post', checkLogin);
    app.get('/post', function(req, res) {
        res.render('index', { title: '发表' });
    });
    app.post('/post', checkLogin);
    app.post('/post', function(req, res) {
        var currentUser = req.session.user;
        var post = new Post(currentUser.name,req.body.title,req.body.post);
        post.save(function(err){
            if(err){
                req.flash('error',err);
                return res.redirect('/');
            }
            req.flash('success','发布成功!');
            res.redirect('/');
        });
    });
    app.get('/logout',checkLogin);
    app.get('/logout',function(req,res){
        req.session.user = null;
        req.flash('success','登出成功');
        res.redirect('/');
    });
};

function checkLogin(req,res,next){
    if(!req.session.user){
        req.flash('error','未登录！');
        res.redirect('/login');
    }
    next();
}

function checkNotLogin(req,res,next){
    if(req.session.user){
        req.flash('error','已登录！');
        res.redirect('back');
    }
    next();
}





