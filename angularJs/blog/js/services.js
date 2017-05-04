var blogServices = angular.module('blogServices',['ngResource']);

blogServices.factory('BlogPost',['$resource',function($resource){
	//	与REST服务通信 $resource对象 或 $http服务
	return $resource("http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/blog/:id",{},{
//		获取一个资源 或 一组资源
		get: {method: 'GET',cache: false,isArray: false},
//		创建一个新资源 或 获取一组资源
		save: {method: 'POST',cache: false,isArray: false},
//		更新一个资源
		update: {method: 'PUT',cache: false,isArray: false},
//		删除一个资源
		delete: {method: 'DELETE',cache: false,isArray: false}
	});
}]);

blogServices.factory('BlogList',['$resource',function($resource){
	return $resource("http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/blogList",{},{
//		isArray: true 让服务器返回一个列表 而非 单个资源
		get:{method: 'GET',cache: false,isArray: true}
	});
}]);

//添加 处理登录操作的服务
blogServices.factory('Login',['$resource',function($resource){
	return $resource("http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/login",{},{
		login:{method: 'POST',cache: false, isArray: false}
	});
}]);

blogServices.factory('BlogPostComments',['$resource',function($resource){
	return $resource("http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/comment/:id",{},{
		save: {method: 'POST',cache: false,isArray: false}
	});
}]);







