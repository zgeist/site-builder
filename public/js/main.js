var Frambler = angular.module('Frambler', ['ngRoute', 'ngMaterial']);


Frambler.service('UserAuth', function($http){

  return {
    signUp: function(data){
      var promise = $http({
        method: 'post',
        url: '/api/signup',
        params: data
      }).success(function(data){
        console.log(data);
      });
    },
    sendUserData: function(data){

      var promise = $http({
        method: 'post',
        url: '',
        params: data
      }).success(function(data){

      });

      return promise;

    }
  }
});

Frambler.controller('UserAuthCtrl', function($scope, UserAuth){

  $scope.UserLogin = function(){

  };

  $scope.UserSignUp = function(){
    UserAuth.signUp($scope.user);
  };

});


