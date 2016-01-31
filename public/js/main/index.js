$(document).ready(function () {
    var windowHeight = $(window).height();
    $('.gnb-main-section').css('height', windowHeight);
    $('.gnb-main-container').css('height', windowHeight);

    $(function() {
        var $video = $('#video-main');
        $video.on('canplaythrough', function() {
            this.play();
        });
    });
});