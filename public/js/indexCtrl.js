var app = angular.module('nuviTweets', []);

app.controller('indexCtrl', function( $scope, $http ) {
    $scope.tweets = {};
    $scope.init = function () {
        $.post('/tweets', function (data) {
            $scope.tweets = data;
            $scope.$apply();
        }).fail(function () {

        }).always(function () {
            $('.tweets').flip({
                axis: 'x',
                trigger: 'hover'
            });
        });
    };
});