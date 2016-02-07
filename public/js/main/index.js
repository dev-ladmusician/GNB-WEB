$(document).ready(function () {
    var windowHeight = $(window).height();
    var footerHeight = $('.gnb-footer').outerHeight();

    $('.gnb-main-section').css('height', windowHeight - footerHeight);
    $('.gnb-main-container').css('height', windowHeight - footerHeight);
});

var app = angular.module('gnbApp', []).
controller('MainCtrl', function ($scope) {
    $scope.submit = function () {
        if ($scope.username && $scope.username.length == 10) {
            if ($scope.password && $scope.password.length > 4) {

            } else {
                $('.error-msg').html("정확한 비밀번호를 입력하세요.");
            }
        } else {
            $('.error-msg').html("올바른 학번을 입력하세요.");
        }
    }
});