var app = angular.module('planetApp', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/mercury', {
      templateUrl: 'atmosphere.html',
      controller: 'mercuryCtrl'
    })
    .when('/venus', {
      templateUrl: 'atmosphere.html',
      controller: 'venusCtrl'
    })
    .when('/earth', {
      templateUrl: 'atmosphere.html',
      controller: 'earthCtrl'
    })
    .when('/mars', {
      templateUrl: 'atmosphere.html',
      controller: 'marsCtrl'
    })
    .when('/jupiter', {
      templateUrl: 'atmosphere.html',
      controller: 'jupiterCtrl'
    });
});

app.controller('mercuryCtrl', function($scope, $route) {
  $scope.planet = {
    name: 'Näide 1',
    carbondioxide: 'https://codepen.io/rainkytt/pen/XPwagJ',
    nitrogen: 'ex1.jpg',
    oxygen: 'Väljastab sinu kirjutatud teksti.'
  };
});

app.controller('venusCtrl', function($scope, $route) {
  $scope.planet = {
    name: 'Näide 2',
    carbondioxide: 'https://codepen.io/rainkytt/pen/wELXvQ',
    nitrogen: 'ex2.jpg',
    oxygen: 'Muudab teksivälja taustavärvi, selliseks nagu ise kirjutad.'
  };
});

app.controller('earthCtrl', function($scope, $route) {
  $scope.planet = {
    name: 'Näide 3',
    carbondioxide: 'https://codepen.io/rainkytt/pen/LJKrmQ',
    nitrogen: 'ex3.jpg',
    oxygen: 'Korrutab omavahel sisestatud arvud.'
  };
});

app.controller('marsCtrl', function($scope, $route) {
  $scope.planet = {
    name: 'Näide 4',
    carbondioxide: 'https://codepen.io/rainkytt/pen/ZMdjOX',
    nitrogen: 'ex4.jpg',
    oxygen: 'Hiire klik funktsiooni katsetus.'
  };
});

app.controller('jupiterCtrl', function($scope, $route) {
  $scope.planet = {
    name: 'Näide 5',
    carbondioxide: 'https://codepen.io/rainkytt/pen/LJKBBo',
    nitrogen: 'ex5.jpg',
    oxygen: 'Dropdown kasutades ng-options-t.'
  };
});
