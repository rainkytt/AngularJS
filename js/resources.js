angular.module('myApp', []).controller('namesCtrl', function($scope) {
  $scope.names = [
    {
      resource: 'https://www.tutorialspoint.com/angularjs/',
      info: 'Õpetused ja näited.'
    },
    {
      resource: 'https://www.w3schools.com/angular/default.asp',
      info: 'Õpetused, näited ja online testimine.'
    },
    {
      resource:
        'https://www.yearofmoo.com/2012/08/use-angularjs-to-power-your-web-application.html',
      info: 'Väga põhjalik õpetus koos näidete ja selgitustega.'
    },
    {
      resource: 'https://ultimateangular.com/',
      info: 'Google enda inseneri õpetus Angularist 10 000 sõnaga.'
    },
    {
      resource:
        'https://www.ng-newsletter.com/posts/beginner2expert-how_to_start.html',
      info: '7 sammu algajast tegijani.'
    }
  ];
});
