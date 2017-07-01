var blogControllers=angular.module('blogControllers',[]);

blogControllers.controller('BlogCtrl',['$scope','BlogList','$location','checkCreds',function BlogCtrl($scope,BlogList,$location,checkCreds){
	if(!checkCreds()){
		$location.path('/login');
	}
/*	
	$scope.blogList=[
		{
			"_id": 1,
			"date": 1400623623107,
			"introText": "This is a blog post about AngularJs.We will cover how to build",
			"blogText": "This is a blog post about AngularJs.We will cover how to build a blog and how to add comments to the blog post."
		},
		{
			"_id": 2,
			"date": 1400267723107,
			"introText": "In this blog post We will learn how to build applications based on REST",
			"blogText": "In this blog post We will learn how to build applications based on REST web services that contain most of the business login needed for the application."
		}
	];
*/
	$scope.brandColor = "color: white;"
	$scope.blogList = [];
//	获取一组资源
	BlogList.get({},function success(response){
		console.log("Success:"+ JSON.stringify(response));
		$scope.blogList = response;
	},function error(errorResponse){
		console.log('Error:'+ JSON.stringify(errorResponse));
	});
}]);

blogControllers.controller('BlogViewCtrl',['$scope','$routeParams','BlogPost','$location','checkCreds','$http','BlogPostComments','getToken','$route',function BlogViewCtrl($scope,$routeParams,BlogPost,$location,checkCreds,$http,BlogPostComments,getToken,$route){
	if(!checkCreds()){
		$location.path('/login');
	}
	var blogId = $routeParams.id;
	$scope.blg = 1;
/*	
	var blog1 = {
		"_id": 1,
		"data": 1400623623107,
		"introText": "This is a blog post about AngularJs.We will cover how to build",
		"blogText": "This is a blog post about AngularJs.We will cover how to build a blog and how to add comments to the blog post.",
		"comments": [
			{
				"commentText": "Very good post. I love it."
			},
			{
				"commentText": "When can we learn services."
			}
		]
	};
	var blog2 = {
		"_id": 2,
		"data": 1400267723107,
		"introText": "In this blog post We will learn how to build applications based on REST",
		"blogText": "In this blog post We will learn how to build applications based on REST web services that contain most of the business login needed for the application.",
		"comments": [
			{
				"commentText": "REST is great. I want know more."
			},
			{
				"commentText": "Will we use Node.js for REST services?"
			}
		]
	};
	
	if(blogId === '1'){
		$scope.blogEntry = blog1;
	}else if(blogId === '2'){
		$scope.blogEntry = blog2;
	}
*/
	
//	获取一个资源
	BlogPost.get({id:blogId},function success(response){
		console.log('Success:'+ JSON.stringify(response));
		$scope.blogEntry = response;
		$scope.blogId = response._id;
	},function error(errorResponse){
		console.log('Error:'+ JSON.stringify(errorResponse));
	});
	
	$scope.submit = function(){
		$scope.sub = true;
		//	在多个REST服务中 认证用户：基本认证（Basic Authentication）
		//	请求服务时，在HTTPS首部把用户名、密码对应的令牌发给服务
		$http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
		var postData ={
			"commentText": $scope.commentText,
			"blog": $scope.blogId
		};
		BlogPostComments.save({},postData,function success(response){
			console.log('Success:'+ JSON.stringify(response));
			$location.path('/blogPost/' + $scope.blogId);
			$route.reload();
		},function error(errorResponse){
			console.log('Error:'+ JSON.stringify(errorResponse));
		});
	};
	
}]);

blogControllers.controller('NewBlogPostCtrl',['$scope','checkCreds','$location','$http','getToken','checkCreds','BlogPost',function($scope,checkCreds,$location,$http,getToken,checkCreds,BlogPost){
	if(!checkCreds()){
		$location.path('/login');
	}
	$scope.languageList = [  
		{
			"id": 1,
			"name": "English"
		},
		{
			"id": 2,
			"name": "Spanish"
		}
	];
	$scope.languageId = 1;
	$scope.newActiveClass = "active";
	$scope.submit =function(){
		$scope.sub = true;
		
		//	在多个REST服务中 认证用户：基本认证（Basic Authentication）
		//	请求服务时，在HTTPS首部把用户名、密码对应的令牌发给服务
		$http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
		
		var postData ={
			"introText": $scope.introText,
			"blogText": $scope.blogText,
			"languageId": $scope.languageId
		};
		//	创建一个资源
		BlogPost.save({},postData,function success(response){
			console.log("Success:"+ JSON.stringify(response));
			$scope.status = response;
			console.log('创建blog成功！');
			$location.path('/');
		},function error(errorResponse){
			console.log('Error:'+ JSON.stringify(errorResponse));
		});
	}
}]);

blogControllers.controller('AboutBlogCtrl',['$scope','$location','checkCreds',function AboutBlogCtrl($scope,$location,checkCreds){
	if(!checkCreds()){
		$location.path('/login');
	}
	$scope.aboutActiveClass = "active";
}]);

//添加 处理登录操作的控制器
blogControllers.controller('LoginCtrl',['$scope','$location','Login','setCreds',function LoginCtrl($scope,$location,Login,setCreds){
	$scope.submit = function(){
		$scope.sub = true;
		var postData ={
			"username": $scope.username,
			"password": $scope.password
		};
		Login.login({},postData,function success(response){
			console.log("Success:"+ JSON.stringify(response));
			if(response.authenticated){
				setCreds($scope.username,$scope.password);
				$location.path('/');
			}else{
				$scope.error = "Login Failed."
			}
		},function error(errorResponse){
			console.log('Error:'+ JSON.stringify(errorResponse));
		});
	};
}]);

// 添加 处理退出操作的控制器
blogControllers.controller('LogoutCtrl',['$location','deleteCreds',function LogoutCtrl($location,deleteCreds){
	deleteCreds();
	$location.path('/login');
}]);
























