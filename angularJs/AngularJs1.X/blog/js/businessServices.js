//业务逻辑服务
var blogBusinessServices = angular.module('blogBusinessServices',['ngCookies']);

//检查用户凭证（服务器返回false，删除认证凭据，把用户重定向到登录页面）
blogBusinessServices.factory('checkCreds',['$cookies',function($cookies){
	return function(){
		var returnVal = false;
		var blogCreds = $cookies.blogCreds;
		if(blogCreds !== undefined && blogCreds !==""){
			returnVal = true;
		}
		return returnVal;
	};
}]);
//获取用户凭证
blogBusinessServices.factory('getToken',['$cookies',function($cookies){
	return function(){
		var returnVal = "";
		var blogCreds = $cookies.blogCreds;
		if(blogCreds !== undefined && blogCreds !==""){
			returnVal = btoa(blogCreds);  // 必须使用base64编码令牌
		}
		return returnVal;
	};
}]);
//获取用户名（ 只要业务逻辑要在 多个控制器 中使用，就应该在 服务 中定义 ）
blogBusinessServices.factory('getUsername',['$cookies',function($cookies){
	return function(){
		var returnVal = "";
		var blogUsername = $cookies.blogUsername;
		if(blogUsername !== undefined && blogUsername !==""){
			returnVal = blogUsername;
		}
		return returnVal;
	};
}]);

// 保存用户凭证（用户请求登录并通过认证后、用户修改密码后）
blogBusinessServices.factory('setCreds',['$cookies',function($cookies){
	return function(un,pw){
//		构建令牌
		var token = un.concat(":",pw);  //令牌格式 “用户名:密码”
		$cookies.blogCreds = token;
		$cookies.blogUsername = un;
	};
}]);

//删除用户凭证（用户会话结束后、请求REST服务时认证失败后）
blogBusinessServices.factory('deleteCreds',['$cookies',function($cookies){
	return function(){
		$cookies.blogCreds = "";
		$cookies.blogUsername = "";
	};
}]);


