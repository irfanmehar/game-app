( function(){

  'use strict';

  angular.module('myFirstApp',[])

  .controller('myFirstController', function ($scope) {
  $scope.name = "M.irfan";

  $scope.sayhello = function () {

    return "welcome sir";

  };


  } );



}) ();
