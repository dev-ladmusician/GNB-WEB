$(document).ready(function () {
    var windowHeight = $(window).height();
    var footerHeight = $('.gnb-footer').outerHeight();

    $('.gnb-main-section').css('height', windowHeight - footerHeight);
    $('.gnb-main-container').css('height', windowHeight - footerHeight);
});

var app = angular.module('gnbApp', []).
controller('MainCtrl', function ($scope) {
    $scope.test= true;
    $scope.submit = function () {
    }
});