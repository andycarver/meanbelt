const app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'session_controller'
        })
        .when('/dash', {
            templateUrl: 'partials/dash.html',
            controller: 'session_controller'
        })
        .when('/new_q', {
            templateUrl: 'partials/new_q.html',
            controller: 'session_controller'
        })
        .when('/show_q/:id', {
            templateUrl: 'partials/show_q.html',
            controller: 'session_controller'
        })
        .when('/answer_q/:id', {
            templateUrl: 'partials/answer_q.html',
            controller: 'session_controller'
        })
        .otherwise('/login')
})
