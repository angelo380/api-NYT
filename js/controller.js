angular.module('nytApp',[])
	.controller('newsController',function($scope,$http){
		$scope.items= [];
		$scope.Prefix="";
		$http.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=science&api-key=42bc86951325cf0f4ab48f5e4cbeeac6%3A14%3A74976039')
			.success(function(data){
				console.log(data.response.docs[0].multimedia.url);
				$scope.items = data.response.docs;
				$scope.Prefix = "http:nytimes.com/";
			})
			.error(function(err){

			})
	});