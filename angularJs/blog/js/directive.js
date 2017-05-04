var blogDirectives = angular.module('blogDirectives',[]);

blogDirectives.directive('blgMenu',function(){
	return {
		restrict: 'A',
		templateUrl: 'partials/menu.html',
//		传递给指令的所有参数 通过attrs参数传入link方法
		link: function(scope,ele,attrs){
			scope.label = attrs.menuTitle;
		}
	};
});




