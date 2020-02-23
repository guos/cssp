app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'pages/dashboard.html'
            })
            .state('spaces', {
                url: '/space',
                templateUrl: 'pages/space.html'
            });
    }
]);